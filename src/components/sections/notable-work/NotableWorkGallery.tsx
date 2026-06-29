import { notableWorkShowcases } from "@/data/notableWork";
import { ShowcaseMonitor } from "@/components/sections/notable-work/ShowcaseMonitor";
import { ShowcaseTag } from "@/components/sections/notable-work/ShowcaseTag";
import { ShowcaseWristband } from "@/components/sections/notable-work/ShowcaseWristband";

const showcaseComponents = {
  tag: ShowcaseTag,
  monitor: ShowcaseMonitor,
  wristband: ShowcaseWristband,
} as const;

export function NotableWorkGallery() {
  return (
    <div className="notable-work-gallery">
      {notableWorkShowcases.map((showcase) => {
        const Component = showcaseComponents[showcase.type];
        return <Component key={showcase.id} showcase={showcase} />;
      })}
    </div>
  );
}
