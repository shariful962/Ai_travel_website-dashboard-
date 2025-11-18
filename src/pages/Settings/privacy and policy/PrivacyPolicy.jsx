// import React from 'react'

// const PrivacyPolicy = () => {
//   return (
//     <div>
//       THis is privaccy policy page 
//     </div>
//   )
// }

// export default PrivacyPolicy

import { h1 } from "framer-motion/client";
import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useNavigate } from "react-router";

const PrivacyPolicy = () => {
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
          <h2 className="text-2xl text-[#1F1D1D] font-medium">{isEditing ? (<h1>Edit Privacy Policy</h1>): (<h1>Privacy Policy</h1>)}</h2>
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

export default PrivacyPolicy;



