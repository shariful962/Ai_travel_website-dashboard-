// import React from "react";

// const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   if (totalPages <= 1) return null; // 1 পেজ হলে pagination দেখাবে না

//   const handlePrev = () => {
//     if (currentPage > 1) onPageChange(currentPage - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) onPageChange(currentPage + 1);
//   };

//   return (
//     <div className="flex justify-between items-center mt-4">
//       <button
//         onClick={handlePrev}
//         disabled={currentPage === 1}
//         className="px-3 py-1 border rounded disabled:opacity-40"
//       >
//         Prev
//       </button>

//       <span className="text-sm">
//         Page {currentPage} of {totalPages}
//       </span>

//       <button
//         onClick={handleNext}
//         disabled={currentPage === totalPages}
//         className="px-3 py-1 border rounded disabled:opacity-40"
//       >
//         Next
//       </button>
//     </div>
//   );
// };



// export default Pagination;




import React from "react";

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 10 টার বেশি email হলে show, অন্যথা hide
  if (totalItems <= 10) return null;

  if (totalPages <= 1) return null; // একাধিক পেজ না থাকলে hide

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Prev
      </button>

      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
