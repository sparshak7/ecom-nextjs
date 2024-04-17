import { getCanonicalUrl } from "@/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zephyr Marketplace - Add Your Product",
  description:
    "Welcome to Zephyr's marketplace page, your gateway to showcasing your creations to the world. Here, you can effortlessly upload your products, whether it's exquisite home decor, stylish apparel, or unique accessories. Our streamlined process ensures your items are presented with elegance and precision, inviting customers to explore and admire. Join our community of creators and entrepreneurs, and let Zephyr be your platform for sharing your passion with the world.",
  alternates: {
    canonical: `/marketplace/upload`,
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
};
