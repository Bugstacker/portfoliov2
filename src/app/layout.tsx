import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import {Viewport} from "next";
import CursorEffectLayout from "@/components/cursor-effect";
import { Analytics } from "@vercel/analytics/react"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const url = process.env.NEXT_PUBLIC_VERCEL_URL ? 'https://' + process.env.NEXT_PUBLIC_VERCEL_URL : 'http://localhost:3000'
const description = 'Kenneth Matovu is a Software Engineer with experience in building web applications, APIs, and microservices. He is passionate about building scalable and maintainable software solutions.'
export const metadata: Metadata = {
    metadataBase: new URL(url),
    title: {
        default: 'Kenneth Matovu | Software Engineer',
        template: '%s | Kenneth Matovu | Software Engineer',
    },
    description: description,
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
        },
    },
    openGraph: {
        type: 'website',
        locale: 'en_GB',
        title: 'Kenneth Matovu | Software Engineer',
        description: description,
        url: url + '/opengraph-image.png'
    },
    twitter: {
        site: 'https://kennethmatovu.vercel.app',
        title: 'Kenneth Matovu | Software Engineer',
        description: description,
        card: 'summary_large_image',
    },
    category: 'Website Development',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-400 scroll-smooth font-[font-family:var(--font-geist-sans)] flex items-center justify-center min-h-screen`}
    >
      <CursorEffectLayout>
        {children}
    </CursorEffectLayout>
    <Analytics />
    </body>
    </html>
  );
}
