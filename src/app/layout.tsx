import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "School Management Dashboard",
  description: "Next.js School Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='uz'>
      <body className={montserat.className}>{children}</body>
    </html>
  );
}
