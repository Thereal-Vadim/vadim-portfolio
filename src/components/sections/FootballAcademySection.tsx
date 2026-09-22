import Image from "next/image";
import { footballAcademyPage } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";

function RichText({ value }: { value: string }) {
  const parts = value.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function BrowserFrame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <figure className="fa-browser">
      <div className="fa-browser-bar" aria-hidden="true">
        <span className="fa-browser-dot" />
        <span className="fa-browser-dot" />
        <span className="fa-browser-dot" />
        <span className="fa-browser-url">{label}</span>
      </div>
      <div className="fa-browser-screen">{children}</div>
    </figure>
  );
}

export function FootballAcademySection() {
  const page = footballAcademyPage;

  return (
    <article>
      <section data-scroll="dark" className="work-page-hero theme-dark">
        <div className="work-page-hero-stage">
          <Image
            src={page.hero.photo}
            alt={page.hero.photoAlt}
            fill
            priority
            className="work-page-hero-photo fa-hero-photo"
            sizes="100vw"
          />
          <div className="work-page-hero-scrim" aria-hidden="true" />
          <div className="work-page-hero-mark fa-hero-mark">
            <Image
              src={page.hero.lockup}
              alt="MSM Football Academy Prague"
              width={697}
              height={812}
              priority
              className="work-page-hero-lockup"
            />
          </div>
        </div>
      </section>

      <section
        data-scroll="light"
        className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
      >
        <div className="work-page-intro">
          <div className="work-page-intro-head">
            <h1 className="heading-h1">{page.title}</h1>
            <ButtonLink href={page.liveHref} external>
              {page.liveLabel}
            </ButtonLink>
          </div>

          <div className="about-page-facts work-page-facts">
            {page.meta.map((fact) => (
              <div key={fact.num} className="about-page-fact">
                <p className="about-page-fact-label">
                  <span>{fact.num}</span>
                  <span>{fact.label}</span>
                </p>
                <p className="about-page-fact-value">{fact.value}</p>
              </div>
            ))}
          </div>

          <div className="work-page-lede">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>
                <RichText value={paragraph} />
              </p>
            ))}
          </div>
        </div>

        <div className="padding-global">
          <div className="container-large">
            <section className="work-page-block">
              <div className="work-page-split">
                <h2 className="heading-h5">{page.brand.title}</h2>
                <div className="work-page-copy">
                  {page.brand.copy.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText value={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
              <div className="work-page-gallery work-page-gallery--three">
                {page.brand.images.map((image, index) => (
                  <figure
                    key={image.src}
                    className={`work-page-frame${index === 1 ? " work-page-frame--contain" : ""}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="work-page-image"
                      sizes="(min-width: 768px) 33vw, 90vw"
                    />
                  </figure>
                ))}
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-split">
                <h2 className="heading-h5">{page.website.title}</h2>
                <div className="work-page-copy">
                  {page.website.copy.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText value={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
              <BrowserFrame label="fcmsm.eu">
                <Image
                  src={page.website.screens[0].src}
                  alt={page.website.screens[0].alt}
                  width={page.website.screens[0].width}
                  height={page.website.screens[0].height}
                  className="work-page-image"
                  sizes="(min-width: 768px) 70vw, 90vw"
                />
              </BrowserFrame>
              <div className="fa-desktop-row">
                {page.website.screens.slice(1).map((screen) => (
                  <BrowserFrame key={screen.src} label="fcmsm.eu">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={screen.width}
                      height={screen.height}
                      className="work-page-image"
                      sizes="(min-width: 768px) 35vw, 90vw"
                    />
                  </BrowserFrame>
                ))}
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-split">
                <h2 className="heading-h5">{page.video.title}</h2>
                <div className="work-page-copy">
                  {page.video.copy.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText value={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
              <div className="fa-video">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={page.video.poster}
                  width={1600}
                  height={1000}
                  aria-label="Walkthrough of the MSM Football Academy website"
                >
                  <source src={page.video.src} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-print-grid">
                <div className="work-page-print-copy">
                  <h2 className="heading-h5">{page.print.title}</h2>
                  <div className="work-page-copy">
                    {page.print.copy.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText value={paragraph} />
                      </p>
                    ))}
                  </div>
                </div>
                {page.print.images.map((image) => (
                  <figure key={image.src} className="work-page-frame">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="work-page-image"
                      sizes="(min-width: 768px) 33vw, 90vw"
                    />
                  </figure>
                ))}
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-split fa-ig-split">
                <div>
                  <h2 className="heading-h5">{page.instagram.title}</h2>
                  <div className="work-page-copy">
                    {page.instagram.copy.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText value={paragraph} />
                      </p>
                    ))}
                  </div>
                  <div className="fa-ig-link">
                    <ButtonLink href={page.instagram.href} external>
                      {page.instagram.handle}
                    </ButtonLink>
                  </div>
                </div>
                <figure className="work-page-frame fa-ig-frame">
                  <Image
                    src={page.instagram.image.src}
                    alt={page.instagram.image.alt}
                    width={page.instagram.image.width}
                    height={page.instagram.image.height}
                    className="work-page-image"
                    sizes="(min-width: 768px) 40vw, 90vw"
                  />
                </figure>
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-split">
                <h2 className="heading-h5">{page.process.title}</h2>
                <div className="work-page-copy">
                  <p>
                    <RichText value={page.process.body} />
                  </p>
                </div>
              </div>
            </section>

            <section className="work-page-block work-page-recommend">
              <figure className="work-page-portrait">
                <Image
                  src={page.recommendation.photo}
                  alt={page.recommendation.name}
                  width={512}
                  height={512}
                  className="work-page-portrait-image fa-portrait-monogram"
                />
              </figure>
              <div>
                <p className="work-page-recommend-name">
                  <span>{page.recommendation.name}</span>
                  <span>{page.recommendation.role}</span>
                </p>
                <div className="work-page-copy">
                  {page.recommendation.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>

            <div className="work-page-end">
              <ButtonLink href="/#gallery" flipArrow>
                back to work
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
