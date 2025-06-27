import React from "react";
import Image from "next/image";
import { WEDDING_CONFIG } from "../config/wedding";

const Greeting = () => {
  return (
    <section>
      <div className="flex items-center my-8">
        <hr className="grow border-t" />
        <p
          className="text-base font-bold opacity-85 mx-4 text-center"
          data-aos="fade-up"
        >
          초대합니다
        </p>
        <hr className="grow border-t" />
      </div>

      <div data-aos="fade-up" className="flex justify-center pb-10">
        <Image src="/assets/flower1.png" alt="flower" width={22} height={22} />
      </div>

      <p className="text-sm leading-7 opacity-75 mb-4 w-full text-center" data-aos="fade-up">
        서로 마주 보며 다져온 사랑을
        <br />
        <br />
        이제 함께 한곳을 바라보며 걸어갈 수 있는
        <br />
        <br />
        큰 사랑으로 키우고자 합니다.
        <br />
        <br />
        저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게
        <br />
        <br />
        앞날을 축복해 주시면 감사하겠습니다.
      </p>

      <p className="leading-7 w-full text-center" data-aos="fade-up">
        {WEDDING_CONFIG.groom.father.name} · {WEDDING_CONFIG.groom.mother.name}<span className="text-sm opacity-90">의 장남</span> {WEDDING_CONFIG.groom.name}
        <br />
        {WEDDING_CONFIG.bride.father.name} · {WEDDING_CONFIG.bride.mother.name}<span className="text-sm opacity-90">의 장녀</span> {WEDDING_CONFIG.bride.name}
      </p>
    </section>
  );
};

export default Greeting; 