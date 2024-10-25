import type { Metadata } from "next";
import { Inter_Tight, Syne } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/footer";
import NavBar from "@/components/sections/navbar";

const syne = Syne({ subsets: ["latin"] });
const inter = Inter_Tight({ subsets: ["latin"], variable: "--inter" });

export const metadata: Metadata = {
  title: "Scintilla-PRO",
  description: "Scintilla-PRO One Stop Shop Marketing Agnecy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} ${inter.variable} antialiased`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
