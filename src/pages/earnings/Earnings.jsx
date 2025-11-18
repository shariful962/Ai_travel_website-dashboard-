// import React, { useState } from "react";
// import Label from "../../common/Label";
// import { users } from "./data";
// import { LuEye } from "react-icons/lu";
// import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";

// const Earnings = () => {
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

//   return (
//     <div className="px-4">
//       <div>
//         <Label />
//       </div>
//       <div className="shadow-custom my-6 rounded-[10px] py-2 bg-white">
//         <h1 className="text-xl font-medium text-textClr p-4">
//           Recent transaction{" "}
//         </h1>
//         <div className="overflow-x-auto px-4 ">
//           <table className="w-[100%] bg-white text-left ">
//             <thead className="bg-Primary text-white">
//               <tr>
//                 <th className="px-4 py-3">#Tr.Id</th>
//                 <th className="hidden md:table-cell px-4 py-3">Username</th>
//                 <th className="hidden md:table-cell px-4 py-3">Amount</th>
//                 <th className="px-4 py-3">Date</th>
//                 <th className="px-4 py-3">Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {paginatedUsers.length > 0 ? (
//                 paginatedUsers.map((user) => (
//                   <tr key={user.id}>
//                     <td className="px-4 py-3">{user.trId}</td>
//                     <td className="hidden md:table-cell px-4 py-3">
//                       {user.username}
//                     </td>
//                     <td className="hidden md:table-cell px-4 py-3">
//                       ${user.amount}
//                     </td>
//                     <td className="px-4 py-3">{user.date}</td>
//                     <td className="px-4 py-3">
//                       <LuEye
//                         size={20}
//                         className="text-Primary cursor-pointer"
//                       />
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="text-center py-4">
//                     No transactions found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       {/* Pagination Footer */}
//       {totalPages > 1 && (
//         <div className="mt-4 flex items-center justify-between px-4 pb-4">
//           {/* Left: showing X–Y of Z */}
//           <div className="hidden md:block text-lg text-Secondary">
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
//     </div>
//   );
// };

// export default Earnings;

import React, { useState } from "react";
import Label from "../../common/Label";
import { users } from "./data";
import { LuEye } from "react-icons/lu";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TransactionModal from "./TransactionModal";

const Earnings = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const perUsersPage = 5;

  //pagination
  const totalPages = Math.ceil(users.length / perUsersPage);
  const startIndex = (currentPage - 1) * perUsersPage;
  const endIndex = startIndex + perUsersPage;
  const paginatedUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleViewUser = (user) => {
    setUserDetails(user);
  };

  const closeModal = () => {
    setUserDetails(null);
  };

  return (
    <div className="px-4">
      <div className="mt-4">
        <Label />
      </div>
      <div className="shadow-custom my-6 rounded-[10px] py-2 bg-white">
        <h1 className="text-xl font-medium text-textClr p-4">
          Recent transaction{" "}
        </h1>
        <div className="overflow-x-auto px-4 ">
          <table className="w-[100%] bg-white text-left ">
            <thead className="bg-Primary text-white">
              <tr>
                <th className="px-4 py-3">#Tr.Id</th>
                <th className="hidden md:table-cell px-4 py-3">Username</th>
                <th className="hidden md:table-cell px-4 py-3">Amount</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-4 py-3">{user.trId}</td>
                    <td className="hidden md:table-cell px-4 py-3">
                      {user.username}
                    </td>
                    <td className="hidden md:table-cell px-4 py-3">
                      ${user.amount}
                    </td>
                    <td className="px-4 py-3">{user.date}</td>
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
                  <td colSpan="5" className="text-center py-4">
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-between px-4 pb-4">
          {/* Left: showing X–Y of Z */}
          <div className="hidden md:block text-lg text-Secondary">
            SHOWING {startIndex + 1}–{Math.min(endIndex, users.length)} OF{" "}
            {users.length}
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
                  color: "#727272", // text color
                },
                "& .Mui-selected": {
                  backgroundColor: "#1C5941 !important", // active page bg
                  color: "white", // active page text
                },
              }}
            />
          </Stack>
        </div>
      )}

      {/*  Transaction Modal */}
      <TransactionModal
        isOpen={!!userDetails}
        onClose={closeModal}
        transaction={userDetails}
      />
    </div>
  );
};

export default Earnings;
