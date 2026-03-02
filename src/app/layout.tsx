import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fixit247",
  description: "Professional Home & Appliance Services",
  keywords: ["home repair", "appliance service", "fixit247", "maintenance"],
  openGraph: {
    title: "Fixit247",
    description: "Professional Home & Appliance Services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Fixit247",
    description: "Professional Home & Appliance Services",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
