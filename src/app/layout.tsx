import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import EditorialHeader from "@/components/functional/EditorialHeader/EditorialHeader";
import Footer from "@/components/functional/Footer/Footer";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";

const polySans = localFont({
  src: [
    {
      path: "./fonts/polysanstrial-slim-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/polysanstrial-neutral-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/polysanstrial-median-webfont.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-polysans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KuickApp",
  description: "LowCode / NoCode Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${polySans.variable} antialiased`}>
              <PageTransitionProvider>
        <EditorialHeader />
        {children}
        <Footer />
      </PageTransitionProvider>
      </body>
    </html>
  );
}
