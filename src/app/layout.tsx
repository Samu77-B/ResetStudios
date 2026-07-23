import type { Metadata } from "next";
import { Montserrat, Rock_Salt } from "next/font/google";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { SITE } from "@/lib/site";
import "./globals.css";

const sans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const script = Rock_Salt({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
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
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
