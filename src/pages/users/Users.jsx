// import React, { useState } from "react";
// import Label from "../../common/Label";
// import { users } from "./data";
// import { LuEye } from "react-icons/lu";
// import { FaSearch } from "react-icons/fa";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
// import UserModal from "./UserModal";

// const Users = () => {
//   const [date, setDate] = useState("");
//   const [username, setUsername] = useState("");
//   const [userDetails, setUserDetails] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const perUsersPage = 5;

//   //pagination
//   const totalPages = Math.ceil(users.length / perUsersPage);
//   const startIndex = (currentPage - 1) * perUsersPage;
//   const endIndex = startIndex + perUsersPage;
//   const paginatedUsers = users.slice(startIndex, endIndex);

//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//   };

//   const handleViewUser = (user) => {
//     setUserDetails(user);
//   };

//   const closeModal = () => {
//     setUserDetails(null);
//   };

//   const handleSearch = () => {
//     console.log("Searching for:", { date, username });
//   };

//   return (
//     <div className="px-4">
//       <div>
//         <Label />
//       </div>
//       <div className="shadow-custom my-6 rounded-[10px] py-2 bg-white">
//         <div className="flex flex-col lg:flex-row justify-between lg:items-center  px-4 py-3 ">
//           {/* Left: Title */}
//           <h2 className="text-gray-800 font-semibold text-lg">User List</h2>

//           {/* Right: Filters */}
//           <div className="flex flex-wrap items-center gap-2">
//             {/* Date Picker */}
//             <input
//               type="date"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//               className="border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-Primary"
//             />

//             {/* Username Search */}
//             <input
//               type="text"
//               placeholder="User Name"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-Primary"
//             />

//             {/* Search Button */}
//             <button
//               onClick={handleSearch}
//               className="bg-green-800 text-white rounded-full p-2 hover:bg-green-700 transition"
//             >
//               <FaSearch size={14} />
//             </button>
//           </div>
//         </div>
//         <div className="overflow-x-auto px-4 ">
//           <table className="w-[100%] bg-white text-left ">
//             <thead className="bg-Primary text-white">
//               <tr>
//                 <th className="px-4 py-3">#SI</th>
//                 <th className="hidden md:table-cell px-4 py-3">Username</th>
//                 <th className="hidden md:table-cell px-4 py-3">Email</th>
//                 <th className="hidden lg:table-cell px-4 py-3">Number</th>
//                 <th className="md:hidden  lg:table-cell px-4 py-3">Date</th>
//                 <th className="px-4 py-3">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedUsers.length > 0 ? (
//                 paginatedUsers.map((user) => (
//                   <tr key={user.id}>
//                     <td className="px-4 py-3">{user.id}</td>
//                     <td className="hidden md:table-cell px-4 py-3">
//                       {user.username}
//                     </td>
//                     <td className="hidden md:table-cell px-4 py-3">
//                       {user.email}
//                     </td>
//                     <td className="hidden lg:table-cell px-4 py-3">
//                       {user.phone}
//                     </td>
//                     <td className="md:hidden lg:table-cell px-4 py-3">{user.date}</td>
//                     <td className="px-4 py-3">
//                       <LuEye
//                         size={20}
//                         className="text-Primary cursor-pointer"
//                         onClick={() => handleViewUser(user)}
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="6" className="text-center py-4">
//                     No Users found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Pagination Footer */}
//       {totalPages > 1 && (
//         <div className="mt-4 flex items-center md:justify-center lg:justify-between px-4 pb-4">
//           {/* Left: showing X–Y of Z */}
//           <div className="hidden lg:block text-lg text-Secondary">
//             SHOWING {startIndex + 1}–{Math.min(endIndex, users.length)} OF{" "}
//             {users.length}
//           </div>

//           {/* Right: MUI Pagination */}
//           <Stack spacing={2}>
//             <Pagination
//               count={totalPages}
//               page={currentPage}
//               onChange={handlePageChange}
//               shape="rounded"
//               siblingCount={0}
//               boundaryCount={1}
//               sx={{
//                 "& .MuiPaginationItem-root": {
//                   color: "#727272", // text color
//                 },
//                 "& .Mui-selected": {
//                   backgroundColor: "#1C5941 !important", // active page bg
//                   color: "white", // active page text
//                 },
//               }}
//             />
//           </Stack>
//         </div>
//       )}

