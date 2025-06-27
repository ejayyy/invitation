import type { Metadata } from "next";
import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import { WEDDING_CONFIG } from "./config/wedding";
import { ThemeProvider } from "./context/ThemeContext";

const notoSerifKr = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
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
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
