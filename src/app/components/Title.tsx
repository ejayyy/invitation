import React from "react";

const WEDDING_DATE = "2025년 9월 21일 일요일 오전 10시";
const WEDDING_LOCATION = "웨딩그룹위더스 영등포 7층 펠리체홀";
const GROOM_NAME = "한승헌";
const BRIDE_NAME = "하은지";

const Title = () => {
  return (
    <section className="overflow-hidden">
      <div className="w-full text-center pt-10 font-medium animate-fade-in">
        <p className="text-sm opacity-45 mb-4">10년의 끝에서 시작하는 하루</p>
        <p className="text-2xl font-bold opacity-90 mb-4">
          {GROOM_NAME} & {BRIDE_NAME}
        </p>
        <p className="text-base opacity-65 mb-6">
          {WEDDING_DATE}
          <br />
          {WEDDING_LOCATION}
        </p>
      </div>
      <video className="w-full" autoPlay loop muted playsInline>
        <source src="/assets/BackgroundVideo.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Title; 