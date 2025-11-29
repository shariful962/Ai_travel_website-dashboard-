// src/pages/support/SupportLayout.jsx
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { MdOutlineDrafts } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const emails = Array.from({ length: 100 }).map((_, i) => ({
  id: i + 1,
  name: `Nelson Lane ${i + 1}`,
  subject: "hello subject",
  message: "Lorem ipsum perspiciatis unde omnis iste natus",
  time: "12:30 PM",
}));

const SupportLayout = () => {
  const [starred, setStarred] = useState([1, 4]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleStar = (id) => {
    if (starred.includes(id)) {
      setStarred(starred.filter((i) => i !== id));
    } else {
      setStarred([...starred, id]);
    }
  };

  return (
    <div className="px-4">
      {/* Search bar */}
      <div className="w-full flex justify-start">
        <div className="relative my-4">
          <FiSearch className="absolute left-3 top-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[560px] pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-0 w-full h-full rounded-lg">
        {/* Sidebar */}
        <div className="w-1/3 max-w-xs bg-white shadow rounded-xl p-4 h-full flex flex-col">
          <div
            className="border border-gray-200 rounded-lg px-3 py-2 mb-4 flex items-center justify-between cursor-pointer"
            onClick={() => navigate("/support/inbox")}
          >
            <div className="flex items-center space-x-2">
              <MdOutlineDrafts size={22} className="text-gray-400" />
              <span className="font-medium text-gray-700">Inbox</span>
            </div>
            <span className="text-xs">{emails.length}</span>
          </div>

          <NavLink
            to="/support/starred"
            className={({ isActive }) =>
              `flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 ${
                isActive ? "bg-gray-100" : "cursor-pointer"
              }`
            }
          >
            <AiOutlineStar size={22} className="text-gray-400" />
            <h1>Starred</h1>
          </NavLink>

          <NavLink
            to="/support/drafts"
            className={({ isActive }) =>
              `flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 ${
                isActive ? "bg-gray-100" : "cursor-pointer"
              }`
            }
          >
            <RiDraftLine size={22} className="text-gray-400" />
            <h1>Draft</h1>
          </NavLink>

          <NavLink
            to="/support/sent"
            className={({ isActive }) =>
              `flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 ${
                isActive ? "bg-gray-100" : "cursor-pointer"
              }`
            }
          >
            <VscSend size={22} className="text-gray-400" />
            <h1>Sent</h1>
          </NavLink>
        </div>

        {/* Content */}
        <div className="flex-1 ml-5 bg-white rounded-xl shadow p-4 flex flex-col">
          <Outlet context={{ emails, starred, toggleStar, searchTerm }} />
        </div>
      </div>
    </div>
  );
};

export default SupportLayout;

