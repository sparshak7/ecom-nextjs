import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project 1 - Home Page",
  description: "This is the home page.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} h-full bg-back selection:bg-red-400 text-white`}
      >
        <Header />
        <main className="mx-auto max-w-6xl px-6 py-2 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
