import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import ComposeModal from "./ComposeModal";
import EmailView from "./email view/EmailView";
import { MdOutlineDrafts } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";

const emails = Array.from({ length: 100 }).map((_, i) => ({
  name: `Nelson Lane ${i + 1}`,
  subject: "hello subject",
  message: "Lorem ipsum perspiciatis unde omnis iste natus",
  time: "12:30 PM",
}));

const Support = () => {
  const [starred, setStarred] = useState([1, 4]);
  const [openCompose, setOpenCompose] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEmail, setSelectedEmail] = useState(null); // <-- selected email
  const emailsPerPage = 10;

  const toggleStar = (index) => {
    if (starred.includes(index)) {
      setStarred(starred.filter((i) => i !== index));
    } else {
      setStarred([...starred, index]);
    }
  };

  const totalPages = Math.ceil(emails.length / emailsPerPage);
  const currentEmails = emails.slice(
    (currentPage - 1) * emailsPerPage,
    currentPage * emailsPerPage
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="px-4">
      {/* Header */}
      <div className="w-full flex justify-start">
        <div className="relative my-4">
          <FiSearch className="absolute left-3 top-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here ..."
            className="w-[560px] pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-0 w-full h-full rounded-lg">
        {/* LEFT SIDEBAR */}
        <div className="w-1/3 max-w-xs bg-white shadow rounded-xl p-4 h-full flex flex-col">
          <div className="border border-gray-200 rounded-lg px-3 py-2 mb-4 flex items-center justify-between cursor-pointer">
            <div className="flex items-center space-x-2">
              <MdOutlineDrafts size={22} className="text-gray-400" />
              <span className="font-medium text-gray-700">Email</span>
            </div>
            <span className="text-xs">{emails.length}</span>
          </div>

          <div className="flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 cursor-pointer">
            <AiOutlineStar size={22} className="text-gray-400" />
            <h1>Starred</h1>
          </div>
          <div className="flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 cursor-pointer">
            <RiDraftLine size={22} className="text-gray-400" />
            <h1>Draft</h1>
          </div>
          <div className="flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 cursor-pointer">
            <VscSend size={22} className="text-gray-400" />
            <h1>Sent</h1>
          </div>
        </div>

        {/* RIGHT EMAIL LIST + VIEW */}
        <div className="flex-1 ml-5 bg-white rounded-xl shadow p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto">
            {currentEmails.map((email, index) => (
              <div
                key={index}
                onClick={() => setSelectedEmail(email)}
                className="flex items-center border-b last:border-none border-gray-200 py-3 hover:bg-gray-50 rounded cursor-pointer"
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting email when clicking star
                    toggleStar((currentPage - 1) * emailsPerPage + index);
                  }}
                  className="mr-4 text-xl cursor-pointer"
                >
                  {starred.includes((currentPage - 1) * emailsPerPage + index) ? (
                    <AiFillStar className="text-yellow-500" />
                  ) : (
                    <AiOutlineStar className="text-gray-400" />
                  )}
                </div>

                <div className="w-40 font-medium text-gray-800">{email.name}</div>
                <div className="flex-1 text-gray-600 text-sm">{email.subject}</div>
                <div className="w-24 text-right text-gray-500 text-sm">{email.time}</div>
              </div>
            ))}
          </div>

          <div className="flex mt-4 space-x-4">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &lt;
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &gt;
            </button>
          </div>

          {/* Email View */}
          <div className="mt-4 border-t pt-4">
            <EmailView email={selectedEmail} />
          </div>
        </div>

        {/* Compose Button */}
        <button
          onClick={() => setOpenCompose(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Compose</span>
        </button>

        <ComposeModal open={openCompose} onClose={() => setOpenCompose(false)} />
      </div>
    </div>
  );
};

export default Support;

