import type { NotableWorkShowcase } from "@/data/notableWork";
import { NotablePreviewList } from "@/components/sections/notable-work/NotablePreviewList";

function domainFromHref(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

export function ShowcaseTag({ showcase }: { showcase: NotableWorkShowcase }) {
  const activeUrl =
    showcase.tagUrl ??
    domainFromHref(showcase.items.find((item) => item.href)?.href ?? "https://example.com");

  return (
    <div className="notable-panel notable-panel--tag padding-global">
      <div className="container-large notable-panel__inner">
        <div className="notable-tag-scene">
          <div className="notable-tag">
            <div className="notable-tag__shadow" aria-hidden="true" />
            <div className="notable-tag__card notable-safari">
              <div className="notable-safari__chrome">
                <div className="notable-safari__top">
                  <div className="notable-safari__traffic" aria-hidden="true">
                    <span className="notable-safari__dot notable-safari__dot--close" />
                    <span className="notable-safari__dot notable-safari__dot--min" />
                    <span className="notable-safari__dot notable-safari__dot--max" />
                  </div>
                  <div className="notable-safari__toolbar">
                    <div className="notable-safari__nav" aria-hidden="true">
                      <span />
                      <span />
                    </div>
                    <div className="notable-safari__address">
                      <svg
                        className="notable-safari__lock"
                        viewBox="0 0 10 12"
                        aria-hidden="true"
                      >
                        <path d="M5 0a3 3 0 0 0-3 3v1H1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8V3a3 3 0 0 0-3-3Zm0 1.5A1.5 1.5 0 0 1 6.5 3v1h-3V3A1.5 1.5 0 0 1 5 1.5Z" />
                      </svg>
                      <span className="notable-safari__url">{activeUrl}</span>
                    </div>
                    <div className="notable-safari__actions" aria-hidden="true">
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="notable-safari__viewport">
                <div className="notable-site">
                  <div className="notable-site__hero">
                    <p className="notable-site__eyebrow">Business websites</p>
                    <h3 className="notable-site__headline">
                      Design &amp; build for brands online
                    </h3>
                    <p className="notable-site__lede">{showcase.tagDescription}</p>
                  </div>

                  <div className="notable-site__process" aria-hidden="true">
                    <p className="notable-site__process-label">From sketch to launch</p>
                    <div className="notable-site__stages">
                      <figure className="notable-stage notable-stage--sketch">
                        <div className="notable-stage__frame">
                          <div className="notable-sketch">
                            <div className="notable-sketch__nav" />
                            <div className="notable-sketch__hero">
                              <div className="notable-sketch__line notable-sketch__line--lg" />
                              <div className="notable-sketch__line" />
                              <div className="notable-sketch__line notable-sketch__line--sm" />
                            </div>
                            <div className="notable-sketch__blocks">
                              <div />
                              <div />
                              <div />
                            </div>
                          </div>
                        </div>
                        <figcaption className="notable-stage__caption">Sketch</figcaption>
                      </figure>

                      <figure className="notable-stage notable-stage--wireframe">
                        <div className="notable-stage__frame">
                          <div className="notable-wireframe">
                            <div className="notable-wireframe__bar" />
                            <div className="notable-wireframe__hero">
                              <div className="notable-wireframe__block notable-wireframe__block--title" />
                              <div className="notable-wireframe__block" />
                              <div className="notable-wireframe__block notable-wireframe__block--short" />
                            </div>
                            <div className="notable-wireframe__grid">
                              <div className="notable-wireframe__cell" />
                              <div className="notable-wireframe__cell" />
                              <div className="notable-wireframe__cell" />
                            </div>
                          </div>
                        </div>
                        <figcaption className="notable-stage__caption">Wireframe</figcaption>
                      </figure>

                      <figure className="notable-stage notable-stage--prototype">
                        <div className="notable-stage__frame">
                          <div className="notable-prototype">
                            <div className="notable-prototype__bar">
                              <span />
                              <span />
                              <span />
                            </div>
                            <div className="notable-prototype__hero">
                              <div className="notable-prototype__title" />
                              <div className="notable-prototype__text" />
                              <div className="notable-prototype__btn" />
                            </div>
                            <div className="notable-prototype__cards">
                              <div className="notable-prototype__card notable-prototype__card--active">
                                <div />
                                <span />
                              </div>
                              <div className="notable-prototype__card">
                                <div />
                                <span />
                              </div>
                            </div>
                          </div>
                        </div>
                        <figcaption className="notable-stage__caption">Prototype</figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NotablePreviewList
            items={showcase.items}
            notableLabel={showcase.notableLabel}
            note={showcase.insight}
          />
        </div>
      </div>
    </div>
  );
}
