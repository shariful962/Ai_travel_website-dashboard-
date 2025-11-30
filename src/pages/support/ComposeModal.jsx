// import React, { useState, useRef, useEffect } from "react";
// import { IoClose, IoRemove } from "react-icons/io5";
// import { FiPaperclip } from "react-icons/fi";
// import {
//   AiOutlineBold,
//   AiOutlineItalic,
//   AiOutlineUnderline,
// } from "react-icons/ai";

// const ComposeModal = ({ open, onClose }) => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [files, setFiles] = useState([]);
//   const [isBold, setIsBold] = useState(false);
//   const [isItalic, setIsItalic] = useState(false);
//   const [isUnderline, setIsUnderline] = useState(false);
//   const fileInputRef = useRef(null);
//   const editorRef = useRef(null);

//   // Focus editor when modal opens
//   useEffect(() => {
//     if (open && editorRef.current) {
//       editorRef.current.focus();
//     }
//   }, [open]);

//   // Update button active states based on cursor position
//   const updateActiveStates = () => {
//     setIsBold(document.queryCommandState("bold"));
//     setIsItalic(document.queryCommandState("italic"));
//     setIsUnderline(document.queryCommandState("underline"));
//   };

//   // Handle formatting
//   const formatText = (command) => {
//     document.execCommand(command, false, null);
//     editorRef.current.focus();
//     updateActiveStates();
//   };

//   if (!open) return null;

//   const handleFileChange = (e) => {
//     setFiles([...files, ...Array.from(e.target.files)]);
//   };

//   const handleSend = () => {
//     console.log("button click");
//   };

//   return (
//     <div className="fixed inset-0 z-[999]">
//       {collapsed && (
//         <div
//           className="absolute bottom-4 right-4 w-[250px] bg-white shadow-lg border rounded-lg flex justify-between items-center px-3 py-2 cursor-pointer"
//           onClick={() => setCollapsed(false)}
//         >
//           <span className="text-sm font-medium">New Message</span>
//           <IoClose
//             className="cursor-pointer text-gray-600 hover:text-red-600"
//             onClick={(e) => {
//               e.stopPropagation();
//               onClose();
//             }}
//           />
//         </div>
//       )}

//       {!collapsed && (
//         <div className="absolute bottom-4 right-4 w-[420px] bg-white rounded-t-lg shadow-2xl border">
//           {/* HEADER */}
//           <div className="flex justify-between items-center px-3 py-2 bg-gray-100 rounded-t-lg border-b">
//             <h3 className="text-sm font-medium">New Message</h3>
//             <div className="flex items-center gap-2">
//               <IoRemove
//                 className="cursor-pointer text-gray-600 hover:text-black"
//                 onClick={() => setCollapsed(true)}
//               />
//               <IoClose
//                 className="cursor-pointer text-gray-600 hover:text-red-600"
//                 onClick={onClose}
//               />
//             </div>
//           </div>

//           {/* BODY */}
//           <div className="px-3 py-2 space-y-2 text-sm">
//             <input
//               type="text"
//               placeholder="To"
//               className="w-full border-b pb-1 outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               className="w-full border-b pb-1 outline-none"
//             />

//             {/* Editable area */}
//             <div
//               ref={editorRef}
//               contentEditable
//               suppressContentEditableWarning
//               className="w-full resize-none outline-none pt-2 min-h-[140px] border p-1 rounded"
//               onKeyUp={updateActiveStates}
//               onMouseUp={updateActiveStates}
//             ></div>

//             {/* Attachments */}
//             {files.length > 0 && (
//               <div className="border p-2 rounded bg-gray-50 text-xs space-y-1">
//                 <p className="font-medium">Attachments:</p>
//                 {files.map((file, i) => (
//                   <div key={i} className="flex justify-between text-gray-700">
//                     <span>{file.name}</span>
//                     <span>{(file.size / 1024).toFixed(1)} KB</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* FOOTER */}
//           <div className="flex justify-between items-center px-3 py-2 border-t bg-gray-50">
//             <button
//               onClick={() => {
//                 handleSend();
//                 onClose();
//               }}
//               className="bg-green-600 text-white px-5 py-1 rounded-md hover:bg-green-700"
//             >
//               Send
//             </button>

//             <div className="flex items-center gap-3 text-gray-600 text-lg">
//               <label>
//                 <FiPaperclip
//                   className="cursor-pointer hover:text-black"
//                   onClick={() => fileInputRef.current.click()}
//                 />
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   className="hidden"
//                   multiple
//                   onChange={handleFileChange}
//                 />
//               </label>

