import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineDrafts } from "react-icons/md";
import { RiDraftLine } from "react-icons/ri";
import { VscSend } from "react-icons/vsc";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import ComposeModal from "../ComposeModal";

const emails = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  name: `Nelson Lane ${i + 1}`,
  email: `shariful${i+1}@gmail.com`,
  subject: `subject ${i+1}`,
  message: `Lorem ipsum perspiciatis unde omnis iste natus ${i+1} Lorem ipsum perspiciatis unde omnis iste natus${i+1}`,
  time: "12:30 PM",
}));

const SupportLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openCompose, setOpenCompose] = useState(false);


  const navigate = useNavigate();
  const [starred, setStarred] = useState(()=>{
    const save = localStorage.getItem('starredEmails');
    return save ? JSON.parse(save) : [];
  });
 

  const toggleStar = (id) => {
    let updated;
    if (starred.includes(id)) {
      updated = starred.filter((i) => i !== id);
    } else {
      updated = ([...starred, id]);
    }
    setStarred(updated);
    localStorage.setItem('starredEmails',JSON.stringify(updated))
  };



  return (
    <div className="p-4 relative">
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
      <div className="flex flex-col lg:flex-row items-start gap-8 w-full h-full rounded-lg">
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
        <div className="flex-1 ml-5 bg-white rounded-xl shadow p-4 flex flex-col relative">
          <Outlet context={{ emails, starred, toggleStar,  searchTerm }} />
        </div>
      </div>

      {/* Floating Compose Button */}
      <button
        onClick={() => setOpenCompose(true)}
        className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 shadow-lg rounded-full hover:bg-green-700"
      >
        Compose
      </button>

      {/* Compose Modal */}
      <ComposeModal open={openCompose} onClose={() => setOpenCompose(false)} />
    </div>
  );
};

export default SupportLayout;







// hover with delete icon 
// import React, { useState } from "react";
// import { FiSearch } from "react-icons/fi";
// import { AiOutlineStar } from "react-icons/ai";
// import { MdOutlineDrafts } from "react-icons/md";
// import { RiDraftLine } from "react-icons/ri";
// import { VscSend } from "react-icons/vsc";
// import { Outlet, NavLink, useNavigate } from "react-router-dom";
// import ComposeModal from "../ComposeModal";

// const dummyEmails = Array.from({ length: 15 }).map((_, i) => ({
//   id: i + 1,
//   name: `Nelson Lane ${i + 1}`,
//   email: `shariful${i + 1}@gmail.com`,
//   subject: `subject ${i + 1}`,
//   message: "Lorem ipsum perspiciatis unde omnis iste natus",
//   time: "12:30 PM",
// }));

// const SupportLayout = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [openCompose, setOpenCompose] = useState(false);

//   // ❗ Only state — no localStorage
//   const [emails, setEmails] = useState(dummyEmails);

//   const [starred, setStarred] = useState([]);

//   // ⭐ star toggle
//   const toggleStar = (id) => {
//     let updated;
//     if (starred.includes(id)) {
//       updated = starred.filter((i) => i !== id);
//     } else {
//       updated = [...starred, id];
//     }

//     setStarred(updated);
//   };

//   // 🗑 delete (only remove temporarily)
//   const deleteEmail = (id) => {
//     const updated = emails.filter((e) => e.id !== id);
//     setEmails(updated);
//   };

//   return (
//     <div className="px-4 relative">
//       <div className="w-full flex justify-start">
//         <div className="relative my-4">
//           <FiSearch className="absolute left-3 top-4 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search here ..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-[560px] pl-10 pr-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//           />
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row items-start gap-8 w-full rounded-lg">
//         <div className="w-1/3 max-w-xs bg-white shadow rounded-xl p-4">

//           <div
//             className="border border-gray-200 rounded-lg px-3 py-2 mb-4 flex items-center justify-between cursor-pointer"
//             onClick={() => navigate("/support/inbox")}
//           >
//             <div className="flex items-center space-x-2">
//               <MdOutlineDrafts size={22} className="text-gray-400" />
//               <span className="font-medium text-gray-700">Inbox</span>
//             </div>
//             <span className="text-xs">{emails.length}</span>
//           </div>

//           <NavLink
//             to="/support/starred"
//             className={({ isActive }) =>
//               `flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 ${
//                 isActive ? "bg-gray-100" : ""
//               }`
//             }
//           >
//             <AiOutlineStar size={22} className="text-gray-400" />
//             <h1>Starred</h1>
//           </NavLink>

//           <NavLink
//             to="/support/drafts"
//             className={({ isActive }) =>
//               `flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 ${
//                 isActive ? "bg-gray-100" : ""
//               }`
//             }
//           >
//             <RiDraftLine size={22} className="text-gray-400" />
//             <h1>Draft</h1>
//           </NavLink>

//           <NavLink
//             to="/support/sent"
//             className={({ isActive }) =>
//               `flex gap-x-2 items-center border border-gray-200 rounded-lg px-3 py-2 mb-4 ${
//                 isActive ? "bg-gray-100" : ""
//               }`
//             }
//           >
//             <VscSend size={22} className="text-gray-400" />
//             <h1>Sent</h1>
//           </NavLink>
//         </div>

//         <div className="flex-1 ml-5 bg-white rounded-xl shadow p-4">
//           <Outlet
//             context={{
//               emails,
//               setEmails,
//               starred,
//               toggleStar,
//               deleteEmail,
//               searchTerm,
//             }}
//           />
//         </div>
//       </div>

//       <button
//         onClick={() => setOpenCompose(true)}
//         className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 shadow-lg rounded-full hover:bg-green-700"
//       >
//         Compose
//       </button>

//       <ComposeModal open={openCompose} onClose={() => setOpenCompose(false)} />
//     </div>
//   );
// };

// export default SupportLayout;

