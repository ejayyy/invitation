"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { WEDDING_CONFIG } from "../config/wedding";

const WEDDING_INVITATION_URL = typeof window !== 'undefined' ? window.location.href : '';

const Share = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(WEDDING_CONFIG.kakaoTalk.apiToken);
    }
  }, []);

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: `${WEDDING_CONFIG.groom.name}❤${WEDDING_CONFIG.bride.name} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: `${window.location.origin}${WEDDING_CONFIG.kakaoTalk.shareImage}`,
          link: {
            mobileWebUrl: WEDDING_INVITATION_URL,
            webUrl: WEDDING_INVITATION_URL,
          },
        },
        buttons: [
          {
            title: "청첩장 열기",
            link: {
              mobileWebUrl: WEDDING_INVITATION_URL,
              webUrl: WEDDING_INVITATION_URL,
            },
          },
        ],
      });
    }
  };

  const handleLinkCopy = () => {
    navigator.clipboard.writeText(WEDDING_INVITATION_URL).then(() => {
      alert("청첩장 링크가 복사되었습니다.");
    });
  };

  return (
    <section className="text-center">
      <div className="flex items-center my-8" data-aos="fade-up">
        <hr className="grow border-t" />
        <p className="text-base font-bold mx-4 text-center">🎙️ 청첩장 공유</p>
        <hr className="grow border-t" />
      </div>

      <div className="flex justify-center gap-2 p-2">
        <button
          className="bg-[#FAE100] hover:bg-[#E6CD00] text-black font-bold py-3 px-4 rounded-sm"
          onClick={handleKakaoShare}
        >
          카카오톡
        </button>
        <button
          className="bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-bold py-3 px-4 rounded-sm"
          onClick={handleLinkCopy}
        >
          링크
        </button>
      </div>
    </section>
  );
};

export default Share;

declare global {
  interface Window {
    Kakao: any;
  }
} 