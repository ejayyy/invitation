import React from "react";
import { WEDDING_CONFIG } from "../config/wedding";

const Greeting = () => {
  return (
    <section>
      <div className="flex items-center my-8">
        <hr className="grow border-t" />
        <p className="title">인사</p>
        <hr className="grow border-t" />
      </div>
      <div className="text-sm mb-4 w-full text-center mb-5" data-aos="fade-up">
        <p className="leading-tight">멀리서, 가까이서<br/>그리고 이제는 곁에서</p>
        <p className="mt-2">함께할 길의 시작에 초대합니다.</p>
      </div>
      <div className="mt-10 text-center" data-aos="fade-up">
        <p className="mb-2">{WEDDING_CONFIG.groom.father.name} · {WEDDING_CONFIG.groom.mother.name}<span className="ml-1 mr-2 text-sm opacity-90">의 장남</span>{WEDDING_CONFIG.groom.name}</p>
        <p>{WEDDING_CONFIG.bride.father.name} · {WEDDING_CONFIG.bride.mother.name}<span className="ml-1 mr-2 text-sm opacity-90">의 장녀</span>{WEDDING_CONFIG.bride.name}</p>
      </div>
    </section>
  );
};

export default Greeting;