import React, { useCallback, useEffect, useState } from "react";

function Otp() {
  const [otp, setOtp] = useState(0);

  const gOtp = useCallback(() => {
    let nums = "0123456789";
    let genOtp = [];
    for (let i = 1; i <= 6; i++) {
      let numbers = Math.floor(Math.random() * 6 + 1);

      genOtp += nums.charAt(numbers);
    }
    console.log(genOtp);
    setOtp(genOtp);
  }, []);

  useEffect(() => gOtp(), []);

  return (
    <div className="w-lg bg-slate-600 p-5 mx-auto">
      <input
        type="text"
        className="border-0 bg-white outline-0"
        value={otp}
        onChange={(e) => e.target.value}
      />
      <button
        className="bg-amber-400 px-2 py-1 cursor-pointer rounded"
        onClick={() => gOtp()}
      >
        new
      </button>
    </div>
  );
}

export default Otp;
