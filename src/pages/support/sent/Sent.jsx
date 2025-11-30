// import React from "react";
// import { useOutletContext } from "react-router-dom";
// import EmailView from "../email view/EmailView";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";

// const Sent = () => {
//   const { emails, starred, toggleStar, searchTerm } = useOutletContext();
//   const [selectedEmail, setSelectedEmail] = React.useState(null);

//   const filteredEmails = emails
//     .filter((email) => starred.includes(email.id))
//     .filter((email) => email.name.toLowerCase().includes(searchTerm.toLowerCase()));

//   return (
//     <>
//       <div className="flex-1 overflow-y-auto">
//         {filteredEmails.map((email) => (
//           <div
//             key={email.id}
//             onClick={() => setSelectedEmail(email)}
//             className="flex items-center border-b last:border-none border-gray-200 py-3 hover:bg-gray-50 rounded cursor-pointer"
//           >
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 toggleStar(email.id);
//               }}
//               className="mr-4 text-xl cursor-pointer"
//             >
//               {starred.includes(email.id) ? (
//                 <AiFillStar className="text-yellow-500" />
//               ) : (
//                 <AiOutlineStar className="text-gray-400" />
//               )}
//             </div>

//             <div className="w-40 font-medium text-gray-800">{email.name}</div>
//             <div className="flex-1 text-gray-600 text-sm">{email.subject}</div>
//             <div className="w-24 text-right text-gray-500 text-sm">{email.time}</div>
//           </div>
//         ))}
//       </div>

//       <div className="mt-4 border-t pt-4">
//         <EmailView email={selectedEmail} />
//       </div>
//     </>
//   );
// };

// export default Sent;



// with pagination logic 

import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import EmailView from "../email view/EmailView";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Sent = () => {
  const { emails, starred, toggleStar, searchTerm } = useOutletContext();
  const [selectedEmail, setSelectedEmail] = useState(null);

  const filteredEmails = emails
    .filter((email) => starred.includes(email.id))
    .filter((email) =>
      email.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredEmails.length / itemsPerPage);

  const currentEmails = filteredEmails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () =>
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () =>
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));

  return (
    <>
      <div className="flex-1 overflow-y-auto">
        {currentEmails.map((email) => (
          <div
            key={email.id}
            onClick={() => setSelectedEmail(email)}
            className="flex items-center border-b border-gray-200 py-3 hover:bg-gray-50 cursor-pointer"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                toggleStar(email.id);
              }}
              className="mr-4 text-xl cursor-pointer"
            >
              {starred.includes(email.id) ? (
                <AiFillStar className="text-yellow-500" />
              ) : (
                <AiOutlineStar className="text-gray-400" />
              )}
            </div>

            <div className="w-40 font-medium text-gray-800">{email.name}</div>
            <div className="flex-1 text-gray-600 text-sm">{email.subject}</div>
            <div className="w-24 text-right text-gray-500 text-sm">
              {email.time}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Prev
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-40"
        >
          Next
        </button>
      </div>

      <div className="mt-4 border-t pt-4">
        <EmailView email={selectedEmail} />
      </div>
    </>
  );
};

export default Sent;
