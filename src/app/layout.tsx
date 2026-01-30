import type { Metadata } from "next";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Box from "@mui/material/Box";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.spring-k.com'),
  title: {
    default: "Spring Days",
    template: "%s | Spring Days",
  },
  description: "Art Portfolio by SpringK - Exploring emotions, healing, and recovery through colors and spaces.",
  keywords: ["Art", "Portfolio", "SpringK", "Painting", "Healing", "Emotions", "Gallery"],
  openGraph: {
    title: "Spring Days",
    description: "Art Portfolio by SpringK - Exploring emotions, healing, and recovery through colors and spaces.",
    url: 'https://www.spring-k.com',
    siteName: 'Spring Days',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Spring Days",
    description: "Art Portfolio by SpringK - Exploring emotions, healing, and recovery through colors and spaces.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { SplashProvider } from "@/context/SplashContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'SpringK',
              url: 'https://www.spring-k.com',
              sameAs: [
                // 'https://instagram.com/springk', // TODO: Add social links
              ],
              jobTitle: 'Artist',
              description: 'Artist exploring emotions, healing, and recovery through colors and spaces.',
            }),
          }}
        />
        <ThemeRegistry>
          <SplashProvider>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
              }}
            >
              <Navbar />
              <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
              </Box>
              <Footer />
            </Box>
          </SplashProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
