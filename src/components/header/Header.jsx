import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Icons from "../../assets/image";
import { IoIosNotificationsOutline } from "react-icons/io";


import { useNavigate } from "react-router";

const Header = ({ setSidebarOpen }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("Shariful Islam");
  // const [email, setEmail] = useState("cori@gmail.com");
  const [profileImage, setProfileImage] = useState(Icons.profilePic);

  // handle logout function
  const handleLogout = () => {
    // logic here
    navigate("/signin");
  };

  // handle image upload for modal
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="font-Roboto fixed top-0 left-0 md:left-[256px] py-2 right-0 h-[90px] bg-[#FEFEFE] px-4 flex items-center z-40 ">
      <div className="flex items-center justify-between w-full h-full shadow-custom px-4 py-2 rounded-lg">
        {/* Hamburger icon on mobile only */}
        <div
          className="md:hidden mr-4 flex items-center justify-center bg-Primary text-bg w-10 h-10 rounded-full"
          onClick={() => setSidebarOpen(true)}
          aria-label="Toggle Sidebar"
        >
          <HiMenu size={22} className="text-white" />
        </div>
        {/* left section  */}
        <div>
          <h1 className="text-lg md:text-xl lg:text-2xl text-Primary">Welcome, Tamim</h1>
          <p className="text-textClr">Have a nice day!</p>
        </div>

        {/* Right Side: Profile Info */}
        <div className="ml-auto flex items-center gap-2 relative">
          <div className="flex items-center gap-4 ml-auto  rounded-[10px] p-2 relative">
            <div className="bg-Primary/10 w-12 h-12 rounded-full flexCenter relative md:mr-4 cursor-pointer">
              <div><IoIosNotificationsOutline size={24} className="text-Primary"/></div>
              <div>
                <span className="bg-Primary w-5 h-5 rounded-full flexCenter text-xs text-white absolute top-0">2</span>
              </div>
            </div>
            <div className="relative ">
              <img
                src={profileImage}
                alt="user profile"
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
            {/* profile section  */}
            <div className="hidden md:block">
              <h1 className="text-[1.25rem] font-semibold text-textClr leading-[100%]">
                {name}
              </h1>
              <p className="text-[1rem] text-stroke">Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
