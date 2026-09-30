export type Project = {
  slug: string;
  year: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
  stack: string[];
  // Optional: path/URL to a real screenshot or mockup. Falls back to a
  // neutral placeholder when left empty.
  image?: string;
  // Optional external link (repo, live demo, paper, Figma). Hidden when empty.
  link?: string;

  // Detail page content. Edit freely, every field is optional except overview.
  // Use a blank line (\n\n) to start a new paragraph.
  overview: string;
  highlights?: string[];
  outcome?: string;
  gallery?: string[];
};

// Add or edit projects here. The first 4 show up on the home page,
// the rest only appear on /projects.
export const HOME_PROJECT_COUNT = 4;

export const projects: Project[] = [
  {
    slug: "inventix",
    year: "2025",
    title: "Inventix",
    role: "Full Stack Developer",
    description:
      "A web-based inventory management system built with a team, helping small businesses track stock, transactions, and reports in real time.",
    tags: ["Web App", "Inventory System"],
    stack: ["TS", "React", "Node"],
    overview:
      "Inventix is a stock management web app built by FOMO Team. It helps small businesses keep track of their stock, record transactions, and read reports without juggling spreadsheets.\n\nSmall businesses often track stock by hand, which makes it easy to lose sight of what is left and what has sold. Inventix was built as a team with TypeScript, React, and Node, covering both the interface and the backend logic.",
    highlights: [
      "Real-time stock tracking",
      "Transaction recording",
      "Reports for small business owners",
    ],
  },
  {
    slug: "modaal",
    year: "2025",
    title: "Modaal",
    role: "Product Design",
    description:
      "A mobile app concept for business health and financial management, designed for small business owners in Indonesia.",
    tags: ["Mobile Concept", "FinTech"],
    stack: ["Figma"],
    overview:
      "Modaal is a mobile app concept that helps small business owners in Indonesia understand the health of their business and manage their finances in one place.\n\nThe concept started from the everyday money questions small business owners face. The flows and screens were then shaped in Figma with a focus on clarity for non-finance users.",
    highlights: [
      "Business health overview",
      "Financial management flows",
      "Designed around Indonesian small business owners",
    ],
  },
  {
    slug: "ear-image-classification",
    year: "2024",
    title: "Ear Image Classification",
    role: "Machine Learning Developer",
    description:
      "An image classification project comparing LBP-SVM with MobileNetV2 and DenseNet121 on the EarVN1.0 ear dataset.",
    tags: ["Machine Learning", "CNN"],
    stack: ["Py"],
    overview:
      "A machine learning project that compares a classical LBP-SVM pipeline against two CNN models, MobileNetV2 and DenseNet121, for biometric ear recognition on the EarVN1.0 dataset.",
    highlights: [
      "LBP-SVM vs MobileNetV2 vs DenseNet121",
      "20 subjects, around 3,800 images",
      "80/20 split, 5 repeated experiments",
    ],
  },
  // DUMMY: placeholder project, ganti atau hapus kalau udah ada yang asli
  {
    slug: "warung-pintar",
    year: "2025",
    title: "Warung Pintar",
    role: "Frontend Developer",
    description:
      "A dummy point-of-sale web app for neighborhood warungs, with quick checkout, daily sales summary, and low-stock alerts.",
    tags: ["Web App", "Point of Sale"],
    stack: ["TS", "Next", "Node"],
    overview:
      "Placeholder project. Warung Pintar is a made-up point-of-sale app used to fill this slot until a real project is added.",
    highlights: ["Quick checkout", "Daily sales summary", "Low-stock alerts"],
  },
];

// Cards alternate blue / lavender. In the 2-column grid it runs as a
// checkerboard (blue, lavender / lavender, blue), on mobile it just alternates.
export function accentFor(index: number): "blue" | "lavender" {
  const row = Math.floor(index / 2);
  return (index + row) % 2 === 0 ? "blue" : "lavender";
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
