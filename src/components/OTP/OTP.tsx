'use client';
import useCounter from '@/hooks/useCounter';
import Link from 'next/link';
import React, { useRef, useEffect, useState, KeyboardEvent } from 'react';

function OTP({
  numberOfDigits = 6,
  description
}: {
  numberOfDigits?: number;
  description: string;
}) {
  const [otp, setOtp] = useState(new Array(numberOfDigits).fill(''));
  const [otpError, setOtpError] = useState<string | null>(null);
  const { formattedCount, count } = useCounter({ initialCount: 10 });
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
    <article className="flex flex-col gap-4">
      <p className="text-base text-secondary-base font-semibold">
        {description}
      </p>

      <div className="flex w-max items-center gap-9 text-lg text-secondary-900">
        {otp.map((digit, index) => (
          <input
            key={index}
            value={digit}
            maxLength={1}
            onChange={e => handleChange(e.target.value, index)}
            onKeyUp={e => handleBackspaceAndEnter(e, index)}
            ref={ref => (otpBoxReference.current[index] = ref!)}
            className={`border-[1px] border-border-light w-[60px] h-[60px] text-2xl text-blue p-3 rounded-md block bg-black focus:border-2 focus:outline-none appearance-none text-center`}
          />
        ))}
      </div>
      {otpError ? (
        <p
          className={`text-lg text-white mt-4 ${otpError ? 'error-show' : ''}`}
        >
          {otpError}
        </p>
      ) : null}

      {count > 0 ? (
        <div className="text-xs font-normal text-secondary-600">
          Resend OTP in 00:{formattedCount}
        </div>
      ) : (
        <Link href="/">
          <div className="text-xs leading-tight font-normal text-primary-base underline">
            Resend OTP
          </div>
        </Link>
      )}
    </article>
  );
}

export default OTP;
