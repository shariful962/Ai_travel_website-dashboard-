
// with pagination logic 

// import React, { useState } from "react";
// import { useOutletContext } from "react-router-dom";
// import EmailView from "../email view/EmailView";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import Pagination from "../../../common/Pagination";

// const Draft = () => {
//   const { emails, starred, toggleStar, searchTerm } = useOutletContext();
//   const [selectedEmail, setSelectedEmail] = useState(null);

//   // FILTERS
//   const filteredEmails = emails
//     .filter((email) => starred.includes(email.id))
//     .filter((email) =>
//       email.name.toLowerCase().includes(searchTerm.toLowerCase()) || email.email.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   // PAGINATION
//    const [currentPage, setCurrentPage] = useState(1);
//    const itemsPerPage = 10;
//    const totalItems = filteredEmails.length;
   
 
//    const currentEmails = filteredEmails.slice(
//      (currentPage - 1) * itemsPerPage,
//      currentPage * itemsPerPage
//    );
 
//    const handlePageChange = (newPage) => {
//      setCurrentPage(newPage);
//    };
 
//   return (
//     <>
//       <div className="flex-1 overflow-y-auto">
//         {currentEmails.map((email) => (
//           <div
//             key={email.id}
//             onClick={() => setSelectedEmail(email)}
//             className="flex items-center border-b border-gray-200 py-3 hover:bg-gray-50 cursor-pointer"
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
//             <div className="w-24 text-right text-gray-500 text-sm">
//               {email.time}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* PAGINATION */}
//       <Pagination
//         currentPage={currentPage}
//         totalItems={totalItems}
//         itemsPerPage={itemsPerPage}
//         onPageChange={handlePageChange}
//       />

//       <div className="mt-4 border-t pt-4">
//         <EmailView email={selectedEmail} />
//       </div>
//     </>
//   );
// };

// export default Draft;



// local storage logic 


// import React, { useState, useEffect } from "react";
// import EmailView from "../email view/EmailView";
// import Pagination from "../../../common/Pagination";

// const Draft = () => {
//   const [drafts, setDrafts] = useState([]);
//   const [selectedEmail, setSelectedEmail] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // LOAD DRAFTS FROM LOCAL STORAGE
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem("drafts")) || [];
//     setDrafts(stored);
//   }, []);

//   // FILTER
//   const filteredDrafts = drafts.filter((email) =>
//     email.subject.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // PAGINATION
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;
//   const totalItems = filteredDrafts.length;

//   const currentDrafts = filteredDrafts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <>
//       <div className="flex-1 overflow-y-auto">
//         {currentDrafts.map((email) => (
//           <div
//             key={email.id}
//             onClick={() => setSelectedEmail(email)}
//             className="flex items-center border-b border-gray-200 py-3 hover:bg-gray-50 cursor-pointer"
//           >
//             <div className="w-40 font-medium text-gray-800">{email.email}</div>
//             <div className="flex-1 text-gray-600 text-sm">{email.subject}</div>
//             <div className="w-24 text-right text-gray-500 text-sm">
//               {email.time}
//             </div>
//           </div>
//         ))}
//       </div>

//       <Pagination
//         currentPage={currentPage}
//         totalItems={totalItems}
//         itemsPerPage={itemsPerPage}
//         onPageChange={handlePageChange}
//       />

//       <div className="mt-4 border-t pt-4">
//         <EmailView email={selectedEmail} />
//       </div>
//     </>
//   );
// };

// export default Draft;



import React, { useState, useEffect } from "react";
import EmailView from "../email view/EmailView";
import Pagination from "../../../common/Pagination";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ComposeModal from "../ComposeModal";

const Draft = () => {
  const [emails, setEmails] = useState(
    JSON.parse(localStorage.getItem("emails")) || []
  );

  const [starred, setStarred] = useState(
    JSON.parse(localStorage.getItem("starred")) || []
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const drafts = emails.filter((email) => email.folder === "draft");

  const filteredEmails = drafts.filter(
    (email) =>
      email.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (email.email && email.email.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const currentEmails = filteredEmails.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const toggleStar = (id) => {
    let updated;
    if (starred.includes(id)) {
      updated = starred.filter((x) => x !== id);
    } else {
      updated = [...starred, id];
    }
    setStarred(updated);
    localStorage.setItem("starred", JSON.stringify(updated));
  };

  return (
    <>
      {/* Compose Modal */}
      <ComposeModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        emails={emails}
        setEmails={setEmails}
        starred={starred}
        setStarred={setStarred}
      />

      {/* Email list */}
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
            <div className="w-24 text-right text-gray-500 text-sm">{email.time}</div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalItems={filteredEmails.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />

      {/* Email View */}
      <div className="mt-4 border-t pt-4">
        <EmailView email={selectedEmail} />
      </div>
    </>
  );
};

export default Draft;


