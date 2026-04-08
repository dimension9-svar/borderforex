import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Border Forex | Foreign Exchange & Money Transfer",
    template: "%s | Border Forex",
  },
  description:
    "South Africa's trusted partner for foreign exchange, international money transfers, prepaid travel cards, and currency solutions.",
  keywords: [
    "forex",
    "foreign exchange",
    "money transfer",
    "travel cards",
    "South Africa",
    "currency exchange",
    "border forex",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
