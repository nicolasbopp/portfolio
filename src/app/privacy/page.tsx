import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content";

export const metadata: Metadata = { title: "Privacy, Nicolas Bopp" };

export default function Privacy() {
  return (
    <div className="page">
      <header className="site-header">
        <Link className="wordmark" href="/">
          {profile.name}
        </Link>
      </header>
      <main className="prose">
        <h1>Privacy notice</h1>
        <p>
          This site is run by {profile.name}, {profile.location}. It does not use cookies, analytics or tracking.
        </p>

        <h2>Contact form</h2>
        <p>
          When you send a message, your name, email address and message are passed to the email service Resend
          (Resend, Inc., USA) and delivered to my inbox. They are used only to answer you and are not stored on this
          website. I delete messages once the conversation is over, unless we keep working together.
        </p>

        <h2>Hosting</h2>
        <p>
          The hosting provider processes technical data such as IP addresses in server logs to deliver the site and
          protect it against abuse.
        </p>

        <h2>Your rights</h2>
        <p>
          You can ask what data I hold about you, and have it corrected or deleted, by writing to me through the
          contact form or on <a href={profile.linkedin}>LinkedIn</a>.
        </p>
      </main>
    </div>
  );
}
