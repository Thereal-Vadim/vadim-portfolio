export type NotableWorkItem = {
  label: string;
  href?: string;
  previewImage?: string;
  previewCaption?: string;
};

export type NotableWorkShowcase = {
  id: string;
  type: "tag" | "monitor" | "wristband" | "ticket";
  insight: string;
  notableLabel?: string;
  items: NotableWorkItem[];
  tagTitle?: string;
  tagDescription?: string;
  tagCode?: string;
  tagUrl?: string;
  monitorBrand?: string;
  monitorRole?: string;
  monitorPitch?: string;
};

export const notableWorkShowcases: NotableWorkShowcase[] = [
  {
    id: "websites",
    type: "tag",
    tagTitle: "Websites",
    tagDescription: "Websites for business — design and build for brands that need to look sharp online.",
    tagCode: "WEBS2024220268",
    tagUrl: "ThisIsTheWorkILove.com",
    insight: "Every business deserves a site that feels intentional, not templated.",
    notableLabel: "Notable work",
    items: [
      {
        label: "LaRose432",
        href: "https://larose432.com/",
        previewImage: "/images/projects/larose432.webp",
        previewCaption:
          "40% more reservation inquiries and 35% stronger brand recognition online",
      },
      {
        label: "Beli.Kova Photography",
        href: "https://belikova.site/",
        previewImage: "/images/projects/belikova.webp",
        previewCaption:
          "Brought 10+ commercial shoots and 1 medium business on retainer",
      },
      {
        label: "Koptsev Video Producing",
        href: "https://allen-website-522670376091.us-west1.run.app/",
        previewImage: "/images/projects/koptsev.webp",
        previewCaption:
          "45% more client inquiries and 50% higher studio visibility online",
      },
    ],
  },
  {
    id: "apps",
    type: "monitor",
    monitorBrand: "Apps",
    monitorRole: "Mobile & web products",
    monitorPitch: "Human-centric products built to solve real problems.",
    insight: "Learnt how to make a good design, great.",
    notableLabel: "Notable work",
    items: [{ label: "Efsy" }, { label: "GrossGrowth" }, { label: "Gymini" }],
  },
  {
    id: "pulse",
    type: "wristband",
    insight: "Learnt that design is a team's sports that involves people outside of design",
    notableLabel: "Notable work",
    items: [
      { label: "Stream uploader" },
      { label: "Home feed" },
      { label: "Race platform" },
      { label: "Event timeline" },
    ],
  },
  {
    id: "heygo",
    type: "ticket",
    insight: "Learnt design is a powerful alignment tool",
    notableLabel: "Notable work",
    items: [{ label: "Streaming UI" }, { label: "Stream creator" }],
  },
];
