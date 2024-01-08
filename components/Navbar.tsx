import CompanyLogoSVG from "@/public/Icons/CompanyLogo.svg";
import DownArrowSVG from "@/public/Icons/DownArrow.svg";
import Image from "next/image";

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
        <div
          className="text-[13px] not-italic font-normal leading-4 underline
  font-family: Inter text-gray-500"
        >
          Visit Store
        </div>
      </div>
      <div className="w-[20px] h-[20px] flex-shrink-0">
        <Image src={DownArrowSVG} alt="Down Arrow" width={15} height={8} />
      </div>
    </div>
  );
};

const Pages = () => {
  return (
    <div className=" ">
      <h1>Home</h1>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="w-full px-[10px] py-4 flex-cols  items-center gap-4 ">
      {/* nav top */}
      {/* Compnay Logo */}
      <CompanyLogo />
      <div className="flex mt-6">
        {/* Pages */}
        <Pages />
      </div>
    </div>
  );
};

export default Navbar;
