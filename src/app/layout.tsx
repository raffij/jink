import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const ebGaramondSans = Permanent_Marker({
  variable: "--font-eb-garamond",
  weight: '400',
  subsets: ['latin'],
  
});

export const metadata: Metadata = {
  title: "Jink Bakery + Deli 🐾✨",
  description: "Organic micro-bakery in St Leonards on Sea. Baked delights + much more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ebGaramondSans.variable} ${ebGaramondSans.variable} antialiased`}
        style={{ background: "#f0ea3e" }}
      >
        {children}
      </body>
    </html>
  );
}
