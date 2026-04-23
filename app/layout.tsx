import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Madagascar",
  description: "A journey through Madagascar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-stone-950 text-stone-100 antialiased">{children}</body>
    </html>
  );
}
