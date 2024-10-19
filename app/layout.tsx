import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FooterComponent } from "@/components/layouts/footer";
import { NavbarComponent } from "@/components/layouts/nav-bar";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";




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
referrer: 'origin-when-cross-origin',


keywords: [
  'Obikels Creations',
  'Obikels Creations UK',
  'Obikels Creations crochet',
  'handmade crochet Obikels Creations',
  'crochet designs Obikels Creations',
  'crochet crafts Obikels Creations',
  'crochet fashion Obikels Creations',
  'Obikels Creations handmade',
  'UK crochet brand Obikels Creations',
  'custom crochet designs UK',
  'Obikels Creations crochet shop',
  'Obikels Creations crochet gifts',
  'bespoke crochet items Obikels Creations',
  'crochet accessories Obikels Creations',
  'Obikels Creations crochet clothing',
  'handcrafted crochet UK',
  'Obikels Creations crochet blankets',
  'crochet toys Obikels Creations',
  'Obikels Creations handmade crafts',
  'Obikels Creations crochet hats',
  'UK crochet clothing',
  'crochet fashion accessories Obikels Creations',
  'unique crochet pieces UK',
  'crochet home decor Obikels Creations',
  'crochet products UK',
  'handmade crochet UK',
  'UK bespoke crochet designs',
  'Obikels Creations crochet patterns',
  'crochet clothing UK',
  'crochet gifts UK',
  'Obikels Creations crochet scarves',
  'UK handmade crochet gifts',
  'custom crochet UK',
  'UK crochet fashion',
  'Obikels Creations crochet sweaters',
  'crochet baby clothes Obikels Creations',
  'crochet UK',
  'crochet amigurumi Obikels Creations',
  'unique crochet products UK',
  'crochet cardigans Obikels Creations',
  'Obikels Creations UK crochet shop',
  'crochet tops Obikels Creations',
  'Obikels Creations UK handmade crochet',
  'custom crochet pieces UK',
  'Obikels Creations crochet bags',
  'UK crochet accessories',
  'bespoke crochet Obikels Creations',
  'crochet cushions Obikels Creations',
  'crochet homewares Obikels Creations',
  'Obikels Creations custom crochet gifts',
  'crochet headbands Obikels Creations',
  'UK crochet decor',
  'Obikels Creations crochet wearables',
  'UK crochet shop',
  'Obikels Creations handmade crochet clothing',
  'crochet crafts UK',
  'Obikels Creations crochet market',
],


metadataBase: new URL('https://www.obikelscreations.co.uk'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'de-DE': '/de-DE',
		},
	},

	robots: {
		index: false,
		follow: false,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},

	manifest: 'https://nextjs.org/manifest.json',
	category: 'arts and lifestyle',
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
