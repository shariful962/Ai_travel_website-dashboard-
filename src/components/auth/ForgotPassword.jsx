import React, { useState } from "react";

const ForgotPassword = ({email,setEmail,onSubmit}) => {
  // const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center h-screen w-full font-Roboto">

        
      <div className="w-full max-w-[538px] flex flex-col">
        <h1 className="authTitle text-center">
          Forget password
        </h1>
        <p className="mt-8 text-base md:text-lg leading-[100%] text-[#B0B3B8] mb-7.5">Enter your email to reset password</p>

        {/* email input section */}
        <form onSubmit={onSubmit}>
          <div className="flex flex-col w-full gap-2 mb-4 md:mb-5.5">
          <label htmlFor="email" className="label-control">
            Email
          </label>
          <div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-control"
            />
          </div>
        </div>

        <button
            type="submit"
            disabled={!email}
            className={`w-full auth_btn ${!email ? "bg-Primary/50 cursor-not-allowed" : "bg-Primary cursor-pointer"}`}
          >
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
