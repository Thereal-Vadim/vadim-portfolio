import type { NotableWorkShowcase } from "@/data/notableWork";
import { NotablePreviewList } from "@/components/sections/notable-work/NotablePreviewList";

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
            <NotablePreviewList items={showcase.items} notableLabel={showcase.notableLabel} variant="inline" />
          </div>
        </div>
      </div>
    </div>
  );
}
