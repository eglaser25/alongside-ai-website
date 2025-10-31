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
        <script
          dangerouslySetInnerHTML={{
            __html:
              '!function(key) {if (window.reb2b) return;window.reb2b = {loaded: true};var s = document.createElement("script");s.async = true;s.src = "https://ddwl4m2hdecbv.cloudfront.net/b/" + key + "/" + key + ".js.gz";document.getElementsByTagName("script")[0].parentNode.insertBefore(s, document.getElementsByTagName("script")[0]);}("0OV0VHMZ1R6Z");',
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
