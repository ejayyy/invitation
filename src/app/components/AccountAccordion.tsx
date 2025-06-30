"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface AccountAccordionProps {
  title: string;
  accounts: { title: string; name: string; number: string; bank: string; }[];
  isOpen: boolean;
  onToggle: () => void;
}

const AccountAccordion: React.FC<AccountAccordionProps> = ({ title, accounts, isOpen, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, accounts]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("계좌번호가 복사되었습니다.");
    });
  };

  return (
    <div className="mb-4 w-full border border-neutral-200 dark:border-neutral-700 rounded-sm">
      <button
        onClick={onToggle}
        className="w-full p-3 flex justify-between items-center hover:bg-neutral-100 dark:hover:bg-neutral-900"
      >
        <span className="font-semibold">{title}</span>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ height: `${contentHeight}px` }}
      >
        <div ref={contentRef} className="p-3">
          <div className="flex flex-col gap-3">
            {accounts.map((acc, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-bold">{acc.title}</span>
                  <span className="text-sm font-medium">{acc.name}</span>
                </div>
                <button
                  onClick={() => handleCopy(`${acc.bank} ${acc.number}`)}
                  className="bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 py-2 px-3 rounded-sm text-sm flex items-center basis-2/3"
                >
                  <Image src={`/bank/${acc.bank}.png`} alt={acc.bank} width={14} height={14} />
                  <span className="text-xs ml-1 mr-2">{acc.bank}</span>
                  {acc.number}
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 text-right">
            계좌번호 클릭 시 복사됩니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountAccordion; 