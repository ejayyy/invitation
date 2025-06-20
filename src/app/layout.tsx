import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import "./globals.css";

const gowunDodum = Gowun_Dodum({
  variable: "--font-gowun-dodum",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "한승헌, 하은지 청첩장",
  description: "두 손을 맞잡고 걸어가는 새로운 여정에 여러분을 초대합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gowunDodum.variable} antialiased`}>
        <div className="min-h-screen sm:w-3xl mx-auto">
          <main>{children}</main>
          <footer className="p-4 text-center text-xs text-gray-500">
            <p>ⓒ 2025. EJ n John All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
