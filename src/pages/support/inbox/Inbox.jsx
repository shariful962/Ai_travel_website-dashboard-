import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import EmailView from "../email view/EmailView";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Pagination from "../../../common/Pagination";

const Inbox = () => {
  const { emails, starred, toggleStar, searchTerm } = useOutletContext();
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [page, setPage] = useState(1);

  const perPage = 10;

  // Filter emails based on search
  const filteredEmails = emails.filter(
    (email) =>
      email.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate current page emails
  const start = (page - 1) * perPage;
  const currentEmails = filteredEmails.slice(start, start + perPage);

  return (
    <>
      <div className="flex-1 overflow-y-auto">
        {currentEmails.map((email) => (
          <div
            key={email.id}
            onClick={() => setSelectedEmail(email)}
            className="flex items-center border-b last:border-none border-gray-200 py-3 hover:bg-gray-50 rounded cursor-pointer"
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
      <Pagination
        currentPage={page}
        totalItems={filteredEmails.length}
        itemsPerPage={perPage}
        onPageChange={setPage}
      />

      <div className="mt-4 border-t pt-4">
        <EmailView email={selectedEmail} />
      </div>
    </>
  );
};

export default Inbox;






// hover with delete icon 
// import React, { useState } from "react";
// import { useOutletContext } from "react-router-dom";
// import EmailView from "../email view/EmailView";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { RiDeleteBin6Line } from "react-icons/ri";
// import Pagination from "../../../common/Pagination";

// const Inbox = () => {
//   const { emails, starred, toggleStar, deleteEmail, searchTerm } =
//     useOutletContext();
//   const [selectedEmail, setSelectedEmail] = useState(null);
//   const [page, setPage] = useState(1);

//   const perPage = 10;

//   const filteredEmails = emails.filter(
//     (email) =>
//       email.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       email.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const start = (page - 1) * perPage;
//   const currentEmails = filteredEmails.slice(start, start + perPage);

//   return (
//     <>
//       <div className="flex-1 overflow-y-auto">
//         {currentEmails.map((email) => (
//           <div
//             key={email.id}
//             onClick={() => setSelectedEmail(email)}
//             className="relative flex items-center border-b border-gray-200 py-3 
//                        hover:bg-gray-50 cursor-pointer group"
//           >
//             {/* Star */}
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

//             {/* DELETE ICON */}
//             <div
//               onClick={(e) => {
//                 e.stopPropagation();
//                 deleteEmail(email.id);
//               }}
//               className="absolute right-20 text-red-500 text-lg opacity-0 
//                          group-hover:opacity-100 transition cursor-pointer"
//             >
//               <RiDeleteBin6Line />
//             </div>
//           </div>
//         ))}
//       </div>

//       <Pagination
//         currentPage={page}
//         totalItems={filteredEmails.length}
//         itemsPerPage={perPage}
//         onPageChange={setPage}
//       />

//       <div className="mt-4 border-t pt-4">
//         <EmailView email={selectedEmail} />
//       </div>
//     </>
//   );
// };

// export default Inbox;

