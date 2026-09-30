import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const secondary = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Kathleen Klavinka Kurniawan | Portfolio",
  description: "Kathleen Klavinka Kurniawan, Informatics student and builder of small useful things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={secondary.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
