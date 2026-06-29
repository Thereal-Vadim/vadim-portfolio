import type { NotableWorkShowcase } from "@/data/notableWork";

export function ShowcaseTicket({ showcase }: { showcase: NotableWorkShowcase }) {
  return (
    <div className="notable-panel notable-panel--ticket padding-global">
      <div className="container-large notable-panel__inner">
        <div className="notable-ticket-scene">
          <div className="notable-ticket">
            <div className="notable-ticket__main">
              <div className="notable-ticket__art" aria-hidden="true" />
              <p className="notable-ticket__intro">
                Visit interesting places around the world through the eyes of a professional tour
                guide! Discover wonders and learn more all from the comfort of your home
              </p>
              <p className="notable-ticket__admit">ADMIT 1</p>
              <p className="notable-ticket__tagline">Your ticket to see the world</p>
              <p className="notable-ticket__meta">Row H0 Seat M3</p>
              <p className="notable-ticket__brand">HEYGO</p>
              <p className="notable-ticket__year">2020</p>
            </div>
            <div className="notable-ticket__stub" aria-hidden="true">
              <span className="notable-ticket__stub-serial">12312312322 1</span>
              <span className="notable-ticket__qr" />
              <span className="notable-ticket__stub-meta">Row H0 Seat M3</span>
            </div>
          </div>

          <div className="notable-ticket-footer">
            <div className="notable-side notable-side--inline">
              <p className="notable-side__label">{showcase.notableLabel}</p>
              <ul className="notable-side__list">
                {showcase.items.map((item) => (
                  <li key={item.label}>{item.label}</li>
                ))}
              </ul>
            </div>
            <p className="notable-side__quote notable-side__quote--light">{showcase.insight}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
