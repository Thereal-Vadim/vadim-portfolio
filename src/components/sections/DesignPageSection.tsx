"use client";

import { designPage, pricingNote } from "@/data/content";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";

function isExternalHref(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function DesignPageSection() {
  return (
    <section
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="about-page-shell">
        <div className="max-w-5xl">
          <AnimatedTitle
            headline={designPage.headline}
            alternate={designPage.alternate}
          />
        </div>
      </div>

      <div className="padding-global">
        <div className="container-large">
          <div className="dev-page-lead">
            <div className="dev-page-copy">
              <p>{designPage.intro}</p>
              <p>{designPage.audience}</p>
            </div>

            {/* Swap this block for a Figma / prototype interactive later. */}
            <div className="dev-media-placeholder">
              <p>добавить интерактив: листать экраны в Figma</p>
            </div>
          </div>

          <div className="dev-page-stacks">
            {designPage.facts.flatMap((row) =>
              [
                { num: "01", label: "Type", value: row.type },
                { num: "02", label: "Stack", value: row.stack },
                { num: "03", label: "Includes", value: row.includes, detail: row.time, wrap: true },
                { num: "04", label: "From", value: row.from },
              ].map((fact) => (
                <div
                  key={`${row.type}-${fact.num}`}
                  className={`dev-page-stack-cell${"wrap" in fact && fact.wrap ? " dev-page-stack-cell--copy" : ""}`}
                >
                  <p className="about-page-fact-label">
                    <span>{fact.num}</span>
                    <span>{fact.label}</span>
                  </p>
                  <p className="about-page-fact-value">
                    {fact.value.split("\n").map((line, index) => (
                      <span key={`${fact.num}-${index}`}>
                        {index > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </p>
                  {"detail" in fact && fact.detail ? (
                    <p className="about-page-fact-value">{fact.detail}</p>
                  ) : null}
                </div>
              )),
            )}
          </div>

          <div className="about-page-principles">
            {designPage.principles.map((principle) => (
              <div key={principle.num} className="about-page-principle">
                <p className="eyebrow mb-3">
                  {principle.num} {principle.title}
                </p>
                <p className="m-0 text-[0.9375rem] leading-relaxed">{principle.body}</p>
              </div>
            ))}
          </div>

          <div className="service-page-cases">
            <p className="eyebrow mb-8">Selected work</p>
            <div className="service-page-case-grid">
              {designPage.cases.map((item) => (
                <div key={item.label} className="service-page-case">
                  <p className="heading-h5 mb-3">{item.label}</p>
                  <p className="mb-4 text-[0.9375rem] leading-relaxed">{item.caption}</p>
                  {"href" in item && item.href ? (
                    <ButtonLink href={item.href} external={isExternalHref(item.href)}>
                      {isExternalHref(item.href) ? "visit the site" : "see the case"}
                    </ButtonLink>
                  ) : null}
                </div>
              ))}
            </div>
          </div>

          <div className="pricing-note service-page-pricing">
            <div>
              <p className="eyebrow mb-2">{pricingNote.eyebrow}</p>
              <h3 className="heading-h5 m-0">From 300€</h3>
            </div>
            <div className="pricing-note-copy">
              <p>{pricingNote.body}</p>
              <ButtonLink href="/contact">talk through the brief</ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
