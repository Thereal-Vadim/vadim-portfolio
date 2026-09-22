"use client";

import { FormEvent, useState } from "react";
import { footerContact } from "@/data/content";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Message from ${name || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${footerContact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="footer-contact-aside">
      <form className="footer-contact-form" onSubmit={handleSubmit}>
        <div className="footer-inputs-box">
          <label className="footer-field">
            <span className="footer-field-label">
              <span className="footer-field-num">01</span>
              <span className="footer-field-name">Your name</span>
            </span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoComplete="name"
              required
            />
          </label>

          <label className="footer-field">
            <span className="footer-field-label">
              <span className="footer-field-num">02</span>
              <span className="footer-field-name">Your email</span>
            </span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </label>

          <label className="footer-field footer-field--message">
            <span className="footer-field-label">
              <span className="footer-field-num">03</span>
              <span className="footer-field-name">Your message</span>
            </span>
            <textarea
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />
          </label>
        </div>

        <button type="submit" className="footer-submit" data-hover="no-cursor">
          <span className="footer-submit-inner">
            <SendArrow />
            <span>Send message</span>
          </span>
        </button>
      </form>

      <div className="footer-channel-row">
        <a
          href={`mailto:${footerContact.email}`}
          data-hover="no-cursor"
          className="footer-channel-link"
        >
          {footerContact.email}
        </a>
        {footerContact.channelLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-hover="no-cursor"
            className="footer-channel-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function SendArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
