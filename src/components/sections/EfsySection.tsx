import Image from "next/image";
import { efsyPage } from "@/data/content";
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

export function EfsySection() {
  const page = efsyPage;

  return (
    <article>
      <section data-scroll="dark" className="work-page-hero theme-dark">
        <div className="work-page-hero-stage">
          <Image
            src={page.hero.photo}
            alt={page.hero.photoAlt}
            fill
            priority
            className="work-page-hero-photo efsy-hero-photo"
            sizes="100vw"
          />
          <div className="work-page-hero-scrim" aria-hidden="true" />
          <div className="work-page-hero-mark efsy-hero-mark">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={page.hero.lockup} alt="Efsy" className="work-page-hero-lockup" />
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
                {page.brand.images.map((image) => (
                  <figure
                    key={image.src}
                    className={`work-page-frame${image.contain ? " work-page-frame--contain efsy-mark-frame" : ""}`}
                  >
                    {image.src.endsWith(".svg") ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={image.src} alt={image.alt} className="work-page-image" />
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="work-page-image"
                        sizes="(min-width: 768px) 33vw, 90vw"
                      />
                    )}
                  </figure>
                ))}
              </div>
            </section>

            <section className="work-page-block">
              <div className="work-page-split">
                <h2 className="heading-h5">{page.menu.title}</h2>
                <div className="work-page-copy">
                  {page.menu.copy.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText value={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
              <BrowserFrame label="efsy.cz/menu">
                <Image
                  src={page.menu.screens[0].src}
                  alt={page.menu.screens[0].alt}
                  width={page.menu.screens[0].width}
                  height={page.menu.screens[0].height}
                  className="work-page-image"
                  sizes="(min-width: 768px) 70vw, 90vw"
                />
              </BrowserFrame>
              <div className="fa-desktop-row">
                {page.menu.screens.slice(1).map((screen) => (
                  <BrowserFrame key={screen.src} label="efsy.cz/menu">
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
                <h2 className="heading-h5">{page.posters.title}</h2>
                <div className="work-page-copy">
                  {page.posters.copy.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText value={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
              <div className="work-page-gallery work-page-gallery--three">
                {page.posters.images.map((image) => (
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
              <div className="work-page-split work-page-split--mobile">
                <div>
                  <h2 className="heading-h5">{page.app.title}</h2>
                  <div className="work-page-copy">
                    {page.app.copy.map((paragraph) => (
                      <p key={paragraph}>
                        <RichText value={paragraph} />
                      </p>
                    ))}
                  </div>
                </div>
                <div className="work-page-phones efsy-phones">
                  {page.app.phones.map((phone) => (
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
              <div className="work-page-split">
                <h2 className="heading-h5">{page.events.title}</h2>
                <div className="work-page-copy">
                  {page.events.copy.map((paragraph) => (
                    <p key={paragraph}>
                      <RichText value={paragraph} />
                    </p>
                  ))}
                </div>
              </div>
              <div className="work-page-gallery work-page-gallery--three">
                {page.events.images.map((image) => (
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
