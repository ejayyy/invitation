"use client";

import React from "react";

interface AccountAccordionProps {
  title: string;
  accounts: { name: string; number: string }[];
  isOpen: boolean;
  onToggle: () => void;
}

const AccountAccordion: React.FC<AccountAccordionProps> = ({ title, accounts, isOpen, onToggle }) => {
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
                    {acc.number}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-500 mt-4">
            계좌번호 클릭 시 복사됩니다.
          </p>
        </div>
      )}
    </div>
  );
};

export default AccountAccordion; 