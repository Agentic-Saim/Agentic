import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taha - Creative Developer | Antigravity Portfolio",
  description: "A flawless, cinematic HTML5 Canvas Scrollytelling Personal Portfolio Website by Taha. Bridging design and engineering with high-performance animations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased min-h-screen bg-[#0a0a0a] text-[#d4d4d4] selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
