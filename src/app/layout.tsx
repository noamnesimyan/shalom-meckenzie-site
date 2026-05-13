import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Splash from "@/components/Splash";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Golden Jubilee at Sea — Shalom Meckenzie's 50th",
  description:
    "An intimate celebration aboard the Orient Express Corinthian, Marseille to Saint-Tropez, June 2026.",
  robots: "noindex, nofollow",
  openGraph: {
    title: "Shalom Meckenzie's 50th · French Riviera · June 2026",
    description:
      "Join us aboard the legendary Orient Express Corinthian for an unforgettable weekend on the Côte d'Azur.",
    images: [
      "https://medias.orient-express.com/sites/default/files/styles/w3840/public/mobile/2250x2160/orientexpress-sailingyachts-corinthian-front-yachtl.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}
    >
      <body>
        <Splash />
        {children}
      </body>
    </html>
  );
}
