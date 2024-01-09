import React from "react";
import {
  DownArrow2SVG,
  Ellipse2SVG,
  GroupSVG,
  HelpSVG,
  SearchSVG,
} from "@/public/Icons";
import Image from "next/image";

function Header() {
  return (
    <div className="px-8 py-[12px] flex w-full items-center gap-4 border-b border-solid bg-prime-white">
      {/* Header Payment */}
      <div className="flex w-[360px] items-center gap-4 ">
        <div className="text-[#1A181E] text-[15px] not-italic font-normal leading-[22px]">
          Payments
        </div>
        <div className="flex items-center gap-[6px]">
          <div>
            <Image src={HelpSVG} alt="Help Icon" />
          </div>
          <div className="text-[#4D4D4D] text-xs not-italic font-normal leading-4">
            How it works
          </div>
        </div>
      </div>
      {/* Search and Tutorials */}
      <div className="flex w-[400px] items-center gap-[var(--Spacing-spacing-04,8px)] shrink-0 self-stretch px-4 py-[9px] rounded-md bg-[#f2f2f2] ">
        <div>
          <Image src={SearchSVG} alt="searc icon" />
        </div>
        <div className="text-[#808080] text-[15px] not-italic font-normal leading-[22px]">
          Search features, tutorials, etc.
        </div>
      </div>
      {/* Icons */}
      <div className=" w-[360] flex justify-end items-start gap-[var(--Spacing-spacing-04,8px)] flex-[1_0_0]">
        <div className="flex items-start gap-3">
          <div className=" relative">
            <Image src={Ellipse2SVG} alt="Icon" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image src={GroupSVG} alt="Group Icon" />
            </div>
          </div>

          <Image src={DownArrow2SVG} alt="Arrow Icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
