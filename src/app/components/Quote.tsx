import React from "react";
import Image from "next/image";

const Quote = () => {
  return (
    <div className="pt-10 px-10 w-full overflow-hidden mx-auto relative">
      <div className="flex justify-center pb-10" data-aos="fade-up">
        <Image src="/assets/flower1.png" alt="flower" width={22} height={22} />
      </div>
      <div
        className="block mx-auto text-xl text-center leading-9 opacity-75 bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/assets/Quote.png')" }}
        data-aos="fade-up"
      >
        장담하건대. 세상이 다 겨울이어도
        <br />
        우리 사랑은 늘봄처럼 따뜻하고
        <br />
        간혹, 여름처럼 뜨거울 겁니다
        <br />
        <br />
        - 이수동, (사랑가) -
        <br />
        <br />
      </div>
    </div>
  );
};

export default Quote; 