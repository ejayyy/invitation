import React from "react";
import Image from "next/image";
import { WEDDING_CONFIG } from "../config/wedding";

const Greeting = () => {
  return (
    <section>
      <div className="flex items-center my-8">
        <hr className="grow border-t" />
        <p
          className="text-base font-bold mx-4 text-center"
          data-aos="fade-up"
        >인사</p>
        <hr className="grow border-t" />
      </div>
      <p className="text-sm mb-4 w-full text-center" data-aos="fade-up">두 손을 맞잡고 걸어가는 새로운 여정에 여러분을 초대합니다</p>

      <p className="w-full text-center" data-aos="fade-up">
        {WEDDING_CONFIG.groom.father.name} · {WEDDING_CONFIG.groom.mother.name}<span className="ml-1 mr-2 text-sm opacity-90">의 장남</span>{WEDDING_CONFIG.groom.name}
        <br />
        {WEDDING_CONFIG.bride.father.name} · {WEDDING_CONFIG.bride.mother.name}<span className="ml-1 mr-2 text-sm opacity-90">의 장녀</span>{WEDDING_CONFIG.bride.name}
      </p>
    </section>
  );
};

export default Greeting;