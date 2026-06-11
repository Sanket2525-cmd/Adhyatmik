import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adhyatmik Sankalp | Premium Online Puja & Spiritual Guidance",
  description:
    "Experience divine energy from anywhere. Book personalized online puja, spiritual guidance, meditation sessions and sacred rituals with trusted gurus at Adhyatmik Sankalp.",
  keywords: [
    "online puja",
    "spiritual guidance",
    "meditation",
    "sacred rituals",
    "vedic ceremonies",
    "Adhyatmik Sankalp",
    "hindu puja online",
    "rudrabhishek",
    "mahamrityunjaya jaap",
  ],
  openGraph: {
    title: "Adhyatmik Sankalp | Luxury Spiritual Experience Platform",
    description:
      "Book personalized online puja, spiritual guidance, meditation sessions and sacred rituals with trusted gurus.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
