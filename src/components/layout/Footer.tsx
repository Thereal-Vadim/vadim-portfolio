"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { footerLinks, socialLinks } from "@/data/content";

const FooterLogo = dynamic(
  () => import("@/components/ui/FooterLogo").then((m) => m.FooterLogo),
  { ssr: false },
);

export function Footer() {
  return (
    <footer
      data-scroll="dark"
      className="theme-dark bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large pb-8">
            <div className="mb-16 overflow-hidden">
              <FooterLogo />
            </div>

            <div className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center md:justify-between">
              <p className="text-sm">© 2026 nomoredesign Limited</p>

              <div className="flex flex-wrap gap-6">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    data-hover="no-cursor"
                    className="text-sm underline decoration-dotted underline-offset-4"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    data-hover="no-cursor"
                    className="text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
