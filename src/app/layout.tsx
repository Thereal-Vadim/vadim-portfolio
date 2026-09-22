import type { Metadata, Viewport } from "next";
import { Figtree, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics/Analytics";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { HandMode } from "@/components/layout/HandMode";
import { NoiseOverlay } from "@/components/layout/NoiseOverlay";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  defaultOgImage,
  getSiteUrl,
  siteDescription,
  siteJsonLd,
  siteName,
  siteTitle,
} from "@/lib/site";

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

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const yandexVerification = process.env.NEXT_PUBLIC_YANDEX_VERIFICATION?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: getSiteUrl() }],
  creator: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [defaultOgImage.url],
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  ...(googleVerification || yandexVerification
    ? {
        verification: {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(yandexVerification ? { yandex: yandexVerification } : {}),
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#fbf9f6",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${geistMono.variable} antialiased`}>
        <JsonLd data={siteJsonLd()} />
        <Analytics />
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
