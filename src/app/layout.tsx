import type { Metadata } from "next";
import { Inter, Outfit, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CCC Kolkata | Digital Marketing & Creative Agency",
  description:
    "Kolkata's leading full-service digital marketing and creative agency. Performance-driven campaigns, stunning designs, and strategic brand growth.",
  keywords: [
    "digital marketing",
    "creative agency",
    "Kolkata",
    "social media marketing",
    "web development",
    "influencer marketing",
    "brand strategy",
  ],
  openGraph: {
    title: "CCC Kolkata | Digital Marketing & Creative Agency",
    description:
      "Kolkata's leading full-service digital marketing and creative agency.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "CCC Kolkata | Digital Marketing & Creative Agency",
    description:
      "Kolkata's leading full-service digital marketing and creative agency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${syne.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
