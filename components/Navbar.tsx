"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

import {
  CompanyLogoSVG,
  DownArrowSVG,
  HomeSVG,
  OrderSVG,
  ProductSVG,
  DeliverySVG,
  AnalyticsSVG,
  AppearanceSVG,
  AudienceSVG,
  DiscountsSVG,
  MarkettingSVG,
  PaymentSVG,
  PluginsSVG,
  ToolsSVG,
  WalletSVG,
} from "@/public/Icons";

interface PageProps {
  icon?: StaticImageData;
  text?: string;
  isClicked: boolean;
  onClick: () => void;
}

const CompanyLogo = () => {
  return (
    <div className="mx-2 w-[192px] h-[42px] flex flex-cols items-center gap-3">
      <div className="w-[40] h-[40] ">
        <Image src={CompanyLogoSVG} alt="Company logo" width={39} height={39} />
      </div>
      <div className="w-[108px] h-[42px] justify-center items-start gap-1 flex-[1_0_0]">
        <div className="text-[15px] not-italic font-medium leading-[22px] text-white">
          Nishyan
        </div>
        <div className="text-[13px] not-italic font-normal leading-4 underline font-family: Inter text-white opacity-[0.8]">
          Visit Store
        </div>
      </div>
      <div className="w-[20px] h-[20px] flex-shrink-0">
        <Image src={DownArrowSVG} alt="Down Arrow" width={15} height={8} />
      </div>
    </div>
  );
};

const Pages = ({ icon, text, isClicked, onClick }: PageProps) => {
  const bgColor = isClicked
    ? "bg-[rgba(255,255,255,0.1)] rounded-md "
    : "opacity-[0.8]";

  return (
    <Link
      href="/dashboard"
      onClick={onClick}
      className={`flex flex-cols items-start gap-1 w-[208px] px-4 py-2 ${bgColor}`}
    >
      <div className="w-[20px] h-[20px] flex-shrink-0 ">
        {icon && (
          <Image
            src={icon}
            alt="Home Icon"
            width={20}
            height={20}
            className="white-icon"
          />
        )}
      </div>
      <div className="ml-3 text-[14px] text-white font-medium leading-5  ">
        {text}
      </div>
    </Link>
  );
};

const PageBottom = () => {
  return (
    <div className="px-3 py-[6px] flex items-center gap-3  h-[42px] ">
      <div className=" w-[24px] h-[24px]  rounded bg-white-secondary">
        <Image
          src={WalletSVG}
          alt="wallet.svg"
          className="px-[6px] py-[6px] items-center"
        />
      </div>
      <div className=" flex flex-col items-start  text-white">
        <span className="text-[13px] not-italic font-normal leading-4 opacity-[0.8]">
          Available credits
        </span>
        <span>222.10</span>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(6);

  const handlePageClick = (index: number) => {
    setClickedIndex(index);
  };

  const pages = [
    { icon: HomeSVG, text: "Home" },
    { icon: OrderSVG, text: "Orders" },
    { icon: ProductSVG, text: "Products" },
    { icon: DeliverySVG, text: "Delivery" },
    { icon: MarkettingSVG, text: "Marketing" },
    { icon: AnalyticsSVG, text: "Analytics" },
    { icon: PaymentSVG, text: "Payments" },
    { icon: ToolsSVG, text: "Tools" },
    { icon: DiscountsSVG, text: "Discounts" },
    { icon: AudienceSVG, text: "Audience" },
    { icon: AppearanceSVG, text: "Appearance" },
    { icon: PluginsSVG, text: "Plugins" },
  ];

  return (
    <div className=" md:w-[224px] h-screen px-[10px] py-4 flex-cols  items-center gap-4 ">
      {/* nav top */}
      {/* Compnay Logo */}
      <CompanyLogo />
      {/* Pages */}
      <div className=" mt-6 flex-grow">
        {pages.map((page, index) => (
          <Pages
            key={index}
            icon={page.icon}
            text={page.text}
            isClicked={index === clickedIndex}
            onClick={() => handlePageClick(index)}
          />
        ))}
      </div>
      {/* Base Nav - Bottom */}
      <div
        className="absolute mb-4 bottom-0  w-[192px]  items-start
       gap-[10px] border-rad rounded bg-prime-blue-secondary"
      >
        <PageBottom />
      </div>
    </div>
  );
};

export default Navbar;
