import {
  DownArrowSmallSVG,
  DownloadSVG,
  LeftArrowSVG,
  RightArrowSVG,
  SearchSVG,
  SortSVG,
  TransactionFeesSVG,
} from "@/public/Icons";
import React from "react";
import Image from "next/image";
import { Data } from "@/public/Data";

interface DataTableProps {
  orderId?: string;
  orderDate?: string;
  orderAmount?: string;
  transactionFees?: string;
}

const Search = () => {
  return (
    <div className="flex gap-4 lg:flex-row w-full flex-grow justify-between self-stretch items-center">
      {/* Search Div */}
      <div className="flex items-start flex-[1_0_0]">
        <div className="flex px-4 py-2.5 rounded border border-[color:var(--Black-85,#D9D9D9)] border-solid gap-2 ">
          <Image src={SearchSVG} alt="Search Icon" />
          <div className="text-[color:var(--Black-60,#999)] md:w-48 flex-grow text-sm not-italic font-normal leading-5">
            Search by order ID...
          </div>
        </div>
      </div>
      {/* Right End Div */}
      <div className="flex lg:items-end gap-3">
        {/* Sort */}
        <div className="flex px-3 py-[8px] gap-[6px] rounded border border-[color:var(--Black-85,#D9D9D9)] border-solid">
          <div className="text-base not-italic font-normal">Sort</div>
          <Image src={SortSVG} alt="Sort Icon" />
        </div>
        {/* Download */}
        <div className="rounded border border-[color:var(--Black-85,#D9D9D9)] border-solid px-2 py-2">
          <Image src={DownloadSVG} alt="Download Icon" />
        </div>
      </div>
    </div>
  );
};

const Pagination = () => {
  return (
    <div className="flex mt-2 items-center justify-center gap-6">
      <div className="flex justify-center items-center gap-1.5 pl-1.5 pr-3 py-1.5 rounded border border-[color:var(--Black-85,#D9D9D9)] border-solid">
        <Image src={LeftArrowSVG} alt="Left Arrow Icon" />
        <span className="text-center text-sm not-italic font-medium leading-5">
          Previous
        </span>
      </div>
      {/* pagination */}
      <div className="flex gap-[var(--Spacing-spacing-04, 8px);]">
        {/* Pagination spans go here */}
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          1
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          ...
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5 bg-blue-secondary">
          10
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          11
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          12
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          13
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          14
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          15
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          16
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          17
        </span>
        <span className="flex w-7 h-7 flex-col justify-center items-center gap-2 rounded px-0 py-0.5">
          18
        </span>
      </div>
      <div className="flex justify-center items-center gap-1.5 pl-1.5 pr-3 py-1.5 rounded border border-[color:var(--Black-85,#D9D9D9)] border-solid">
        <Image src={RightArrowSVG} alt="Right Arrow Icon" />
        <span className="text-center text-sm not-italic font-medium leading-5">
          Next
        </span>
      </div>
    </div>
  );
};
// ... (imports remain the same)

const DataTable = ({
  orderId,
  orderDate,
  orderAmount,
  transactionFees,
}: DataTableProps) => {
  return (
    <div className="h-[48px] flex items-center gap-10 px-3 py-2.5 rounded border-b border-[color:var(--Black-85,#D9D9D9)]">
      <div className="md:w-[160px] lg:w-[160px] flex flex-col justify-center items-start text-blue-secondary">
        #{orderId}
      </div>
      <div className="md:w-[160px] lg:w-[160px] flex  items-center">
        {orderDate}
      </div>
      <div className="md:flex-grow lg:flex-grow text-right">{orderAmount}</div>
      <div className="md:flex-grow lg:flex-grow flex items-end text-right">
        <span className="flex-grow">{transactionFees}</span>
        <Image
          src={TransactionFeesSVG}
          alt="Transaction Fees Icon"
          className="pb-1 ml-1"
        />
      </div>
    </div>
  );
};

// ... (Search, Pagination components remain the same)

function Transaction() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="text-[color:var(--Black-12,#1A181E)] items-start text-xl not-italic font-medium leading-7">
        Transactions | This Month
      </div>
      {/* Template */}
      <div className="flex flex-col gap-3 pt-3 pb-6 px-3 rounded-[var(--Spacing-spacing-04,8px)] shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] bg-prime-white">
        <Search />

        {/* Table */}
        <div className="h-[48px] flex items-center gap-10 px-3 py-2.5 rounded bg-prime-gray">
          <div className="md:w-[160px] lg:w-[160px] flex flex-col justify-center items-start">
            Order Id
          </div>
          <div className="md:w-[160px] lg:w-[160px] flex flex-grow gap-1 items-center">
            Order Date
            <Image src={DownArrowSmallSVG} alt="Down Arrow Icon" />
          </div>
          <div className="md:w-48 lg:w-56 text-right">Order Amount</div>
          <div className="md:flex-grow lg:flex-grow flex items-end text-right">
            <span className="flex-grow">Transaction Fees</span>
            <Image
              src={TransactionFeesSVG}
              alt="Transaction Fees Icon"
              className="pb-1 ml-1"
            />
          </div>
        </div>
        {/* Data Table */}
        {Data.map((data, index) => (
          <DataTable
            key={index}
            orderId={data.orderId}
            orderDate={data.orderDate}
            orderAmount={data.orderAmount}
            transactionFees={data.transactionFees}
          />
        ))}
        <Pagination />
      </div>
      {/* Additional styling for the Transaction component */}
      <div className="h-[48px] flex items-center gap-10 px-3 py-2.5 rounded bg-prime-gray">
        <div className="md:w-160 lg:w-160 flex flex-col justify-center items-center flex-[1_0_0]">
          {/* You may add additional content here */}
        </div>
        <div className="md:flex-grow lg:flex-grow flex flex-grow gap-1 items-center">
          {/* You may add additional content here */}
        </div>
        <div className="md:w-48 lg:w-56 text-right">Order Amount</div>
        <div className="md:flex-grow lg:flex-grow flex items-end text-right">
          <span className="flex-grow">Additional Content</span>
          <Image
            src={TransactionFeesSVG}
            alt="Transaction Fees Icon"
            className="pb-1 ml-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Transaction;
