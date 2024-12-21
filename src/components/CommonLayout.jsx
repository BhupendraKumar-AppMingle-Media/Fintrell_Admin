import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
// import Sidebar from "./Sidebar.jsx";
import Sidebar from "./Sidebar.jsx";


const CommonLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <div className=" bg-[#f4f9fd] shadow-md">
        {/* <Sidebar /> */}
        <Sidebar/>

      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-[#f4f9fd] px-4 py-2 overflow-y-auto">
        <div className="flex flex-col">
          <Header/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
