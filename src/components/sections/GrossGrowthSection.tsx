import { grossGrowthPage } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WorkShot } from "@/components/ui/WorkShot";

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

export function GrossGrowthSection() {
  const page = grossGrowthPage;

  return (
    <article>
      <section data-scroll="dark" className="work-page-hero theme-dark">
        <div className="work-page-hero-stage">
          <WorkShot
            src={page.hero.photo}
            alt={page.hero.photoAlt}
            fill
            variant="hero"
            className="work-page-hero-photo"
          />
          <div className="work-page-hero-scrim" aria-hidden="true" />
          <div className="work-page-hero-mark gg-hero-mark">
            <p className="gg-hero-wordmark">{page.hero.wordmark}</p>
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
              <div className="work-page-split work-page-split--mobile">
                <div>
                  <h2 className="heading-h5">{page.product.title}</h2>
                  <div className="work-page-copy">
                    {page.product.copy.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText value={paragraph} />
                      </p>
                    ))}
                  </div>
                </div>
                <div className="work-page-phones gymini-phones">
                  {page.product.phones.map((phone) => (
                    <figure key={phone.src} className="work-page-phone">
                      <WorkShot
                        src={phone.src}
                        alt={phone.alt}
                        width={phone.width}
                        height={phone.height}
                        variant="phone"
                        label={phone.file}
                        className="work-page-image"
                      />
                    </figure>
                  ))}
                </div>
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-split">
                <h2 className="heading-h5">{page.analytics.title}</h2>
                <div className="work-page-copy">
                  {page.analytics.copy.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText value={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
              <BrowserFrame label={page.analytics.browserLabel}>
                <WorkShot
                  src={page.analytics.image.src}
                  alt={page.analytics.image.alt}
                  width={page.analytics.image.width}
                  height={page.analytics.image.height}
                  variant="frame"
                  label={page.analytics.image.file}
                  className="work-page-image"
                />
              </BrowserFrame>
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
