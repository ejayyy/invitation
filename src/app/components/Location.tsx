"use client";

import React, { useEffect, useCallback } from "react";

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
      <div className="flex items-center my-8" data-aos="fade-up">
        <hr className="grow border-t" />
        <p className="text-base font-bold mx-4 text-center">🚗 오시는 길</p>
        <hr className="grow border-t" />
      </div>
      <div
        id="daumRoughmapContainer1750665694551"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></div>

      <div className="w-full text-center pt-10" data-aos="fade-up">
        <div>
          <p className="font-bold mb-1">차량</p>
          <p className="text-sm">서울 영등포구 영중로 55</p>
          <p className="text-sm">지하 1 ~ 8층 (2시간 무료)</p>
        </div>
        <div className="my-8">
          <p className="font-bold mb-1">버스</p>
          <p className="text-sm mb-2">영등포시장역 4번 출구 정류장</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#7284f6] p-px rounded mr-1">간선</span>605, 661, 760, 761</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#47af1b] p-px rounded mr-1">지선</span>5616, 5714, 6514</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#00afbd] p-px rounded mr-1">일반</span>5, 60</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#ff451e] p-px rounded mr-1">광역</span>9707</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#f65b3b] p-px rounded mr-1">직행</span>1082, 1500, 7602, 8000, 9030, 9030-1, G6002</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#2391ee] p-px rounded mr-1">좌석</span>700, 830</p>
        </div>
        <div>
          <p className="font-bold mb-1">지하철</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#8b50a4] p-px rounded mr-1">5호선</span>영등포시장역 4번 출구 (도보 3분)</p>
          <p className="text-sm"><span className="text-white text-xs bg-[#0d3692] p-px rounded mr-1">1호선</span>영등포역 6번 출구 (도보 10분)</p>
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