//       {/*  Transaction Modal */}
//       <UserModal
//         isOpen={!!userDetails}
//         onClose={closeModal}
//         userDetails={userDetails}
//       />
//     </div>
//   );
// };

// export default Users;

import React, { useState } from "react";
import Label from "../../common/Label";
import { users } from "./data";
import { LuEye } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import UserModal from "./UserModal";

const Users = () => {
  const [date, setDate] = useState("");
  const [username, setUsername] = useState("");
  const [userDetails, setUserDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);

  const perUsersPage = 5;

  // pagination
  const totalPages = Math.ceil(filteredUsers.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleViewUser = (user) => {
    setUserDetails(user);
  };

  const closeModal = () => {
    setUserDetails(null);
  };

  //  Search function
  const handleSearch = () => {
    const filtered = users.filter((user) => {
      const matchDate = date ? user.date === formatDate(date) : true;
      const matchUsername = username
        ? user.username.toLowerCase().includes(username.toLowerCase())
        : true;
      return matchDate && matchUsername;
    });
    setFilteredUsers(filtered);
    setCurrentPage(1);
  };

  // format date (input yyyy-mm-dd → dataset format like "ui/ux")
  const formatDate = (isoDate) => {
    const d = new Date(isoDate);
    const day = d.getDate();
    const month = d.toLocaleString("en-US", { month: "short" });
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div className="px-4">
      <div className="mt-4">
        <Label />
      </div>
      <div className="shadow-custom my-6 rounded-[10px] py-2 bg-white">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center px-4 py-3 ">
          {/* Left: Title */}
          <h2 className="text-gray-800 font-semibold text-lg">User List</h2>

          {/* Right: Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Date Picker */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-Primary"
            />

            {/* Username Search */}
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border border-gray-300 rounded-full px-3 py-2 text-sm focus:outline-Primary"
            />

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-green-800 text-white rounded-full p-2 hover:bg-green-700 transition"
            >
              <FaSearch size={14} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto px-4 ">
          <table className="w-[100%] bg-white text-left ">
            <thead className="bg-Primary text-white">
              <tr>
                <th className="px-4 py-3">#SI</th>
                <th className="hidden md:table-cell px-4 py-3">Username</th>
                <th className="hidden md:table-cell px-4 py-3">Email</th>
                <th className="hidden lg:table-cell px-4 py-3">Number</th>
                <th className="md:hidden lg:table-cell px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-3">{user.id}</td>
                    <td className="hidden md:table-cell px-4 py-3">
                      {user.username}
                    </td>
                    <td className="hidden md:table-cell px-4 py-3">
                      {user.email}
                    </td>
                    <td className="hidden lg:table-cell px-4 py-3">
                      {user.phone}
                    </td>
                    <td className="md:hidden lg:table-cell px-4 py-3">
                      {user.date}
                    </td>
                    <td className="px-4 py-3">
                      <LuEye
                        size={20}
                        className="text-Primary cursor-pointer"
                        onClick={() => handleViewUser(user)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-4">
                    No Users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center md:justify-center lg:justify-between px-4 pb-4">
          {/* Left: showing X–Y of Z */}
          <div className="hidden lg:block text-lg text-Secondary">
            SHOWING {startIndex + 1}–{Math.min(endIndex, filteredUsers.length)}{" "}
            OF {filteredUsers.length}
          </div>

          {/* Right: MUI Pagination */}
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              shape="rounded"
              siblingCount={0}
              boundaryCount={1}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#727272",
                },
                "& .Mui-selected": {
                  backgroundColor: "#1C5941 !important",
                  color: "white",
                },
              }}
            />
          </Stack>
        </div>
      )}

      {/* User Modal */}
      <UserModal
        isOpen={!!userDetails}
        onClose={closeModal}
        userDetails={userDetails}
      />
    </div>
  );
};

export default Users;
