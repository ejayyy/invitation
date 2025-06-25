"use client";

import React, { useState } from "react";
import Image from "next/image";

const GROOM_NAME = "한승헌";
const GROOM_ACCOUNT_NUMBER = "카카오 3333-01-1502699";
const GROOM_FATHER_NAME = "한영환";
const GROOM_FATHER_ACCOUNT_NUMBER = "우리은행 213-239541-02-101";
const GROOM_MOTHER_NAME = "박주희";
const GROOM_MOTHER_ACCOUNT_NUMBER = "우리은행 1002-246-355304";

const BRIDE_NAME = "하은지";
const BRIDE_ACCOUNT_NUMBER = "하나은행 355-910451-58907";
const BRIDE_FATHER_NAME = "하후동";
const BRIDE_FATHER_ACCOUNT_NUMBER = "우리은행 1005-903-884007";
const BRIDE_MOTHER_NAME = "박옥분";
const BRIDE_MOTHER_ACCOUNT_NUMBER = "우리은행 1005-403-217198";

const AccountModal = ({ title, accounts, visible, onClose }: {
  title: string,
  accounts: { name: string, number: string }[],
  visible: boolean,
  onClose: () => void
}) => {
  if (!visible) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("계좌번호가 복사되었습니다.");
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="flex flex-col gap-3">
          {accounts.map((acc, index) => (
            <div key={index} className="grid grid-cols-3 items-center gap-2">
              <span className="col-span-1 text-left text-sm">{acc.name}</span>
              <button
                onClick={() => handleCopy(acc.number)}
                className="col-span-2 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 font-semibold py-2 px-3 rounded-sm text-sm whitespace-normal text-left break-all"
              >
                {acc.number} (복사)
              </button>
            </div>
          ))}
        </div>
        <p className="text-xs text-neutral-500 mt-4">
          계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-neutral-500 hover:bg-neutral-600 text-white font-bold py-2 px-4 rounded-sm"
        >
          닫기
        </button>
      </div>
    </div>
  );
};


const CongratulatoryMoney = () => {
  const [groomVisible, setGroomVisible] = useState(false);
  const [brideVisible, setBrideVisible] = useState(false);

  const groomAccounts = [
    { name: `부: ${GROOM_FATHER_NAME}`, number: GROOM_FATHER_ACCOUNT_NUMBER },
    { name: `모: ${GROOM_MOTHER_NAME}`, number: GROOM_MOTHER_ACCOUNT_NUMBER },
    { name: `신랑: ${GROOM_NAME}`, number: GROOM_ACCOUNT_NUMBER },
  ];

  const brideAccounts = [
    { name: `부: ${BRIDE_FATHER_NAME}`, number: BRIDE_FATHER_ACCOUNT_NUMBER },
    { name: `모: ${BRIDE_MOTHER_NAME}`, number: BRIDE_MOTHER_ACCOUNT_NUMBER },
    { name: `신부: ${BRIDE_NAME}`, number: BRIDE_ACCOUNT_NUMBER },
  ];

  return (
    <div className="pt-10 pb-4 w-[70%] mx-auto text-center">
      <div className="flex items-center my-8" data-aos="animate-fade-up">
        <hr className="grow border-t" />
        <p className="text-base font-bold mx-4 text-center">
          축하의 마음을 전하세요
        </p>
        <hr className="grow border-t" />
      </div>

      <div className="flex justify-center pb-10">
        <Image src="/assets/flower3.png" alt="flower" width={22} height={22} />
      </div>

      <p className="text-sm leading-7 mb-10" data-aos="animate-fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </p>

      <div className="mb-12 flex flex-row justify-center text-center gap-4">
        <div
          className="w-44 border p-8 cursor-pointer hover:bg-neutral-50 transition-colors"
          data-aos="animate-fade-up"
          onClick={() => setGroomVisible(true)}
        >
          <svg className="w-16 h-16 mx-auto mb-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <p className="text-sm leading-7 text-neutral-600">신랑측 계좌번호 확인</p>
        </div>
        <div
          className="w-44 border p-8 cursor-pointer hover:bg-neutral-50 transition-colors"
          data-aos="animate-fade-up"
          onClick={() => setBrideVisible(true)}
        >
          <svg className="w-16 h-16 mx-auto mb-4 text-pink-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <p className="text-sm leading-7 text-neutral-600">신부측 계좌번호 확인</p>
        </div>
      </div>

      <AccountModal
        title="신랑측 계좌번호"
        accounts={groomAccounts}
        visible={groomVisible}
        onClose={() => setGroomVisible(false)}
      />

      <AccountModal
        title="신부측 계좌번호"
        accounts={brideAccounts}
        visible={brideVisible}
        onClose={() => setBrideVisible(false)}
      />
    </div>
  );
};

export default CongratulatoryMoney; 