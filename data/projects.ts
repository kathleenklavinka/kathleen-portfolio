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
  demo?: string;
  // Detail page content. Edit freely, every field is optional except overview.
  // Use a blank line (\n\n) to start a new paragraph.
  overview: string;
  features?: { title: string; description: string }[];
  outcome?: string;
  gallery?: string[];
};

// Add or edit projects here. The first 4 show up on the home page,
// the rest only appear on /projects.
export const HOME_PROJECT_COUNT = 4;

export const projects: Project[] = [
  {
    slug: "inventix",
    year: "2026",
    title: "Inventix",
    role: "Frontend Developer",
    description:
      "A web-based inventory management system built by a team of five, helping small businesses track stock, purchase orders, waste, and expenses.",
    tags: ["Web App", "Inventory System"],
    stack: ["TS", "React", "Node", "Prisma", "Postgres"],
    image: "/projects/inventix.png",
    link: "https://github.com/kathleenklavinka/inventix-fe.git",
    demo: "http://localhost:3000/projects",
    overview:
      "Inventix is a stock management web app built as a group project by a team of five students to help small businesses keep track of their stock, record transactions, and read reports without juggling spreadsheets. Small businesses often track inventory by hand, which makes it easy to lose sight of what is left and what has sold. Our team of five, each with a different role, built it with TypeScript, React, and Node, covering both the interface and the backend logic.\n\nThe app was developed for our partner, FOMO Foccacia Modern, but it is designed to be universal so any business can use it. I worked as the UI/UX designer and frontend developer, responsible for shaping the design and building the interface people interact with every day.",
    features: [
      {
        title: "Authentication",
        description: "Secure login so only authorized people can access the system.",
      },
      {
        title: "Account management",
        description: "Owners create and manage staff accounts and control who has access.",
      },
      {
        title: "Stock management",
        description: "Full CRUD for stock items, so inventory stays accurate as things come in, change, or go out.",
      },
      {
        title: "Purchase orders",
        description: "Staff can raise purchase orders, with conditional owner approval so only orders that need a second check go to the owner.",
      },
      {
        title: "Minimum stock alerts",
        description: "Notifications appear when an item drops to its minimum level, so restocking happens before it runs out.",
      },
      {
        title: "Audit log",
        description: "Every important action is recorded in an activity history, which makes changes traceable and accountable.",
      },
      {
        title: "Waste recording",
        description: "Spoiled or discarded stock is logged, so losses are visible rather than hidden.",
      },
      {
        title: "Expense reports",
        description: "Spending is summarized into reports that show where the money goes.",
      },
    ],
  },
  {
    slug: "notte-azzura",
    year: "2025",
    title: "Notte Azzura",
    role: "Full Stack Developer",
    description:
      "A website for Notte Azzura pizza restaurant with an events booking system, dynamic event pages, and a contact page, built with Next.js, Prisma, and SQLite.",
    tags: ["Web App", "Restaurant"],
    stack: ["TS", "Next", "Tailwind", "Prisma", "SQLite"],
    image: "/projects/notte-azzura.png",
    link: "https://github.com/kathleenklavinka/notte-azzura",
    demo: "http://localhost:3001/",
    overview:
      "Notte Azzura is a pizza restaurant website built by a group of five students for a frontend programming course. The full site was a team effort, and I was responsible for three pages: Events, Event Detail, and Contact, along with the database and API work behind them.\n\nThe Events page lists every upcoming event with its date, price, category, and how full it is, and guests can filter by category. Each card opens its own page through dynamic routing, where guests can register, and spots are checked on the server so an event can never be overbooked. It is built with Next.js, Prisma, and SQLite, and every page is responsive from mobile to desktop.",
    features: [
      {
        title: "Events page",
        description: "Event cards with category filters, an auto-playing image slider, and a progress bar showing how full each event is.",
      },
      {
        title: "Event detail pages",
        description: "Dynamic routing by slug with a gallery, a two-column layout, and a sticky booking card.",
      },
      {
        title: "Registration with validation",
        description: "A booking form that validates input and checks available spots before saving the registration.",
      },
      {
        title: "Live booking status",
        description: "Remaining spots are color coded, and registration is disabled automatically once an event is full.",
      },
      {
        title: "Contact page",
        description: "Contact cards, a message form, an image slider, and an embedded Google Maps location.",
      },
      {
        title: "Social and promo sections",
        description: "An Instagram gallery, social media cards, and promo cards for referral and sharing discounts.",
      },
      {
        title: "Database and API",
        description: "Prisma schema for events and registrations, REST endpoints for fetching and registering, and seed scripts for initial data.",
      },
    ],
  },
  {
    slug: "azzura-rewards",
    year: "2025",
    title: "Azzura Rewards",
    role: "Mobile Developer",
    description:
      "A mobile app for Notte Azzura pizza restaurant with a loyalty rewards system, QR code redemption, and an inbox for notifications, built with Flutter.",
    tags: ["Mobile App", "Restaurant"],
    stack: ["Flutter", "Dart"],
    image: "/projects/azzura-rewards.png",
    link: "https://github.com/kathleenklavinka/azzura-rewards-mobile",
    overview:
      "Azzura Rewards is the mobile app companion to the restaurant website, built by a group of five students. The full app was a team effort, and I was responsible for two pages: Rewards and Inbox, which support the loyalty system and the notification flow.\n\nThe Rewards page shows the user's Notti Points and current level, along with a list of redeemable rewards such as a lobster dish for 8000 points or a side dish for 500 points. Rewards are locked or unlocked depending on the user's points, and redeemed rewards show a QR code to present to the cashier. The Inbox page, opened from the bell icon on the home screen, groups notifications into categories like Unread and Promos. Both pages use multistate handling for loading, locked, and redeemed views, store redemption data with shared preferences so it persists after the app is reopened, and are responsive on mobile screens.",
    features: [
      {
        title: "Points and level display",
        description: "The Rewards page shows the user's Notti Points and current level so progress is clear at a glance.",
      },
      {
        title: "Reward list",
        description: "Redeemable rewards are listed with the points required and a status showing whether each one can be redeemed or is still locked.",
      },
      {
        title: "Locking system",
        description: "Rewards that cost more than the user's points are locked, while affordable ones stay active and tappable.",
      },
      {
        title: "Loading state",
        description: "A loading state runs when the Rewards page opens, so points, rewards, and redemption status appear only once the data is ready.",
      },
      {
        title: "QR code redemption",
        description: "After redeeming, a QR code is generated for the cashier. It only appears for rewards the user has successfully redeemed.",
      },
      {
        title: "Redeemed indicator",
        description: "Redeemed rewards get a green outline so claimed items are easy to tell apart.",
      },
      {
        title: "Inbox page",
        description: "A notification list opened from the bell icon, with categories such as Unread and Promos and unread markers on new messages.",
      },
      {
        title: "State and persistence",
        description: "Multistate UI for loading, locked, and redeemed views, with shared preferences keeping redemption data and reward status consistent across app restarts.",
      },
    ],
  },

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
