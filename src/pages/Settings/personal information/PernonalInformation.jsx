

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { IoArrowBack } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { IoCamera } from "react-icons/io5";
import { useNavigate } from "react-router";
import Icons from "../../../assets/image";

const PersonalInformation = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "Tamil",
    email: "tamim254@gmail.com",
    phone: "+8801744663950",
    profilePic: Icons.profilePic, // Added profile picture URL
  });
  const [image, setImage] = useState(null);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save action here (API call etc.)
      console.log("Saved:", formData);
    }
    setIsEditing(!isEditing);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a new URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profilePic: imageUrl });
      setImage(file); // Optionally store the image file for API upload
    }
  };

  return (
    <div className="px-4">
      <div className="max-w-5xl py-6 px-6 mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div className="flex items-center">
            <IoArrowBack
              className="text-xl mr-2 cursor-pointer"
              onClick={() => navigate("/settings")}
            />
            <h2 className="text-2xl text-[#1F1D1D] font-medium">
              Personal Information
            </h2>
          </div>

          <button
            onClick={handleEditToggle}
            className="flex items-center gap-x-3 bg-Primary px-7 py-2.5 rounded-lg text-white w-max mt-4 md:mt-0 cursor-pointer"
          >
            {!isEditing && <FiEdit />}
            {isEditing ? "Save Change" : "Edit Profile"}
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* PROFILE CARD */}
          <div className="border border-[#444444] w-[250px] h-[250px] flex items-center justify-center rounded-lg relative">
            <div className="text-center relative">
              <img
                src={formData.profilePic}
                className="w-24 h-24 rounded-full mx-auto"
                alt="profile"
              />
              <h1 className="text-lg font-regular text-textClr mt-2">
                Profile
              </h1>
              <p className="text-2xl text-[#1F1D1D]">Admin</p>

              {/* Image Edit Button */}
            <div>
                {isEditing && (
                <label
                  htmlFor="imageUpload"
                  className="absolute bottom-16 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer"
                >
                  <IoCamera className="text-2xl text-gray-700" />
                </label>
              )}
              <input
                type="file"
                id="imageUpload"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </div>
            </div>
          </div>

          {/* FORM */}
          <form className="flex-1 space-y-4">
            {/* NAME */}
            <div>
              <label className="label-control">Name</label>
              <input
                type="text"
                className="form-control"
                disabled={!isEditing}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="label-control">Email</label>
              <input
                type="email"
                className="form-control"
                disabled={!isEditing}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="label-control">Phone Number</label>
              <PhoneInput
                international
                defaultCountry="BD"
                disabled={!isEditing}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                className={`p-2 border ${
                  isEditing ? "border-gray-300" : "border-gray-200 bg-gray-100"
                } rounded`}
                placeholder="Enter phone number"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

