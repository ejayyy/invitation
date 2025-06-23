import React from "react";
import Image from "next/image";

const GROOM_NAME = "○○○";
const GROOM_FATHER_NAME = "○○○";
const GROOM_MOTHER_NAME = "○○○";
const BRIDE_NAME = "○○○";
const BRIDE_FATHER_NAME = "○○○";
const BRIDE_MOTHER_NAME = "○○○";

const Greeting = () => {
  return (
    <div className="py-10 w-[70%] mx-auto">
      <div className="flex items-center text-gray-500 my-8">
        <hr className="flex-grow border-t border-gray-300" />
        <p
          className="text-base font-bold opacity-85 mx-4 text-center"
          data-aos="fade-up"
        >
          초대합니다
        </p>
        <hr className="flex-grow border-t border-gray-300" />
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

      <p className="text-sm leading-7 opacity-85 w-full text-center" data-aos="fade-up">
        {GROOM_FATHER_NAME} · {GROOM_MOTHER_NAME}의 장남 {GROOM_NAME}
        <br />
        {BRIDE_FATHER_NAME} · {BRIDE_MOTHER_NAME}의 장녀 {BRIDE_NAME}
      </p>
    </div>
  );
};

export default Greeting; 