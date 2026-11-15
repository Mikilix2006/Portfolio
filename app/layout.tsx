import type { ReactNode } from "react";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";

const serif = Bitter({ subsets: ["latin"], variable: "--font-serif", weight: ["500", "800"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = { title: "Portfolio — Miguel", description: "Personal portfolio" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
