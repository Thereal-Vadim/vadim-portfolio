import type { NotableWorkShowcase } from "@/data/notableWork";
import { NotablePreviewList } from "@/components/sections/notable-work/NotablePreviewList";

export function ShowcaseMonitor({ showcase }: { showcase: NotableWorkShowcase }) {
  return (
    <div className="notable-panel notable-panel--monitor padding-global">
      <div className="container-large notable-panel__inner">
        <div className="notable-monitor-scene">
          <div className="notable-side notable-side--monitor">
            <p className="notable-side__quote">{showcase.insight}</p>
            <NotablePreviewList items={showcase.items} notableLabel={showcase.notableLabel} />
          </div>

          <div className="notable-iphone">
            <svg
              className="notable-iphone__svg"
              viewBox="0 0 320 660"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="1" y="1" width="318" height="658" rx="54" fill="#1c1c1e" stroke="#48484a" strokeWidth="1.5" />
              <rect x="7" y="7" width="306" height="646" rx="49" fill="#101010" />
              <rect x="13" y="13" width="294" height="634" rx="44" fill="#000" />
              <rect x="118" y="28" width="84" height="24" rx="12" fill="#0a0a0a" />
              <rect x="-1" y="128" width="3" height="30" rx="1.5" fill="#48484a" />
              <rect x="-1" y="178" width="3" height="56" rx="1.5" fill="#48484a" />
              <rect x="-1" y="246" width="3" height="56" rx="1.5" fill="#48484a" />
              <rect x="318" y="198" width="3" height="78" rx="1.5" fill="#48484a" />
            </svg>

            <div className="notable-iphone__screen">
              <div className="notable-iphone__status" aria-hidden="true">
                <span className="notable-iphone__time">9:41</span>
                <span className="notable-iphone__island" />
                <span className="notable-iphone__signal">
                  <span />
                  <span />
                  <span />
                </span>
              </div>

              <div className="notable-iphone-app">
                <div className="notable-iphone-app__intro">
                  <p className="notable-iphone-app__eyebrow">Portfolio</p>
                  <h3 className="notable-iphone-app__brand">{showcase.monitorBrand}</h3>
                  <p className="notable-iphone-app__role">{showcase.monitorRole}</p>
                  <p className="notable-iphone-app__pitch">{showcase.monitorPitch}</p>
                </div>

                <div className="notable-iphone-app__stages" aria-hidden="true">
                  <figure className="notable-app-stage notable-app-stage--design">
                    <div className="notable-app-stage__frame">
                      <div className="notable-app-sketch">
                        <div className="notable-app-sketch__nav" />
                        <div className="notable-app-sketch__line notable-app-sketch__line--lg" />
                        <div className="notable-app-sketch__line" />
                        <div className="notable-app-sketch__blocks">
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <figcaption className="notable-app-stage__label">Design</figcaption>
                  </figure>

                  <figure className="notable-app-stage notable-app-stage--dev">
                    <div className="notable-app-stage__frame">
                      <div className="notable-app-dev">
                        <div className="notable-app-dev__tag">&lt;Screen /&gt;</div>
                        <div className="notable-app-dev__block notable-app-dev__block--wide" />
                        <div className="notable-app-dev__block" />
                        <div className="notable-app-dev__row">
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <figcaption className="notable-app-stage__label">Development</figcaption>
                  </figure>

                  <figure className="notable-app-stage notable-app-stage--release">
                    <div className="notable-app-stage__frame">
                      <div className="notable-app-release">
                        <div className="notable-app-release__icon" />
                        <div className="notable-app-release__title" />
                        <div className="notable-app-release__btn" />
                      </div>
                    </div>
                    <figcaption className="notable-app-stage__label">Release</figcaption>
                  </figure>
                </div>
              </div>

              <div className="notable-iphone__home-bar" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
