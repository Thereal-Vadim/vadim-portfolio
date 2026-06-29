"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, services } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { NavLogo } from "@/components/ui/NavLogo";

const LottieAnimation = dynamic(
  () => import("@/components/ui/LottieAnimation").then((m) => m.LottieAnimation),
  { ssr: false },
);

const RiveAnimation = dynamic(
  () => import("@/components/ui/RiveAnimation").then((m) => m.RiveAnimation),
  { ssr: false },
);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const gallery = document.querySelector("[data-scroll='dark'].section-gallery");
      if (!gallery) return;

      const galleryRect = gallery.getBoundingClientRect();
      setIsDark(galleryRect.top <= 72);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 min-h-[4.5rem] transition-colors duration-300 ${
        isDark ? "theme-dark text-[var(--color-text)]" : "theme-light"
      }`}
    >
      <div className="padding-global">
        <div className="container-large grid min-h-[4.5rem] grid-cols-3 items-center">
          <NavLogo />

          <button
            type="button"
            data-hover="no-cursor"
            className="nav-menu-trigger justify-self-center border-0 bg-transparent p-0 text-[1.125rem] font-bold leading-none text-inherit"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-haspopup="dialog"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            (menu)
          </button>

          <span className="justify-self-end text-[1.125rem] font-bold leading-none">
            (since 2020)
          </span>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[60] overflow-auto bg-[var(--color-background)] text-[var(--color-text)]"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="padding-global pt-[4.5rem]">
            <div className="container-large">
              <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_2fr]">
                <nav className="flex flex-col gap-0 border-t border-[var(--color-border)]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="border-b border-[var(--color-border)] py-2 text-left text-[2.5rem] font-bold leading-[1.2]"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="grid gap-8 md:grid-cols-3">
                  {services.map((service) => (
                    <div key={service.eyebrow} className="flex flex-col">
                      <div className="mb-6 aspect-square overflow-hidden rounded-[var(--radius-large)]">
                        {service.animationType === "rive" ? (
                          <RiveAnimation src={service.animation} className="h-full w-full" />
                        ) : (
                          <LottieAnimation src={service.animation} className="h-full w-full" />
                        )}
                      </div>
                      <p className="eyebrow mb-2">{service.eyebrow}</p>
                      <h3 className="heading-h5 mb-3">{service.title}</h3>
                      <p className="mb-6 text-[0.9375rem] leading-relaxed">{service.description}</p>
                      <ButtonLink href={service.href} flipArrow={service.eyebrow === "Webflow"}>
                        {service.linkText}
                      </ButtonLink>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
