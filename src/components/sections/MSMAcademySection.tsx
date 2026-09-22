import Image from "next/image";
import { msmAcademyPage } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MSMConstructionGrid } from "@/components/sections/MSMConstructionGrid";

function RichText({ value }: { value: string }) {
  const parts = value.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

export function MSMAcademySection() {
  const page = msmAcademyPage;

  return (
    <article>
      <section data-scroll="dark" className="work-page-hero theme-dark">
        <div className="work-page-hero-stage">
          <Image
            src={page.hero.photo}
            alt={page.hero.photoAlt}
            fill
            priority
            className="work-page-hero-photo"
            sizes="100vw"
          />
          <div className="work-page-hero-scrim" aria-hidden="true" />
          <div className="work-page-hero-mark">
            <Image
              src={page.hero.lockup}
              alt="MSM Study Dubai"
              width={1024}
              height={502}
              priority
              className="work-page-hero-lockup"
            />
          </div>
          <div className="work-page-hero-partners" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.hero.knowledge}
              alt=""
              className="work-page-partner work-page-partner--knowledge"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={page.hero.ets}
              alt=""
              className="work-page-partner work-page-partner--ets"
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
                <figure className="work-page-frame">
                  <Image
                    src={page.brand.images[0].src}
                    alt={page.brand.images[0].alt}
                    width={page.brand.images[0].width}
                    height={page.brand.images[0].height}
                    className="work-page-image"
                    sizes="(min-width: 768px) 33vw, 90vw"
                  />
                </figure>
                <figure className="work-page-frame work-page-frame--grid">
                  <MSMConstructionGrid />
                </figure>
                <figure className="work-page-frame">
                  <Image
                    src={page.brand.images[1].src}
                    alt={page.brand.images[1].alt}
                    width={page.brand.images[1].width}
                    height={page.brand.images[1].height}
                    className="work-page-image"
                    sizes="(min-width: 768px) 33vw, 90vw"
                  />
                </figure>
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-split work-page-split--mobile">
                <div>
                  <h2 className="heading-h5">{page.mobile.title}</h2>
                  <div className="work-page-copy">
                    {page.mobile.copy.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText value={paragraph} />
                      </p>
                    ))}
                  </div>
                </div>
                <div className="work-page-phones">
                  {page.mobile.phones.map((phone) => (
                    <figure key={phone.src} className="work-page-phone">
                      <Image
                        src={phone.src}
                        alt={phone.alt}
                        width={phone.width}
                        height={phone.height}
                        className="work-page-image"
                        sizes="(min-width: 768px) 18rem, 45vw"
                      />
                    </figure>
                  ))}
                </div>
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
                  className="work-page-portrait-image"
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
