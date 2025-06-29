import type { Metadata } from "next";
import { Gowun_Dodum, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { WEDDING_CONFIG } from "./config/wedding";
import { ThemeProvider } from "./context/ThemeContext";
import Script from "next/script";

const gowunDodum = Gowun_Dodum({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${WEDDING_CONFIG.groom.name}❤${WEDDING_CONFIG.bride.name}`,
  description: "두 손을 맞잡고 걸어가는 새로운 여정에 여러분을 초대합니다",
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
              if (!window.Kakao.isInitialized()) {
                window.Kakao.init('${WEDDING_CONFIG.kakaoTalk.apiToken}');
                console.log('Kakao SDK initialized');
              } else {
                console.log('Kakao SDK already initialized');
              }
            }
          `}
        </Script>
      </head>
      <body className={`${gowunDodum.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
