"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WEDDING_CONFIG } from "../config/wedding";
import AccountAccordion from "./AccountAccordion";

const CongratulatoryMoney = () => {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);

  const groomAccounts = [
    { name: `부: ${WEDDING_CONFIG.groom.father.name}`, number: WEDDING_CONFIG.groom.father.account, bank: WEDDING_CONFIG.groom.father.bank },
    { name: `모: ${WEDDING_CONFIG.groom.mother.name}`, number: WEDDING_CONFIG.groom.mother.account, bank: WEDDING_CONFIG.groom.mother.bank },
    { name: `신랑: ${WEDDING_CONFIG.groom.name}`, number: WEDDING_CONFIG.groom.account, bank: WEDDING_CONFIG.groom.bank },
  ];

  const brideAccounts = [
    { name: `부: ${WEDDING_CONFIG.bride.father.name}`, number: WEDDING_CONFIG.bride.father.account, bank: WEDDING_CONFIG.bride.father.bank },
    { name: `모: ${WEDDING_CONFIG.bride.mother.name}`, number: WEDDING_CONFIG.bride.mother.account, bank: WEDDING_CONFIG.bride.mother.bank },
    { name: `신부: ${WEDDING_CONFIG.bride.name}`, number: WEDDING_CONFIG.bride.account, bank: WEDDING_CONFIG.bride.bank },
  ];

  return (
    <div className="pt-10 pb-4 text-center">
      <div className="flex items-center my-8" data-aos="fade-up">
        <hr className="grow border-t" />
        <p className="text-base font-bold mx-4 text-center">마음 전하실 곳</p>
        <hr className="grow border-t" />
      </div>

      <div className="flex justify-center pb-10">
        <Image src="/assets/flower3.png" alt="flower" width={22} height={22} />
      </div>

      <p className="text-sm mb-10" data-aos="fade-up">따뜻한 마음 전해주시는 모든 분들께 감사드립니다.</p>

      <div className="max-w-2xl mx-auto">
        <AccountAccordion
          title="신랑측 계좌번호"
          accounts={groomAccounts}
          isOpen={groomOpen}
          onToggle={() => setGroomOpen(!groomOpen)}
        />

        <AccountAccordion
          title="신부측 계좌번호"
          accounts={brideAccounts}
          isOpen={brideOpen}
          onToggle={() => setBrideOpen(!brideOpen)}
        />
      </div>
    </div>
  );
};

export default CongratulatoryMoney; 