"use client";

import React, { useEffect } from "react";
import Image from "next/image";

const KAKAOTALK_API_TOKEN = "JavaScript 키 입력"; // 실제 사용시 발급받은 키로 변경해야 합니다.
const KAKAOTALK_SHARE_IMAGE = "/assets/Gallery_Photo_1.webp";
const WEDDING_INVITATION_URL = typeof window !== 'undefined' ? window.location.href : '';
const GROOM_NAME = "○○○";
const BRIDE_NAME = "○○○";


const Share = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAOTALK_API_TOKEN);
    }
  }, []);

  const handleKakaoShare = () => {
    if (window.Kakao) {
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: `${GROOM_NAME}❤${BRIDE_NAME} 결혼식에 초대합니다`,
          description: "아래의 '청첩장 열기' 버튼을 눌러 읽어주세요🤵👰",
          imageUrl: `${window.location.origin}${KAKAOTALK_SHARE_IMAGE}`,
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
    <div className="pt-10 w-full text-center">
      <div className="flex items-center my-8 w-[70%] mx-auto" data-aos="animate-fade-up">
        <hr className="grow border-t" />
        <p className="text-base font-bold opacity-85 mx-4 text-center">
          청첩장 공유하기
        </p>
        <hr className="grow border-t" />
      </div>

      <div className="w-[70%] mx-auto flex flex-col gap-2 p-2">
        <button
          className="w-full bg-[#FAE100] hover:bg-[#E6CD00] text-black font-bold py-3 px-4 rounded-sm flex items-center justify-center"
          onClick={handleKakaoShare}
        >
          <Image src="/assets/Kakaotalk_Sharing.png" alt="kakaotalk icon" width={24} height={24} className="mr-2" />
          카카오톡으로 공유하기
        </button>
        <button
          className="w-full bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-bold py-3 px-4 rounded-sm flex items-center justify-center"
          onClick={handleLinkCopy}
        >
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" /></svg>
          링크로 공유하기
        </button>
      </div>
    </div>
  );
};

export default Share;

declare global {
  interface Window {
    Kakao: any;
  }
} 