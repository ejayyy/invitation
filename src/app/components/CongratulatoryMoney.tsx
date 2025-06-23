"use client";

import React, { useState } from "react";
import Image from "next/image";

const GROOM_NAME = "○○○";
const GROOM_ACCOUNT_NUMBER = "○○은행 ***-***-******";
const GROOM_FATHER_NAME = "○○○";
const GROOM_FATHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
const GROOM_MOTHER_NAME = "○○○";
const GROOM_MOTHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";

const BRIDE_NAME = "○○○";
const BRIDE_ACCOUNT_NUMBER = "○○은행 ***-***-******";
const BRIDE_FATHER_NAME = "○○○";
const BRIDE_FATHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";
const BRIDE_MOTHER_NAME = "○○○";
const BRIDE_MOTHER_ACCOUNT_NUMBER = "○○은행 ***-***-******";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-sm">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        {accounts.map((acc, index) => (
          <div key={index} className="flex justify-between items-center py-2">
            <span>{acc.name}</span>
            <button
              onClick={() => handleCopy(acc.number)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-1 px-3 rounded text-sm"
            >
              {acc.number} (복사)
            </button>
          </div>
        ))}
        <p className="text-xs text-gray-500 mt-4">
          계좌번호 클릭시, 붙여넣기 가능한 텍스트로 복사됩니다.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
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
      <div className="flex items-center text-gray-500 my-8" data-aos="fade-up">
        <hr className="flex-grow border-t border-gray-300" />
        <p className="text-base font-bold opacity-85 mx-4 text-center">
          축하의 마음을 전하세요
        </p>
        <hr className="flex-grow border-t border-gray-300" />
      </div>

      <div className="flex justify-center pb-10">
        <Image src="/assets/flower3.png" alt="flower" width={22} height={22} />
      </div>

      <p className="text-sm leading-7 opacity-75 mb-10" data-aos="fade-up">
        축하의 마음을 담아 축의금을 전달해 보세요.
      </p>

      <div className="mb-12 flex flex-row justify-center text-center space-x-4">
        <div
          className="w-44 border border-gray-200 p-8 cursor-pointer"
          data-aos="fade-up"
          onClick={() => setGroomVisible(true)}
        >
          <svg className="w-16 h-16 mx-auto mb-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <p className="text-sm leading-7 opacity-75">신랑측 계좌번호 확인</p>
        </div>
        <div
          className="w-44 border border-gray-200 p-8 cursor-pointer"
          data-aos="fade-up"
          onClick={() => setBrideVisible(true)}
        >
          <svg className="w-16 h-16 mx-auto mb-4 text-pink-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
          <p className="text-sm leading-7 opacity-75">신부측 계좌번호 확인</p>
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