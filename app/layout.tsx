import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google"; 
import Navbar from "@/components/shared/navbar/index"; 
import Footer from "@/components/shared/footer";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Alumia",
  description: "Seu site de notícias",
  icons: {
    icon: "/logoFooterAlumia.svg",
  },
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
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
