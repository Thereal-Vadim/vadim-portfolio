import Link from "next/link";
import { footerContact, footerLinks } from "@/data/content";
import { ContactForm } from "@/components/forms/ContactForm";

export function Footer() {
  return (
    <footer
      data-scroll="dark"
      className="footer-contact theme-dark bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="footer-contact-shell">
        <div className="footer-contact-grid">
          <div className="footer-contact-title">
            <h2 className="footer-contact-headline">{footerContact.headline}</h2>
            <p className="footer-contact-subtitle">{footerContact.body}</p>
            <nav className="footer-legal" aria-label="Legal">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-contact-spacer" aria-hidden="true" />

          <ContactForm />
        </div>
      </div>
    </footer>
  );
}
