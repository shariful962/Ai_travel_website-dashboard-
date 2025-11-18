
// import React, { useState } from "react";
// import ReactQuill from "react-quill-new";
// import "react-quill-new/dist/quill.snow.css";

// const TermsConditions = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [content, setContent] = useState(`
//     <p>Lorem ipsum dolor sit amet consectetur...</p>
//   `);

//   const handleEdit = () => setIsEditing(true);
//   const handleSave = () => {
//     setIsEditing(false);
//     console.log("Updated content:", content);
//   };

//   // Full-featured toolbar
//   const modules = {
//     toolbar: [
//       [{ font: [] }], // font family
//       [{ header: [1, 2, 3, 4, 5, 6, false] }], // headers
//       [{ size: ["small", false, "large", "huge"] }], // font size
//       ["bold", "italic", "underline", "strike"], // text styles
//       [{ color: [] }, { background: [] }], // color & background
//       [{ align: [] }], // alignment
//       [{ list: "ordered" }, { list: "bullet" }], // lists
//       ["link", "image", "blockquote", "code-block"], // links, images, blocks
//       ["clean"], // remove formatting
//     ],
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-lg">
//       <h1 className="text-2xl font-semibold text-center mb-4">
//         Terms & Conditions
//       </h1>

//       {isEditing ? (
//         <div>
//           <ReactQuill
//             value={content}
//             onChange={setContent}
//             modules={modules} // full toolbar
//           />
//           <button
//             onClick={handleSave}
//             className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300 mt-4"
//           >
//             Update
//           </button>
//         </div>
//       ) : (
//         <div>
//           <div
//             className="text-base text-gray-700 leading-relaxed mb-4"
//             dangerouslySetInnerHTML={{ __html: content }}
//           />
//           <button
//             onClick={handleEdit}
//             className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
//           >
//             Edit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TermsConditions;


import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router";

const TermsConditions = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(`
    <p>Lorem ipsum dolor sit amet consectetur...</p>
  `);
  const navigate = useNavigate()
  


  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setIsEditing(false);
    console.log("Updated content:", content);
  };

  // Minimal toolbar like your screenshot
  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }], // add font sizes
      ["bold", "italic", "underline", "strike"], // text styles
      [{ align: [] }], // alignment
      [{ list: "ordered" }, { list: "bullet" }], // lists
      [{ color: [] }, { background: [] }],
      ["link"], // link
      ["image"]
      
    ],
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-custome rounded-lg">
      <div className="flex items-center mb-4">
          <IoArrowBack className="text-xl mr-2 cursor-pointer" onClick={()=>navigate('/settings')} />
          <h2 className="text-2xl text-[#1F1D1D] font-medium">Terms & Conditions</h2>
        </div>

      {isEditing ? (
        <div>
          <ReactQuill
            value={content}
            onChange={setContent}
            modules={modules}
          />
          <button
            onClick={handleSave}
            className="bg-Primary text-white py-2 px-6 rounded-lg  cursor-pointer mt-4"
          >
            Update
          </button>
        </div>
      ) : (
        <div>
          <div
            className="text-base text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <button
            onClick={handleEdit}
            className="bg-Primary text-white py-2 px-6 rounded-lg  cursor-pointer mt-4"
          >
            Edit
          </button>
       
        </div>
      )}
    </div>
  );
};

export default TermsConditions;


