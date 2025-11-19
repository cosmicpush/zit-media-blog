import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zit Media Blog - Coming Soon",
  description:
    "The official blog for Zit Media. Insights, tips, and stories about social media management. Coming soon!",
  keywords: ["social media", "blog", "marketing", "scheduling", "content creation"],
  authors: [{ name: "Zit Media" }],
  icons: {
    icon: "/assets/logo/favicon.ico",
  },
  openGraph: {
    title: "Zit Media Blog - Coming Soon",
    description:
      "The official blog for Zit Media. Insights, tips, and stories about social media management. Coming soon!",
    url: "https://blog.zit.media",
    siteName: "Zit Media Blog",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zit Media Blog - Coming Soon",
    description: "The official blog for Zit Media. Coming soon!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
