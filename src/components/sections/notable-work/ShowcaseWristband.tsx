import type { NotableWorkShowcase } from "@/data/notableWork";

export function ShowcaseWristband({ showcase }: { showcase: NotableWorkShowcase }) {
  return (
    <div className="notable-panel notable-panel--wristband padding-global">
      <div className="container-large notable-panel__inner">
        <div className="notable-wristband-scene">
          <div className="notable-wristband" aria-label="Pulse project wristband">
            <div className="notable-wristband__tab notable-wristband__tab--left">
              <span className="notable-wristband__serial">43110</span>
            </div>
            <div className="notable-wristband__body">
              <div className="notable-wristband__topo" aria-hidden="true" />
              <div className="notable-wristband__copy">
                <h3 className="notable-wristband__title">Pulse</h3>
                <p className="notable-wristband__desc">
                  Watch the race from the athletes point of view
                </p>
              </div>
            </div>
            <div className="notable-wristband__tab notable-wristband__tab--right" aria-hidden="true" />
          </div>

          <div className="notable-wristband-footer">
            <p className="notable-side__quote notable-side__quote--light">{showcase.insight}</p>
            <div className="notable-side notable-side--inline">
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
    </div>
  );
}
