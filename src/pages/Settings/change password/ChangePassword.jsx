import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useNavigate } from "react-router";
import { FiEye, FiEyeOff } from "react-icons/fi";

const ChangePassword = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = formData;

    if (newPassword.length < 8 || newPassword.length > 10) {
      alert("Password must be 8–10 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    // You can call your backend API here
    console.log("Password updated:", formData);
    navigate('/settings');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md border border-gray-200">
        <div className="flex items-center mb-4">
          <IoArrowBack className="text-xl mr-2 cursor-pointer" onClick={()=>navigate('/settings')} />
          <h2 className="text-2xl text-[#1F1D1D] font-medium">Change Password</h2>
        </div>

        <p className="text-lg text-[#707070] mb-5">
          Your password must be 8–10 characters long.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Old Password */}
          <div>
            <label className="block font-medium text-[#1F1D1D] mb-1">
              Enter old password
            </label>
            <div className="relative">
              <input
                type={showPassword.old ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleChange}
                placeholder="Enter old password"
                className="form-control"
              />
              <span
                className="absolute right-3 top-4.5 text-Primary cursor-pointer"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, old: !prev.old }))
                }
              >
                {showPassword.old ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* New Password */}
          <div>
            <label className="block font-medium text-[#1F1D1D] mb-1">
              Set new password
            </label>
            <div className="relative">
              <input
                type={showPassword.new ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Set new password"
                className="form-control"
              />
              <span
                className="absolute right-3 top-4.5 text-Primary cursor-pointer"
                onClick={() =>
                  setShowPassword((prev) => ({ ...prev, new: !prev.new }))
                }
              >
                {showPassword.new ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block font-medium text-[#1F1D1D] mb-1">
              Re-enter new password
            </label>
            <div className="relative">
              <input
                type={showPassword.confirm ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter new password"
                className="form-control"
              />
              <span
                className="absolute right-3 top-4.5 text-Primary cursor-pointer"
                onClick={() =>
                  setShowPassword((prev) => ({
                    ...prev,
                    confirm: !prev.confirm,
                  }))
                }
              >
                {showPassword.confirm ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <p className="text-xs text-Primary text-right cursor-pointer" onClick={()=>navigate('/forgotpassword')}>
            Forgot password?
          </p>

          <button
            type="submit"
            className="authButton"
          >
            Update password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
