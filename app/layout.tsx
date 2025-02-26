import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google"; // Certifique-se de que a fonte está configurada corretamente
import Navbar from "@/components/shared/navbar/index"; // Importando a Navbar
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
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
      <body className={`${robotoCondensed.variable} antialiased`}>
        <Navbar /> 
        <div className="container mx-auto bg-[#F5F5F5]">
          {children} 
        </div>
      </body>
    </html>
  );
}
