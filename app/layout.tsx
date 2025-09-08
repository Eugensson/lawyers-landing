import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Playfair_Display, Open_Sans } from "next/font/google";

import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lawyers",
    template: "%s | Lawyers",
  },
  description:
    "Trusted law firm providing expert legal services, professional advice, and reliable representation for individuals and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
