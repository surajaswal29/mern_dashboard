import { NavLink } from "react-router-dom"
import { MdInventory, MdDashboardCustomize, MdInsights } from "react-icons/md"
import { LiaCogSolid } from "react-icons/lia"
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div className="w-full md:w-2/12 h-full bg-slate-900 py-4 text-gray-200 hidden md:block">
      <div className="w-full flex justify-center px-4">
        <h1 className="font-semibold text-xl flex items-center gap-2"><RxDashboard /> My Dashboard</h1>
      </div>
      <div className="w-full mt-6">
        <NavLink to={"/dashboard/main"} className={({ isActive }) => isActive ? `nav_link_style bg-[#a06bf5]` : `nav_link_style`}>
          <MdDashboardCustomize />
          Dashboard
        </NavLink>
        <NavLink to={"/dashboard/topics"} className={({ isActive }) => isActive ? `nav_link_style bg-[#a06bf5]` : `nav_link_style`}>
          <MdInventory />
          Topics
        </NavLink>
        <NavLink to={"/dashboard/all-insights"} className={({ isActive }) => isActive ? `nav_link_style bg-[#a06bf5]` : `nav_link_style`}>
          <MdInsights />
          All Insight
        </NavLink>
        <NavLink to={"/dashboard/settings"} className={({ isActive }) => isActive ? `nav_link_style bg-[#a06bf5]` : `nav_link_style`}>
          <LiaCogSolid />
          Settings
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
