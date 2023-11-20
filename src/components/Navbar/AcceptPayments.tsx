'use client';

import React, { useState } from 'react';
import Dropdown from './Dropdown';

const AcceptPayments = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  return (
    <>
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        className={`relative text-dark text-sm cursor-pointer text-center px-2 h-[82px] flex ${
          selectedOption && `flex-col items-start justify-start`
        } items-center justify-center`}
      >
        <span
          className={`${
            isHovered && `text-primary hover:transition duration-300`
          }`}
        >
          Accept Payments
        </span>
        {!isHovered && selectedOption && (
          <span className="text-primary">{selectedOption}</span>
        )}
        <Dropdown isHovered={isHovered} setSelectedOption={setSelectedOption} />
      </li>
    </>
  );
};

export default AcceptPayments;
