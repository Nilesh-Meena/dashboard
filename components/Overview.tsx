import { DownArrowBlackSVG } from "@/public/Icons";
import Image from "next/image";
import React from "react";

interface CardProps {
  text?: string;
  amount?: string;
}

const Card = ({ text, amount }: CardProps) => {
  return (
    <div
      className="flex gap-6 flex-[1_0_0] bg-prime-white
    shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] rounded-[var(--Spacing-spacing-04,8px)]"
    >
      <div className="flex flex-col  px-5 py-5 items-start gap-4 flex-shrink-0 ">
        <div className="text-[color:var(--Black-30,#4D4D4D)] text-base not-italic font-normal leading-6">
          {text}
        </div>
        <div className="text-[color:var(--Black-12,#1A181E)] text-[32px] not-italic font-medium leading-[38px]">
          {amount}
        </div>
      </div>
    </div>
  );
};

function Overview() {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      {/* Overview title */}
      <div className="flex flex-col items-start gap-5 self-stretch rounded-md ">
        <div className="flex justify-between items-center  self-stretch">
          <div className="text-[color:var(--Black-12,#1A181E)] text-xl not-italic font-medium leading-7 rounded-md">
            Overview
          </div>
          <div className="flex items-center gap-4 bg-prime-white rounded border border-[color:var(--Black-85,#D9D9D9)] border-solid">
            <div className="px-4 py-[6px] flex">
              <div className="flex text-base not-italic font-normal leading-6 text-[color:var(--Black-30, #4d4d4d)]">
                Last Month
              </div>
              <div className="py-1 pl-2">
                <Image src={DownArrowBlackSVG} alt="Down Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Online Order and Amount Received */}
      <div className="flex items-start gap-5 self-stretch">
        <Card text="Online orders" amount="231" />
        <Card text="Amount received" amount="₹23,92,312.19" />
      </div>
    </div>
  );
}

export default Overview;
