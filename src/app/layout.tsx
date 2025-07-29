import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";// app/layout.tsx
import "@/src/app/globals.css"; // ✅ Make sure this line exists

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radin Ahmadizadeh",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/avatar3.png" type="image/png" />
        <link rel="shortcut icon" href="/avatar3.png" type="image/png" />
        <link rel="apple-touch-icon" href="/avatar3.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer
          position="top-right"
          toastClassName="custom-toast"
          hideProgressBar
          closeButton={false}
          autoClose={1000}
        />
      </body>
    </html>
  );
}
