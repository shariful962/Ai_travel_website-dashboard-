import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { IoArrowBack } from "react-icons/io5";
import Icons from "../../assets/image";

const OtpVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const focusInput = (index) => {
    const el = inputRefs.current[index];
    if (el) el.focus();
  };

  const handleChange = (e, index) => {
    const raw = e.target.value;
    const digit = raw.replace(/\D/g, ""); // only digits

    if (!digit) {
      // if user cleared input
      setOtp((prev) => {
        const next = [...prev];
        next[index] = "";
        return next;
      });
      return;
    }

    // if user pasted more than one char or typed quickly,
    // fill subsequent inputs
    setOtp((prev) => {
      const next = [...prev];
      let pos = index;
      for (let ch of digit) {
        if (pos > 5) break;
        next[pos] = ch;
        pos += 1;
      }
      return next;
    });

    // move focus to the next empty position after what was typed/pasted
    const nextPos = Math.min(index + digit.length, 5);
    // small timeout ensures value is set before focusing in some browsers
    setTimeout(() => focusInput(nextPos === index ? index + 1 : nextPos), 0);
  };

  const handleKeyDown = (e, index) => {
    const key = e.key;

    if (key === "Backspace") {
      e.preventDefault(); // we manage behavior
      setOtp((prev) => {
        const next = [...prev];
        if (next[index]) {
          // if current has a value, clear it and stay
          next[index] = "";
          // focus stays at current index
          setTimeout(() => focusInput(index), 0);
        } else if (index > 0) {
          // move to previous and clear it
          next[index - 1] = "";
          setTimeout(() => focusInput(index - 1), 0);
        }
        return next;
      });
      return;
    }

    if (key === "ArrowLeft") {
      e.preventDefault();
      if (index > 0) focusInput(index - 1);
      return;
    }

    if (key === "ArrowRight") {
      e.preventDefault();
      if (index < 5) focusInput(index + 1);
      return;
    }

    // Prevent non-digit printable characters from being entered
    if (key.length === 1 && /\D/.test(key)) {
      e.preventDefault();
    }
  };

const handlePaste = (e, index) => {
  e.preventDefault();

  // get pasted content and extract only digits
  const pasted = (e.clipboardData || window.clipboardData).getData("text");
  const digits = pasted.replace(/\D/g, "").slice(0, 6 - index).split("");
  if (!digits.length) return;

  setOtp((prev) => {
    const next = [...prev];
    let pos = index;

    // fill the OTP starting from the box where user pasted
    for (let ch of digits) {
      if (pos > 5) break;
      next[pos] = ch;
      pos += 1;
    }

    return next;
  });

  // focus next empty box or last box
  setTimeout(() => {
    const nextPos = Math.min(index + digits.length, 5);
    focusInput(nextPos);
  }, 0);
};

  const handleVerify = (e) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6 && /^\d{6}$/.test(code)) {
      // OTP valid — redirect
      navigate("/resetpassword");
    } else {
      alert("Please enter a 6-digit OTP");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#707070] px-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
        {/* logo */}
        <div className="flex justify-center mb-6">
          <img src={Icons.navLogo} alt="logo" />
        </div>

        {/* title + back */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-x-3">
            <button onClick={() => navigate("/forgotpassword")} className="text-[#1F1D1D] cursor-pointer">
              <IoArrowBack size={22} />
            </button>
            <h2 className="text-2xl font-medium text-[#1F1D1D]">Verify Email</h2>
          </div>
        </div>

        <p className="text-textClr mb-6 text-center">
          Please enter the OTP we have sent you in your email.
        </p>

        <form onSubmit={handleVerify} className="space-y-6">
          <div className="flex justify-between gap-2 sm:gap-3">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => (inputRefs.current[idx] = el)}
                value={digit}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onPaste={(e)=>handlePaste(e, idx)} // allow paste from first box
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                className="w-10 h-12 sm:w-12 sm:h-14 border border-[#959595] rounded-lg text-center text-lg font-medium focus:outline-Primary"
                aria-label={`OTP digit ${idx + 1}`}
              />
            ))}
          </div>

          <button type="submit" className={`w-full py-3 mb-6 rounded-lg transition-colors duration-150 ${
          otp.every((e) => e.trim() !== "")
            ? "bg-Primary text-white cursor-pointer"
            : "bg-Primary/50 text-white cursor-not-allowed"
        }`}
        disabled={!otp.every((e) => e.trim() !== "")}>
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;


