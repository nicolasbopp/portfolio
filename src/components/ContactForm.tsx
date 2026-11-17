"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./ContactForm.module.css";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

export default function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" });
  const startedAt = useRef<number>(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setState({ kind: "error", message: json.error ?? "The message could not be sent. Try again later." });
        return;
      }
      form.reset();
      setState({ kind: "sent" });
    } catch {
      setState({ kind: "error", message: "No connection. Check your network and send again." });
    }
  }

  if (state.kind === "sent") {
    return (
      <p className={styles.sent} role="status">
        Message sent. I will reply to the address you entered.
      </p>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
      onFocus={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
      noValidate={false}
    >
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input name="name" autoComplete="name" required maxLength={120} />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required maxLength={200} />
        </label>
      </div>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" rows={6} required minLength={10} maxLength={5000} />
      </label>
      {/* Honeypot: hidden from people and assistive tech, filled in by naive bots. */}
      <div className={styles.trap} aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className={styles.actions}>
        <button type="submit" disabled={state.kind === "sending"}>
          {state.kind === "sending" ? "Sending message" : "Send message"}
        </button>
        {state.kind === "error" && (
          <p className={styles.error} role="alert">
            {state.message}
          </p>
        )}
      </div>
      <p className={styles.note}>
        Your name, email and message are sent to me by email and not stored on this site. See the{" "}
        <Link href="/privacy">privacy notice</Link>.
      </p>
    </form>
  );
}
