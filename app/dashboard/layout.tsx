import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="h-full md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 z-[80] bg-prime-blue">
        <Navbar />
      </div>
      <main className="md:pl-56">{children}</main>
    </div>
  );
};

export default DashboardLayout;
