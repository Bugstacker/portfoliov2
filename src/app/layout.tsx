import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-400 relative scroll-smooth font-[font-family:var(--font-geist-sans)]`}
        style={{backgroundColor: "radial-gradient(600px at 705px 505px, rgba(29, 78, 216, 0.15), transparent 80%)"}}
    >
    <div
        className="absolute inset-0 pointer-events-none"
        style={{
            background: "radial-gradient(500px at 50% 20%, rgba(29, 78, 216, 0.2), transparent 70%)",
            zIndex: -1,
        }}
    ></div>
    {children}
    </body>
    </html>
  );
}
