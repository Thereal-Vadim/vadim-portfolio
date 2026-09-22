"use client";

import { footerContact, pricingNote } from "@/data/content";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="contact-page-shell">
        <div className="footer-contact-grid">
          <div className="footer-contact-title">
            <AnimatedTitle
              headline="Ready to launch?"
              alternate="Let's have a chat."
              singleLine
            />
            <p className="footer-contact-subtitle">
              Whether you have a detailed brief or just an early idea you want to talk
              through, feel free to reach out. No complex agency pitches - just a
              direct, honest conversation about your goals.
            </p>
            <p className="contact-page-note">
              {pricingNote.headline} · {pricingNote.eyebrow}
            </p>
            <p className="footer-contact-subtitle">{pricingNote.body}</p>
            <p className="contact-page-note">
              Prague · Kefir Software Company · {footerContact.email}
            </p>
          </div>

          <div className="footer-contact-spacer" aria-hidden="true" />

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
