"use client";

import Overview from "@/components/Overview";
import Transaction from "@/components/Transaction";
import React from "react";

function Dashboard() {
  return (
    <div className="mx-[36px] my-[36px] flex  flex-col flex-grow items-start gap-8 self-stretch">
      <Overview />
      <Transaction />
    </div>
  );
}

export default Dashboard;
