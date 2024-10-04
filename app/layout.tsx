import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FooterComponent } from "@/components/layouts/footer";
import { NavbarComponent } from "@/components/layouts/nav-bar";
import NextTopLoader from "nextjs-toploader";




const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    template:'Obikels Creations | %s',
  default: 'Obikels Creations',
},
description: 'Where Crochet Meets Couture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <div className="">
            <NextTopLoader
            color="#101819"
            showSpinner={false}
            />
          <NavbarComponent/>
          {children}
          <FooterComponent/>
        </div>
      </body>
    </html>
  );
}
