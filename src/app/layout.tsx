import type { Metadata } from "next";
import { Bodoni_Moda, Montserrat } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { StructuredData } from "@/components/StructuredData";
import { SITE } from "@/lib/site";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const script = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["400", "500", "600"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  icons: {
    icon: [
      {
        url: "/favicon/icon-light-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/icon-light-32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon/icon-dark-32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
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
      className={`${sans.variable} ${script.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bone text-ink font-sans">
        <StructuredData />
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
