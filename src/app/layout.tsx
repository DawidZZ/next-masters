import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/organisms/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shop",
  description: "next masters shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} h-screen`}>
        <Navbar />
        <main className="h-full pt-16">{children}</main>
      </body>
    </html>
  );
}
