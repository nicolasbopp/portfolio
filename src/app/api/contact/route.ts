import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FILL_MS = 2500; // Bots submit instantly; people take longer than this.

// Best-effort limit per server instance; enough to blunt casual abuse.
const recent = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 5;
}

function bad(message: string, status = 400) {
  return Response.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return bad("The form could not be read. Reload the page and try again.");
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const website = String(body.website ?? ""); // honeypot field, hidden from people
  const startedAt = Number(body.startedAt ?? 0);

  // Silently accept obvious bots so they get no signal to adapt.
  if (website || Date.now() - startedAt < MIN_FILL_MS) {
    return Response.json({ ok: true });
  }

  if (!name || name.length > 120) return bad("Enter your name (up to 120 characters).");
  if (!EMAIL_RE.test(email) || email.length > 200) return bad("Enter a valid email address so I can reply.");
  if (message.length < 10) return bad("Write a message of at least 10 characters.");
  if (message.length > 5000) return bad("Shorten the message to 5000 characters or fewer.");

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return bad("Too many messages from this connection. Try again in ten minutes.", 429);

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO and CONTACT_FROM.");
    return bad("The contact form is not available right now. Use LinkedIn instead.", 503);
  }

  const resend = new Resend(RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: CONTACT_TO,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `${message}\n\n--\n${name} <${email}>`,
  });

  if (error) {
    console.error("Resend error", error);
    return bad("The message could not be sent. Try again later or use LinkedIn.", 502);
  }
  return Response.json({ ok: true });
}
