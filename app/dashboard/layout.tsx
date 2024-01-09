import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="md:flex md:flex-col  z-[80] bg-prime-blue">
        <Navbar />
      </div>
      <main className=" lg:w-full flex-grow overflow-auto">
        <Header />
        <div className=" flex flex-col items-start gap-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
