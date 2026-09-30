import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shell: "#F7F5F1",
        navy: "#395176",
        blue: "#90b1cf",
        mist: "#c9dde3",
        lavender: "#bdb0ca",
        periwinkle: "#9295b7",
        ink: "#28324a",
      },
      fontFamily: {
        serif: ["'Times New Roman'", "Times", "Georgia", "serif"],
        sans: ["var(--font-secondary)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
