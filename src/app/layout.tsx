import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navigation, Footer } from "@/components/shared";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Garhites Solution LLP | IT Technology & Services",
    template: "%s | Garhites Solution LLP"
  },
  description: "Garhites Solution is an emerging IT Technology and Services company developing cost-effective and secure digital platforms. We offer cloud data analytics, web development, and IT consulting services.",
  keywords: ["Garhites", "IT Solutions", "Cloud Services", "Data Analytics", "Web Development", "IT Consulting", "AWS", "Server Hosting", "Digital Transformation"],
  authors: [{ name: "Garhites Solution LLP" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Garhites Solution LLP | IT Technology & Services",
    description: "Cost-effective and secure digital platforms for businesses. Cloud data and analytics solutions.",
    url: "https://garhites.com",
    siteName: "Garhites Solution LLP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garhites Solution LLP",
    description: "IT Technology & Services - Cost-effective and secure digital platforms for businesses",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
