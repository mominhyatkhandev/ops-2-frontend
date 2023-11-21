'use client';

import React, { useState } from 'react';
import Dropdown from './Dropdown';

const AcceptPayments = (): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  console.log('ishovered', isHovered);
  return (
    <>
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}
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
        <div>
          <Dropdown
            isHovered={isHovered}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </li>
    </>
  );
};

export default AcceptPayments;
