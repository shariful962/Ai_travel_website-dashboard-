import React from "react";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import Icons from "../../assets/image";

const ForgotPassword = () => {
  const navigate = useNavigate();

  //send otp functionality
  const handleSendOtp = (e) => {
    e.preventDefault();
    //sent otp logic
    navigate("/otp");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#707070] px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        {/* logo section  */}
        <div className="flex justify-center mb-6">
          <img src={Icons.navLogo} alt="logo" />
        </div>

        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => navigate("/signin")}
              className="text-[#1F1D1D] cursor-pointer"
            >
              <IoArrowBack size={22} />
            </button>
            <h2 className="text-2xl font-medium text-[#1F1D1D]">
              Forgot Password
            </h2>
          </div>
        </div>

        <p className="text-textClr mb-6 text-center">
          Please enter your email address to reset your password.
        </p>

        <form onSubmit={handleSendOtp}>
          <div>
            {/* <label className="block text-gray-700 text-sm mb-1">Email</label> */}
            <input type="email" placeholder="Email" className="form-control" />
          </div>

          <button type="submit" className="authButton my-6">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
