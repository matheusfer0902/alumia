import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google"; 
import Navbar from "@/components/shared/navbar/index"; 
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Alumia",
  description: "Seu site de notícias",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} font-sans antialiased bg-[#F5F5F5]`}>
        <Navbar />
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
