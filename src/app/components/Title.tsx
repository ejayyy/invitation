import React from "react";
import { WEDDING_CONFIG } from "../config/wedding";

const Title = () => {
  return (
    <section className="overflow-hidden">
      <div className="w-full text-center pt-10 font-medium animate-fade-in">
        <p className="text-sm opacity-45 mb-4">10년의 끝에서 시작하는 하루</p>
        <p className="text-2xl font-bold opacity-90 mb-4">
          {WEDDING_CONFIG.groom.name} & {WEDDING_CONFIG.bride.name}
        </p>
        <p className="text-base opacity-65 mb-6">
          {WEDDING_CONFIG.date}
          <br />
          {WEDDING_CONFIG.location}
        </p>
      </div>
      <video className="w-full" autoPlay loop muted playsInline>
        <source src="/assets/BackgroundVideo.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default Title; 