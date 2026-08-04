import type { Metadata } from "next";
import { manrope, interTight } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Pix - Portfolio Framer Template",
  description:
    "Elevate your online presence with Pix, a meticulously crafted Framer template designed for both designers and developers. Showcase your work seamlessly and professionally in this versatile portfolio template.",
  icons: {
    icon: "/images/DpUYSIYTKtj3nYAjCb6myRYk.2fa88.png",
  },
  openGraph: {
    images: ["/images/SQ8ywGqkXjtfC8t8T7zAfgBF4.abed4.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${interTight.variable}`}>
      <body className="bg-dark-03 text-white antialiased">{children}</body>
    </html>
  );
}
