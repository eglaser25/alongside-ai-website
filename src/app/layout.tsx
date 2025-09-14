import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alongside AI - AI Strategy & Implementation Consulting",
  description: "Helping companies deploy and govern AI tools more effectively. Strategic guidance, training, and custom solutions for your AI journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Permissions-Policy" content="payment=*, browsing-topics=(), interest-cohort=()" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
