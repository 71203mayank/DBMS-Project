import { useCallback } from "react";
import AdminButton from "./AdminUserButton";
import AdminNavigation from "./AdminNavigation";
import SearchAdmin from "./SearchAdmin";
import AdminWhereTo from "./AdminWhereTo";
import AdminMap from "./AdminMap";
import SideBarAdmin from "./SideBarAdmin";
import AdminLog from "./AdminLog";
import AdminWeatherDecor from "./AdminWeatherDecor";
import AdminViewBookingHistory from "./AdminViewBookingHistory";

const AdminModeHome = () => {
  return (
     <div className="relative rounded-[15.38px] bg-ghostwhite w-full h-[800px] overflow-x: auto text-left text-[15.38px] text-gray-100 font-sora">
      <div className="absolute top-[0px] left-[0px] rounded-[15.38px] bg-white w-[280.77px] h-[597.12px]">
      <AdminWeatherDecor />
      <SideBarAdmin />
      <AdminButton />
      </div>
      <AdminViewBookingHistory />
      <AdminLog />
      <AdminMap />
      <AdminWhereTo /> 
      <SearchAdmin />
      <AdminNavigation />
     </div>
  );
};

export default AdminModeHome;
