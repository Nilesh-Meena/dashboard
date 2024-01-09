import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="md:flex md:flex-col md:fixed z-[80] bg-prime-blue">
        <Navbar />
      </div>
      <main className="md:pl-56 lg:w-full flex-grow overflow-auto">
        <Header />
        <div className="mx-8 my-8 flex flex-col items-start gap-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
