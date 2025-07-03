import type { Metadata } from "next";
import { Gowun_Dodum, IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import { WEDDING_CONFIG } from "./config/wedding";
import { ThemeProvider } from "./context/ThemeContext";
import Script from "next/script";
import type { Viewport } from 'next'

const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  preload: true,
});

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-kr",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: `${WEDDING_CONFIG.groom.name}❤${WEDDING_CONFIG.bride.name}`,
  description: "두 손을 맞잡고 걸어가는 새로운 여정에 여러분을 초대합니다",
  creator: "EJ n John",
  applicationName: "EJ n John Invitation",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
          integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script id="kakao-init" strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined' && window.Kakao) {
              if (!window.Kakao.isInitialized())
                window.Kakao.init('${WEDDING_CONFIG.kakaoTalk.apiToken}');
            }
          `}
        </Script>
      </head>
      <body className={`${gowunDodum.className} ${ibmPlexSansKR.variable} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
