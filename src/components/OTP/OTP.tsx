'use client';
'use client';
import React, { useRef, useEffect, useState, KeyboardEvent } from 'react';

function OTP({ numberOfDigits = 6 }: { numberOfDigits?: number }) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(''));
  const [otpError, setOtpError] = useState<string | null>(null);
  const otpBoxReference = useRef<HTMLInputElement[]>([]);

  function handleChange(value: string, index: number) {
    let newArr = [...otp];
    newArr[index] = value;
    setOtp(newArr);

    if (value && index < numberOfDigits - 1) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  function handleBackspaceAndEnter(
    e: KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      otpBoxReference.current[index - 1]?.focus();
    }
    if (
      e.key === 'Enter' &&
      e.currentTarget.value &&
      index < numberOfDigits - 1
    ) {
      otpBoxReference.current[index + 1]?.focus();
    }
  }

  return (
    <article className="w-1/2">
      <p className="text-2xl font-medium text-white mt-12">
        OTP Input With Validation
      </p>

      <p className="text-base text-white mt-6 mb-4">One Time Password (OTP)</p>

      <div className="bg-primary-700 flex items-center gap-4 text-lg text-danger-base">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={e => handleChange(e.target.value, index)}
            onKeyUp={e => handleBackspaceAndEnter(e, index)}
            ref={ref => (otpBoxReference.current[index] = ref!)}
            className={`border w-12 h-12 text-2xl text-blue p-3 rounded-md block bg-black focus:border-2 focus:outline-none appearance-none text-center`}
          />
        ))}
      </div>

      <p className={`text-lg text-white mt-4 ${otpError ? 'error-show' : ''}`}>
        {otpError}
      </p>
    </article>
  );
}

export default OTP;
