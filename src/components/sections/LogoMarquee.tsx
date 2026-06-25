import Image from "next/image";
import { clientLogos } from "@/data/content";

export function LogoMarquee() {
  const row = [...clientLogos, ...clientLogos];

  return (
    <div className="carousel-wrapper">
      <section
        data-scroll="dark"
        className="theme-dark overflow-hidden bg-[var(--color-background)] py-8 text-[var(--color-text)]"
      >
        <div className="scroll-marquee flex shrink-0 gap-16 py-8">
          {row.map((logo, index) => (
            <LogoItem key={`${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </section>

      <section
        data-scroll="dark"
        className="theme-dark overflow-hidden bg-[var(--color-background)] py-8 text-[var(--color-text)]"
      >
        <div className="scroll-marquee-reverse flex shrink-0 gap-16 py-8">
          {[...row].reverse().map((logo, index) => (
            <LogoItem key={`rev-${logo.name}-${index}`} logo={logo} />
          ))}
        </div>
      </section>
    </div>
  );
}

function LogoItem({ logo }: { logo: (typeof clientLogos)[number] }) {
  return (
    <div className="flex shrink-0 items-center">
      <Image
        src={logo.src}
        alt={logo.name}
        width={160}
        height={56}
        className="max-h-14 w-auto object-contain opacity-80"
      />
    </div>
  );
}
