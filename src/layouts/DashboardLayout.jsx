import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Shared/Header";
import { useState } from "react";

const DashboardLayout = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="relative min-h-screen">
      <Header handleToggle={handleToggle} />
      <Sidebar isActive={isActive} />
      <div className="flex-1 overflow-auto mt-[60px] md:ml-[256px] bg-gray-50 py-8 px-4 md:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
