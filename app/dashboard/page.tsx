"use client";

import Overview from "@/components/Overview";
import Transaction from "@/components/Transaction";
import React from "react";

function Dashboard() {
  return (
    <div className="mx-8 my-8 flex  flex-col flex-grow items-start gap-8 self-stretch">
      <Overview />
      <Transaction />
    </div>
  );
}

export default Dashboard;
