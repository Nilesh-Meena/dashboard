import Overview from "@/components/Overview";
import Transaction from "@/components/Transaction";
import React from "react";

function Dashboard() {
  return (
    <div className="mx-8 my-8 flex  flex-col items-start gap-8">
      <Overview />
      <Transaction />
    </div>
  );
}

export default Dashboard;
