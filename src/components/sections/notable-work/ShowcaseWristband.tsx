import type { NotableWorkShowcase } from "@/data/notableWork";

export function ShowcaseWristband({ showcase }: { showcase: NotableWorkShowcase }) {
  return (
    <div className="notable-panel notable-panel--wristband padding-global">
      <div className="container-large notable-panel__inner">
        <div className="notable-wristband-scene">
          <div className="notable-wristband" aria-label={`${showcase.wristbandTitle} brand design system`}>
            <div className="notable-wristband__tab notable-wristband__tab--left">
              <span className="notable-wristband__serial">{showcase.wristbandSerial}</span>
            </div>
            <div className="notable-wristband__body">
              <div className="notable-wristband__topo" aria-hidden="true" />
              <div className="notable-wristband__copy">
                <h3 className="notable-wristband__title">{showcase.wristbandTitle}</h3>
                <p className="notable-wristband__desc">{showcase.wristbandDesc}</p>
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
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="notable-side__link"
                      >
                        {item.label}
                      </a>
                    ) : (
                      item.label
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
