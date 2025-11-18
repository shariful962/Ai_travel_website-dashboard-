import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const navigate = useNavigate()

  const handleUpdatePassword =()=>{
    if(!password || !confirmPass){
        alert("fill the password field")
        return
    }
      if(password !== confirmPass){
        alert("Password don't match")
        return
    }
    console.log("update password", password)
    navigate("/signin")
  }

  return (
    <div className="flex items-center justify-center h-screen w-full font-Roboto">
      <div className="w-full max-w-[538px] flex flex-col">
       <form onSubmit={handleUpdatePassword}>
         <h1 className="authTitle text-center mb-2">
          Update password
        </h1>
        <p className="text-lg text-[#B0B3B8] mb-7.5 max-w-[460px]">Create a new password. Ensure it differs from
previous ones for security</p>

        {/* password input  */}

        <div className="flex flex-col w-full gap-2 mb-6 md:mb-5.5">
          <label htmlFor="password" className="label-control">
            Password
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] cursor-pointer"
            >
              {showPass ? (
                <IoEyeOutline size={22} />
              ) : (
                <FaRegEyeSlash size={22} />
              )}
            </button>
            <input
              id="password"
              type={showPass ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              
              className="form-control"
            />
          </div>
        </div>
        {/* confirm password input  */}
        <div className="flex flex-col w-full gap-2 mb-6 md:mb-5.5">
          <label htmlFor="confirmPass" className="label-control">
            Confirm Password
          </label>
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] cursor-pointer"
            >
              {showConfirmPass ? (
                <IoEyeOutline size={22} />
              ) : (
                <FaRegEyeSlash size={22} />
              )}
            </button>
            <input
              id="confirmPass"
              type={showConfirmPass ? "text" : "password"}
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
             
              className="form-control"
            />
          </div>
        </div>

        <button 
        // onClick={handleUpdatePassword }
        disabled={!password || !confirmPass}
        className={`w-full auth_btn bg-Primary ${!password || !confirmPass ? "bg-Primary/50 cursor-not-allowed" : "bg-Primary cursor-pointer transition-colors duration-150"}`}>
          Update Password
        </button>
       </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
