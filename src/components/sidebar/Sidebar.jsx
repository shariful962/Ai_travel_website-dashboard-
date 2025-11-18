import React from "react";
import Icons from "../../assets/image";
import { NavLink, useLocation, useNavigate } from "react-router";
import { LogOut, X } from "lucide-react";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TfiLayers } from "react-icons/tfi";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const links = [
    { id: 1, name: "Dashboard", path: "/dashboard", ico: MdDashboard },
    { id: 2, name: "Earnings", path: "/earnings", ico: TfiLayers },
    { id: 3, name: "Users", path: "/users", ico: HiOutlineUsers },
    { id: 4, name: "Settings", path: "/settings", ico: IoSettingsOutline },
    { id: 5, name: "Support", path: "/support", ico: IoIosHelpCircleOutline },
  ];
  const handleLogout = () => {
    navigate("/signin");
  };
  return (
    <div className="">
      {/* sidebar for desktop   */}
      <aside className="hidden shadow-[7px_19px_30px_rgba(0,0,0,0.25)] md:flex flex-col w-64 h-full bg-white  border-gray-300 fixed top-0 left-0 z-60 ">
        {/* Logo Section */}
        {/* <button
          className="cursor-pointer my-6"
          onClick={() => navigate("/dashboard")}
        >
          <div className="flex items-center gap-4 px-4 py-4">
            <img src={Icons.navLogo} alt="Logo" className="" />
            <span className="font-medium text-[22px] text-Primary mt-2">
              Say My Meds
            </span>
          </div>
        </button> */}
        {/* Navigation */}
        <nav className="mt-6 flex flex-col flex-grow p-4 space-y-2 text-base md:text-lg">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-3 mb-3 rounded-[16px] text-base h-12 flex items-center  ${
                 location.pathname.startsWith(link.path)
                    ? "bg-Primary text-white font-medium"
                    : "hover:text-textClr"
                }`
              }
              end
            >
              <div className="flex items-center gap-x-4">
                <link.ico size={20} />
                <p>{link.name}</p>
              </div>
            </NavLink>
          ))}
          <button className="flex px-3 py-3 rounded-2xl text-[#FF5C5C] gap-x-3 cursor-pointer" onClick={handleLogout}>
              <LogOut /> Logout
            </button>
        </nav>
      </aside>

      {/* sidebar for mobile  */}
      <div
        className={`fixed inset-0 z-70 bg-black/10 md:hidden transition-all duration-300  ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <aside
          className="w-[294px] bg-white h-full shadow-md fixed top-0 left-0 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="mt-6 flex items-center justify-between px-4 py-4">
            {/* <div className="flex items-center gap-3">
              <img src={Icons.navLogo} alt="Logo" className="" />
              <span className="font-medium text-[22px] text-Primary mt-2">
                Say My Meds
              </span>
            </div> */}
            <div
              onClick={() => setIsOpen(false)}
              className="absolute text-gray-600 hover:text-gray-900 w-8 h-8 bg-gray-200 flex items-center justify-center rounded-full cursor-pointer top-3 right-3"
            >
              <X size={22} />
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2 flex-grow">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-2xl text-base ${
                    location.pathname.startsWith(link.path)
                      ? "bg-Primary text-white font-medium"
                      : "hover:text-textClr"
                  }`
                }
                end
              >
                <div className="flex items-center gap-x-3">
                  <link.ico size={20} />
                  <p>{link.name}</p>
                </div>
              </NavLink>
            ))}
            {/* logout button  */}
            <button className="flex px-3 py-3 rounded-2xl text-[#FF5C5C] gap-x-3 cursor-pointer" onClick={handleLogout}>
              <LogOut /> Logout
            </button>
          </nav>
          
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
