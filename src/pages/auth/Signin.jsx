import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

import Icons from "../../assets/image";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  //sign in functionality
  const handleSignin = (e) => {
    e.preventDefault();
    //signin logic
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#707070] px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        {/* logo section  */}
        <div className="flex justify-center mb-6">
          <img src={Icons.navLogo} alt="logo" />
        </div>
        {/* titile section  */}
        <h2 className="text-2xl font-medium text-[#1F1D1D] text-center mb-6">
          Sign In
        </h2>
        {/* form section  */}
        <form onSubmit={handleSignin}>
          {/* username field  */}
          <div>
            {/* <label className="block text-gray-700 text-sm mb-1">Username</label> */}
            <input
              type="text"
              placeholder="User name"
              className="mb-6 form-control"
            />
          </div>

          <div className="relative">
            {/* <label className="block text-gray-700 text-sm mb-1">Password</label> */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="form-control mb-3"
            />
            <span
              className="absolute right-3 top-4.5 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link
              to="/forgotpassword"
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="authButton my-6"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
