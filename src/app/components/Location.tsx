"use client";

import React, { useEffect, useCallback } from "react";
import { WEDDING_CONFIG } from "../config/wedding";

const Location = () => {
  const executeScript = useCallback(() => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new window.daum.roughmap.Lander({
      "timestamp" : "1750665694551",
      "key" : "42qg6pmn4ri",
      "mapWidth" : "100%",
      "mapHeight" : "250"
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
    <section>
      <div className="flex items-center my-8">
        <hr className="grow border-t" />
        <p className="title">🚗 오시는 길</p>
        <hr className="grow border-t" />
      </div>
      <div
        id="daumRoughmapContainer1750665694551"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></div>

      <div className="text-sm text-center pt-10" data-aos="fade-up">
        <div>
          <p className="font-bold mb-2">차량</p>
          <p>{WEDDING_CONFIG.address}</p>
          <p>지하 1 ~ 8층 (2시간 무료)</p>
        </div>
        <div className="my-9">
          <p className="font-bold mb-2">버스</p>
          <p className="mb-2">영등포시장역 4번 출구 정류장</p>
          <div className="icon-container">
            <p><span className="bg-[#7284f6]">간선</span>605, 661, 760, 761</p>
            <p><span className="bg-[#47af1b]">지선</span>5616, 5714, 6514</p>
            <p><span className="bg-[#00afbd]">일반</span>5, 60</p>
            <p><span className="bg-[#ff451e]">광역</span>9707</p>
            <p><span className="bg-[#f65b3b]">직행</span>1082, 1500, 7602, 8000, 9030, 9030-1, G6002</p>
            <p><span className="bg-[#2391ee]">좌석</span>700, 830</p>
          </div>
        </div>
        <div>
          <p className="font-bold mb-2">지하철</p>
          <div className="icon-container">
            <p><span className="bg-[#8b50a4]">5호선</span>영등포시장역 4번 출구 (도보 3분)</p>
            <p><span className="bg-[#0d3692]">1호선</span>영등포역 6번 출구 (도보 10분)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

declare global {
  interface Window {
    daum: any;
  }
} 