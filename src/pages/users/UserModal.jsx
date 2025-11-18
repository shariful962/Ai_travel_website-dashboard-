import React from "react";
import { IoMdClose } from "react-icons/io";


const UserModal = ({ isOpen, onClose, userDetails }) => {
  if (!isOpen || !userDetails) return null;

  



  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-30 flexCenter md:ml-[256px] z-50">
      <div className="bg-white rounded-lg  w-[90%] md:w-[444px] border border-Primary">
        {/* Header */}
        <div className="border-b px-5 py-3 border-Primary relative">
          <h2 className="text-lg font-medium text-[#1F1D1D] text-center">
            User Details
          </h2>
          <div className="bg-red-500 w-10 h-10 no-print absolute top-0 right-0 rounded-tr-[8px] rounded-bl-[20px] border border-red-500 cursor-pointer flexCenter">
            <button
            onClick={onClose}
            className=" text-xl text-white cursor-pointer"
          >
            <IoMdClose size={24} />
          </button>
          </div>
        </div>

        {/* Body */}
        <div className="text-sm text-[#1F1D1D]">
          <div className="border-b border-Primary py-2">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>User Name:</strong>
              </div>{" "}
              <div>{userDetails.username}</div>
            </div>
          </div>
          <div className="border-b border-Primary py-2">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>Email:</strong>
              </div>{" "}
              <div>{userDetails.email}</div>
            </div>
          </div>
          <div className="border-b border-Primary py-2">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>Phone Number:</strong>
              </div>{" "}
              <div>{userDetails.phone}</div>
            </div>
          </div>
          <div className="border-b border-Primary py-2">
            <div className="px-4 py-3 flexBetween">
              <div>
                <strong>Address:</strong>
              </div>{" "}
              <div> {userDetails.address}</div>
            </div>
          </div>
           <div className="border-b border-Primary py-2 mb-6">
            <div className="px-4 py-3 flexBetween">
                <div><strong>Joining Date:</strong></div> <div>{userDetails.date}</div>
            </div>
          </div>
          
        </div>

        
      </div>
    </div>
  );
};

export default UserModal;

