import React, { useRef, useState } from "react";

const VerifyCode = ({ setOtp, email, onSubmit }) => {
  //   const email = "demo@gmail.com";
  const inputs = useRef([]);
  const [values, setValues] = useState(["", "", "", "", "", ""]);

  const handleSubmit = (e) => {
    e.preventDefault()
    const joinOtp = values.join(""); // join the otp array in a single string..
    setOtp(joinOtp);
    onSubmit(joinOtp);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^\d$/.test(value)) {
      // validate the otp (only number)
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (index < 5) {
        inputs.current[index + 1]?.focus();
      }
    } else {
      // If invalid, reset the value
      const newValues = [...values];
      newValues[index] = "";
      setValues(newValues);
    }
  };
  // backspace, left and right arrow moving function
  const handleKey = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // prevent default browser behavior

      const newValues = [...values];

      if (values[index]) {
        // If current field has a value, clear it
        newValues[index] = "";
        setValues(newValues);
      } else if (index > 0) {
        // If empty, move focus left and clear previous value
        newValues[index - 1] = "";
        setValues(newValues);
        inputs.current[index - 1]?.focus();
      }
    }

    if (e.key === "ArrowLeft" && index > 0) {
      inputs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  // otp code copy function
  const handlePaste = (e) => {
    e.preventDefault();
    const paste = e.clipboardData.getData("text").trim();
    if (!paste) return;

    // Filter only digits and slice max 6 chars
    const digits = paste.replace(/\D/g, "").slice(0, 6).split("");

    if (digits.length === 0) return;

    const newValues = [...values];
    for (let i = 0; i < digits.length; i++) {
      newValues[i] = digits[i];
    }
    setValues(newValues);

    // Focus the last filled input
    const lastFilledIndex = digits.length - 1;
    inputs.current[lastFilledIndex]?.focus();
  };

  return (
    <div className="w-full md:max-w-[538px] font-Roboto px-4 flex flex-col">
      <form onSubmit={handleSubmit}>
        <h3 className="text-center authTitle mt-6 md:mt-0">Check your email</h3>
      <p className="text-base md:text-lg  leading-6 text-s mb-7.5 text-[#848484]">
        We sent a reset link to <strong>{email} </strong>
        enter 6 digit code that mentioned in the email
      </p>

      <div className="flex flex-wrap justify-between items-center gap-1 mt-4 ">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            maxLength={1}
            type="tel"
            inputMode="numeric"
            value={values[index]} // controlled input
            className={`p-2 rounded-xl border-1 text-center outline-none md:text-xl w-[50px] md:w-[3.375rem] h-[55px] md:h-[3.75rem] transition-colors duration-150  ${
              values[index] ? "border border-Primary" : "border-gray-400"
            }`}
            ref={(el) => (inputs.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKey(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <button
        className={`w-full auth_btn mt-4 transition-colors duration-150 ${
          values.every((e) => e.trim() !== "")
            ? "bg-Primary text-white cursor-pointer"
            : "bg-Primary/50 text-white cursor-not-allowed"
        }`}
        disabled={!values.every((e) => e.trim() !== "")}
       type="submit"
      >
        Verify Code
      </button>
      
      <p className="mt-5 text-[#C0C0C0] leading-[100%]">
        Haven’t got the email yet?{" "}
        <span className="text-Primary font-bold underline cursor-pointer">
          Resend Code
        </span>
      </p>
      </form>
    </div>
  );
};

export default VerifyCode;
