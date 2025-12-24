import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  title: "Starkville Church of God International Group",
  description:
    "We are a welcoming church family committed to worship, discipleship, and service.",
  openGraph: {
    title: "Starkville Church of God International Group",
    description:
      "We are a welcoming church family committed to worship, discipleship, and service.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Starkville Church of God International Group",
    description:
      "We are a welcoming church family committed to worship, discipleship, and service."
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body text-ink">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
