import type { Metadata } from "next";
import { Roboto_Condensed, Roboto } from "next/font/google"; 
import Navbar from "@/components/shared/navbar/index"; 
import Footer from "@/components/shared/footer";
import "./globals.css";
import Script from "next/script";
import * as gtag from "@/app/lib/gtag";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "Alumia",
  description: "Seu site de checagens",
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

       <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
