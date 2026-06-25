import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "nomoredesign | Independent Designer & Webflow Developer",
  description:
    "Amit Chakrabarti is an independent designer and Webflow Certified Partner based in Brighton. Brand identity, Webflow development and design for founders, marketing teams and agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <SmoothScroll>
          <div className="page-wrapper relative min-h-screen">
            <CustomCursor />
            <NoiseOverlay />
            <Navbar />
            <main className="main-wrapper min-h-[75vh]">{children}</main>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
