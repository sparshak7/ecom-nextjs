import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { getCanonicalUrl } from "@/utils";
const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(getCanonicalUrl()),
  title: "Zephyr",
  description:
    "Welcome to Zephyr, where elegance meets modernity in a seamless fusion of luxury and comfort. Discover our carefully curated selection of premium home decor, fashion-forward apparel, and exquisite accessories, meticulously crafted to elevate every aspect of your lifestyle. Embrace timeless sophistication with our thoughtfully designed products, each embodying a perfect blend of refined taste and enduring quality. At Zephyr, we invite you to indulge in the art of refined living, where every purchase is a statement of style and sophistication. Experience the epitome of luxury with Zephyr - your destination for timeless elegance and modern comforts.",
    openGraph: {
      images: [`/assets/og-img.png`]
    },
    alternates: {
      canonical: "/"
    }
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
        <Toaster position="bottom-right" />
        <Header />
        <main className="mx-auto max-w-5xl px-6 py-2 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
