"use client";

import React, { useState } from "react";
import Image from "next/image";
import { WEDDING_CONFIG } from "../config/wedding";

const AccountAccordion = ({ title, accounts, isOpen, onToggle }: {
  title: string,
  accounts: { name: string, number: string }[],
  isOpen: boolean,
  onToggle: () => void
}) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("계좌번호가 복사되었습니다.");
    });
  };

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-4 text-left hover:opacity-80 transition-colors flex justify-between items-center"
      >
        <span className="font-semibold text-lg">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-4">
          <div className="flex flex-col gap-3">
            {accounts.map((acc, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 items-center gap-2">
                <span className="text-left text-sm font-medium">{acc.name}</span>
                <div className="md:col-span-2">
                  <button
                    onClick={() => handleCopy(acc.number)}
                    className="w-full bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-semibold py-2 px-3 rounded-sm text-sm whitespace-normal text-left break-all"
                  >
                    {acc.number} (복사)
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 mt-4">
            계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
          </p>
        </div>
      )}
    </div>
  );
};

const CongratulatoryMoney = () => {
  const [groomOpen, setGroomOpen] = useState(false);
  const [brideOpen, setBrideOpen] = useState(false);

  const groomAccounts = [
    { name: `부: ${WEDDING_CONFIG.groom.father.name}`, number: WEDDING_CONFIG.groom.father.account },
    { name: `모: ${WEDDING_CONFIG.groom.mother.name}`, number: WEDDING_CONFIG.groom.mother.account },
    { name: `신랑: ${WEDDING_CONFIG.groom.name}`, number: WEDDING_CONFIG.groom.account },
  ];

  const brideAccounts = [
    { name: `부: ${WEDDING_CONFIG.bride.father.name}`, number: WEDDING_CONFIG.bride.father.account },
    { name: `모: ${WEDDING_CONFIG.bride.mother.name}`, number: WEDDING_CONFIG.bride.mother.account },
    { name: `신부: ${WEDDING_CONFIG.bride.name}`, number: WEDDING_CONFIG.bride.account },
  ];

  return (
    <div className="pt-10 pb-4 text-center">
      <div className="flex items-center my-8" data-aos="fade-up">
        <hr className="grow border-t" />
        <p className="text-base font-bold mx-4 text-center">
          축하의 마음을 전하세요
        </p>
        <hr className="grow border-t" />
      </div>

      <div className="flex justify-center pb-10">
        <Image src="/assets/flower3.png" alt="flower" width={22} height={22} />
      </div>

      <p className="text-sm leading-7 mb-10" data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </p>

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