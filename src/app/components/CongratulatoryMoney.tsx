"use client";

import React, { useState } from "react";
import { WEDDING_CONFIG } from "../config/wedding";
import AccountAccordion from "./AccountAccordion";

const CongratulatoryMoney = () => {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);

  const groomAccounts = [
    { title: `부`, name: WEDDING_CONFIG.groom.father.name, number: WEDDING_CONFIG.groom.father.account, bank: WEDDING_CONFIG.groom.father.bank },
    { title: `모`, name: WEDDING_CONFIG.groom.mother.name, number: WEDDING_CONFIG.groom.mother.account, bank: WEDDING_CONFIG.groom.mother.bank },
    { title: `신랑`, name: WEDDING_CONFIG.groom.name, number: WEDDING_CONFIG.groom.account, bank: WEDDING_CONFIG.groom.bank },
  ];

  const brideAccounts = [
    { title: `부`, name: WEDDING_CONFIG.bride.father.name, number: WEDDING_CONFIG.bride.father.account, bank: WEDDING_CONFIG.bride.father.bank },
    { title: `모`, name: WEDDING_CONFIG.bride.mother.name, number: WEDDING_CONFIG.bride.mother.account, bank: WEDDING_CONFIG.bride.mother.bank },
    { title: `신부`, name: WEDDING_CONFIG.bride.name, number: WEDDING_CONFIG.bride.account, bank: WEDDING_CONFIG.bride.bank },
  ];

  return (
    <section>
      <div className="flex items-center my-8">
        <hr className="grow border-t" />
        <p className="title">💌 마음 전하실 곳</p>
        <hr className="grow border-t" />
      </div>

      <p className="text-center text-sm mb-10" data-aos="fade-up">따뜻한 마음 전해주시는 모든 분들께 감사드립니다.</p>

      <div className="max-w-2xl mx-auto md:flex md:items-start md:justify-between md:gap-4">
        <AccountAccordion
          title="신랑"
          accounts={groomAccounts}
          isOpen={groomOpen}
          onToggle={() => setGroomOpen(!groomOpen)}
        />

        <AccountAccordion
          title="신부"
          accounts={brideAccounts}
          isOpen={brideOpen}
          onToggle={() => setBrideOpen(!brideOpen)}
        />
      </div>
    </section>
  );
};

export default CongratulatoryMoney; 