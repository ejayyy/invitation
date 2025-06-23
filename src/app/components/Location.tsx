"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";

const Location = () => {
  const executeScript = useCallback(() => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new window.daum.roughmap.Lander({
      "timestamp" : "1750665694551",
      "key" : "42qg6pmn4ri",
      "mapWidth" : "100%",
      "mapHeight" : "600"
    }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  }, []);

  const installScript = useCallback(() => {
    if (window.daum?.roughmap?.cdn) {
      return;
    }

    const protocol = window.location.protocol;
    const cdnIdentifier = "16137cec";

    window.daum = window.daum || {};
    window.daum.roughmap = {
      cdn: cdnIdentifier,
      URL_KEY_DATA_LOAD_PRE: protocol + "//t1.daumcdn.net/roughmap/",
      url_protocal: protocol,
    };

    const scriptUrl = `${protocol}//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/${cdnIdentifier}/roughmapLander.js`;

    const scriptTag = document.createElement("script");
    scriptTag.src = scriptUrl;
    scriptTag.onload = executeScript;
    document.body.append(scriptTag);
  }, [executeScript]);

  useEffect(() => {
    installScript();
  }, [installScript]);

  return (
    <div className="pt-10 w-[70%] mx-auto">
      <div className="flex items-center text-gray-500 my-8">
        <hr className="flex-grow border-t border-gray-300" />
        <p className="text-base font-bold opacity-85 mx-4 text-center">
          오시는 길
        </p>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex justify-center pb-10">
        <Image src="/assets/flower2.png" alt="flower" width={22} height={22} />
      </div>
      
      <div
        id="daumRoughmapContainer1750665694551"
        className="w-full root_daum_roughmap root_daum_roughmap_landing"
      ></div>

      <div className="text-sm leading-7 opacity-75 w-full text-center py-10">
        대구 수성구 두산동 888-2번지
        <br />
        호텔수성 수성스퀘어 3층 피오니홀
        <br />
        <br />
        <span className="text-base font-bold opacity-85">버스 이용시</span>
        <br />
        <br />
        410-1, 401 호텔수성 앞 하차
        <br />
        수성1-1, 수성3-1, 814 TBC방송국 앞 하차
        <br />
        <br />
        <span className="text-base font-bold opacity-85">지하철 이용시</span>
        <br />
        <br />
        3호선 수성못역 하차 (도보 10분)
      </div>
    </div>
  );
};

export default Location;

declare global {
  interface Window {
    daum: any;
  }
} 