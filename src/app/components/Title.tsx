import React from "react";
import { WEDDING_CONFIG } from "../config/wedding";

const Title = () => {
  return (
    <section className="-mx-3 relative mt-0 min-h-screen overflow-hidden">
      <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline poster="/thumbnails/thumbnail.png">
        <source src="/assets/BackgroundVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 top-[18%] sm:top-[10%] font-medium animate-fade-in text-center text-white">
        <p className="text-base">10년의 끝에서 시작하는 하루</p>
        <div className="mt-3 mb-5">
          <p className="text-3xl font-bold">{WEDDING_CONFIG.groom.name} & {WEDDING_CONFIG.bride.name}</p>
        </div>
        <p className="text-md">
          {WEDDING_CONFIG.date}
          <br />
          {WEDDING_CONFIG.location}
        </p>
      </div>
    </section>
  );
};

export default Title; 