import type { NotableWorkShowcase } from "@/data/notableWork";

export function ShowcaseMonitor({ showcase }: { showcase: NotableWorkShowcase }) {
  return (
    <div className="notable-panel notable-panel--monitor padding-global">
      <div className="container-large notable-panel__inner">
        <div className="notable-monitor-scene">
          <div className="notable-monitor">
            <div className="notable-monitor__screen">
              <div className="notable-monitor__screen-grid">
                <div>
                  <p className="notable-monitor__brand">Dotslash</p>
                  <p className="notable-monitor__role">Digital transformation agency</p>
                </div>
                <p className="notable-monitor__pitch">
                  Helping businesses thrive in the digital landscape.
                </p>
              </div>
            </div>
            <div className="notable-monitor__base">
              <span className="notable-monitor__slot" aria-hidden="true" />
              <span className="notable-monitor__power" aria-hidden="true" />
            </div>
          </div>

          <div className="notable-side notable-side--monitor">
            <p className="notable-side__quote">{showcase.insight}</p>
            <p className="notable-side__label">{showcase.notableLabel}</p>
            <ul className="notable-side__list">
              {showcase.items.map((item) => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
