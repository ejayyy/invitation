"use client";

import React, { useEffect, useState } from "react";
import { WEDDING_CONFIG } from "../config/wedding";
import Image from "next/image";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function Share() {
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(() => {
    // Check if Kakao is ready
    const checkKakaoReady = () => {
      if (typeof window !== "undefined" && window.Kakao && window.Kakao.isInitialized()) {
        console.log("Kakao is ready in Share component");
        setKakaoReady(true);
        return true;
      }
      return false;
    };

    // Try immediately
    if (!checkKakaoReady()) {
      // If not ready, wait a bit and try again
      const timer = setTimeout(() => {
        if (!checkKakaoReady()) {
          // Try one more time after a longer delay
          setTimeout(checkKakaoReady, 1000);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, []);

  const shareToClipboard = async () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("링크가 복사되었습니다");
    } catch (error) {
      console.error("Clipboard error:", error);
      alert("복사에 실패했습니다");
    }
  };

  const shareToKakaoTalk = () => {
    console.log("Share button clicked, kakaoReady:", kakaoReady);
    console.log("window.Kakao:", typeof window !== "undefined" ? window.Kakao : "undefined");

    if (typeof window === "undefined") {
      alert("카카오톡 공유 기능을 사용할 수 없습니다.");
      return;
    }

    if (!window.Kakao) {
      alert("카카오 SDK가 로드되지 않았습니다.");
      return;
    }

    if (!window.Kakao.isInitialized()) {
      console.log("Kakao not initialized, trying to initialize...");
      try {
        window.Kakao.init(WEDDING_CONFIG.kakaoTalk.apiToken);
        console.log("Kakao initialized in share function");
      } catch (error) {
        console.error("Failed to initialize Kakao:", error);
        alert("카카오톡 초기화에 실패했습니다.");
        return;
      }
    }

    const currentUrl = window.location.href;

    try {
      window.Kakao.Share.sendDefault({
        objectType: 'location',
        address: WEDDING_CONFIG.address,
        addressTitle: '예식장 위치',
        content: {
          title: `🎉 ${WEDDING_CONFIG.groom.name} & ${WEDDING_CONFIG.bride.name} 🎉`,
          description: `${WEDDING_CONFIG.date}, 영등포에서 인사드립니다🤗`,
          imageUrl: `${currentUrl}${WEDDING_CONFIG.kakaoTalk.shareImage}`,
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
        buttons: [
          {
            title: '초대장 열기',
            link: {
              mobileWebUrl: currentUrl,
              webUrl: currentUrl,
            },
          },
        ],
      });
    } catch (error) {
      console.error("Kakao share error:", error);
      alert("카카오톡 공유에 실패했습니다.");
    }
  };

  return (
    <section className="text-center">
      <div className="flex items-center my-8">
        <hr className="grow border-t" />
        <p className="title">🎊 청첩장 초대</p>
        <hr className="grow border-t" />
      </div>

      <div className="flex justify-center gap-2 p-2 text-sm">
        <button
          className={`py-2 px-3 rounded-sm flex items-center justify-center bg-[#FAE100] hover:bg-[#E6CD00] text-neutral-800 font-(family-name:--font-ibm-plex-sans-kr) ${!kakaoReady ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          onClick={shareToKakaoTalk}
          disabled={!kakaoReady}
        >
          <Image src="/icon/kakao.png" alt="카카오톡" width={16} height={16} />
          <span className="ml-2">카카오톡</span>
        </button>
        <button
          className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 py-2 px-3 rounded-sm flex items-center justify-center font-(family-name:--font-ibm-plex-sans-kr)"
          onClick={shareToClipboard}
        >
          <Image src="/icon/link.png" alt="링크" width={20} height={20} />
          <span className="ml-2">링크</span>
        </button>
      </div>
    </section>
  );
}
