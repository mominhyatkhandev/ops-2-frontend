'use client';

import React, { useState, useEffect, SetStateAction } from 'react';
import Dropdown from './Dropdown';

const AcceptPayments = ({
  other,
  clickTrigger
}: {
  other: string;
  clickTrigger: boolean;
}): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const [isHovered, setIsHovered] = useState<boolean>(false);

  useEffect(() => {
    if (other == 'Home' || other == 'Developer' || other == 'faq') {
      console.log('other', other);
      setSelectedOption('');
    }
  }, [other, clickTrigger]);

  return (
    <>
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        className={`relative text-secondary-base text-sm cursor-pointer text-center
        `}
      >
        <div>
          <div
            className={`relative py-3 ${
              isHovered && 'text-primary-base'
            } hover:text-primary-base hover:transition duration-300`}
          >
            Accept Payments
          </div>
        </div>
        {selectedOption && (
          <div className="text-primary-base absolute top-9 text-xs leading-tight">
            {selectedOption}
          </div>
        )}

        <>
          {isHovered && (
            <Dropdown
              isHovered={isHovered}
              setSelectedOption={setSelectedOption}
            />
          )}
        </>
      </li>
    </>
  );
};

export default AcceptPayments;
