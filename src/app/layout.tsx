import type { Metadata } from "next";
import { Bebas_Neue, Caveat, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const script = Caveat({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-script",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Reset Studios | Mind Body",
  description:
    "Reset Studios — boutique mind-body training, outdoor sessions, coaching, and memberships. Retake control of how you move.",
  openGraph: {
    title: "Reset Studios | Mind Body",
    description:
      "Boutique mind-body training, outdoor sessions, coaching, and memberships.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${script.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bone text-ink font-body">{children}</body>
    </html>
  );
}