//               {/* Bold */}
//               <AiOutlineBold
//                 className={`cursor-pointer hover:text-black ${
//                   isBold ? "text-green-600" : ""
//                 }`}
//                 onMouseDown={(e) => {
//                   e.preventDefault();
//                   formatText("bold");
//                 }}
//               />
//               {/* Italic */}
//               <AiOutlineItalic
//                 className={`cursor-pointer hover:text-black ${
//                   isItalic ? "text-green-600" : ""
//                 }`}
//                 onMouseDown={(e) => {
//                   e.preventDefault();
//                   formatText("italic");
//                 }}
//               />
//               {/* Underline */}
//               <AiOutlineUnderline
//                 className={`cursor-pointer hover:text-black ${
//                   isUnderline ? "text-green-600" : ""
//                 }`}
//                 onMouseDown={(e) => {
//                   e.preventDefault();
//                   formatText("underline");
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ComposeModal;


import React, { useState, useRef, useEffect } from "react";
import { IoClose, IoRemove } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import { AiOutlineBold, AiOutlineItalic, AiOutlineUnderline } from "react-icons/ai";

const ComposeModal = ({
  open,
  onClose,
  emails = [],
  setEmails = () => {},
  starred = [],
  setStarred = () => {},
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [files, setFiles] = useState([]);

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);

  const fileInputRef = useRef(null);
  const editorRef = useRef(null);

  useEffect(() => {
    if (open && editorRef.current) {
      editorRef.current.focus();
    }
  }, [open]);

  const updateActiveStates = () => {
    setIsBold(document.queryCommandState("bold"));
    setIsItalic(document.queryCommandState("italic"));
    setIsUnderline(document.queryCommandState("underline"));
  };

  const formatText = (command) => {
    document.execCommand(command, false, null);
    editorRef.current.focus();
    updateActiveStates();
  };

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const saveDraft = () => {
    if (!to && !subject && !body) return;

    const newDraft = {
      id: Date.now(),
      name: "Me",
      email: to,
      subject: subject || "(No Subject)",
      body: body,
      attachments: files,
      time: new Date().toLocaleTimeString(),
      folder: "draft",
    };

    const updatedEmails = [newDraft, ...emails];
    setEmails(updatedEmails);
    localStorage.setItem("emails", JSON.stringify(updatedEmails));
  };

  const handleClose = () => {
    saveDraft();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999]">
      {collapsed && (
        <div
          className="absolute bottom-4 right-4 w-[250px] bg-white shadow-lg border rounded-lg flex justify-between items-center px-3 py-2 cursor-pointer"
          onClick={() => setCollapsed(false)}
        >
          <span className="text-sm font-medium">New Message</span>
          <IoClose
            className="cursor-pointer text-gray-600 hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          />
        </div>
      )}

      {!collapsed && (
        <div className="absolute bottom-4 right-4 w-[420px] bg-white rounded-t-lg shadow-2xl border">
          {/* Header */}
          <div className="flex justify-between items-center px-3 py-2 bg-gray-100 rounded-t-lg border-b">
            <h3 className="text-sm font-medium">New Message</h3>
            <div className="flex items-center gap-2">
              <IoRemove
                className="cursor-pointer text-gray-600 hover:text-black"
                onClick={() => setCollapsed(true)}
              />
              <IoClose
                className="cursor-pointer text-gray-600 hover:text-red-600"
                onClick={handleClose}
              />
            </div>
          </div>

          {/* Body */}
          <div className="px-3 py-2 space-y-2 text-sm">
            <input
              type="text"
              placeholder="To"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full border-b pb-1 outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border-b pb-1 outline-none"
            />
            <div
              ref={editorRef}
              contentEditable
              suppressContentEditableWarning
              className="w-full resize-none outline-none pt-2 min-h-[140px] border p-1 rounded"
              onInput={(e) => setBody(e.target.innerHTML)}
              onKeyUp={updateActiveStates}
              onMouseUp={updateActiveStates}
            ></div>

            {files.length > 0 && (
              <div className="border p-2 rounded bg-gray-50 text-xs space-y-1">
                <p className="font-medium">Attachments:</p>
                {files.map((f, i) => (
                  <div key={i} className="flex justify-between text-gray-700">
                    <span>{f.name}</span>
                    <span>{(f.size / 1024).toFixed(1)} KB</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center px-3 py-2 border-t bg-gray-50">
            <button
              onClick={() => {
                saveDraft();
                onClose();
              }}
              className="bg-green-600 text-white px-5 py-1 rounded-md hover:bg-green-700"
            >
              Send
            </button>

            <div className="flex items-center gap-3 text-gray-600 text-lg">
              <label>
                <FiPaperclip
                  className="cursor-pointer hover:text-black"
                  onClick={() => fileInputRef.current.click()}
                />
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
              </label>

              <AiOutlineBold
                className={`cursor-pointer ${isBold ? "text-green-600" : ""}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText("bold");
                }}
              />
              <AiOutlineItalic
                className={`cursor-pointer ${isItalic ? "text-green-600" : ""}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText("italic");
                }}
              />
              <AiOutlineUnderline
                className={`cursor-pointer ${isUnderline ? "text-green-600" : ""}`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  formatText("underline");
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComposeModal;

