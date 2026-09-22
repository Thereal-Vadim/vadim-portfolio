import type { Metadata } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { HandMode } from "@/components/layout/HandMode";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Vadim's Portfolio",
  description:
    "Vadim Filatov is a Prague-based UI/UX engineer and visual designer. Strategy, interface design, and production-ready React and Next.js - one point of contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll>
          <div className="page-wrapper relative min-h-screen">
            <CustomCursor />
            <HandMode />
            <NoiseOverlay />
            <Navbar />
            <main className="main-wrapper min-h-[75vh]">{children}</main>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
