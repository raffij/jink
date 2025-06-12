import type { Metadata } from "next";
import { Permanent_Marker } from "next/font/google";
import "./globals.css";

const ebGaramondSans = Permanent_Marker({
  variable: "--font-eb-garamond",
  weight: '400',
  subsets: ['latin'],
  
});

export const metadata: Metadata = {
  title: "Jink Bakery & Deli",
  description: "Coming soon",
};

// #db66ed #e68257 #f0ea3e

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
