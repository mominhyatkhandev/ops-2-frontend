'use client';

import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';

const AcceptPayments = ({
  other,
  clickTrigger
}: {
  other: string;
  clickTrigger: boolean;
}): JSX.Element => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');

  useEffect(() => {
    if (other == 'Home' || other == 'Developer' || other == 'FAQS') {
      setSelectedOption('');
    }
  }, [other, clickTrigger]);

  return (
    <>
      <li
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered(!isHovered)}
        className={`relative text-secondary-base text-sm cursor-pointer text-center px-2 h-[82px] flex ${
          selectedOption && `flex-col items-start justify-start`
        } items-center justify-center`}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            // marginTop: '20px'
            marginTop: !isHovered && selectedOption !== '' ? '20px' : '0px'
          }}
        >
          <div
            className={`${
              isHovered && `text-primary-base hover:transition duration-300`
            }`}
          >
            Accept Payments
          </div>
          {!isHovered && selectedOption && (
            <div className="text-primary-base flex flex-start">
              {selectedOption}
            </div>
          )}
        </div>

        <div>
          <Dropdown
            isHovered={isHovered}
            setSelectedOption={setSelectedOption}
            // setSelectedOption={option => {
            //   setSelectedOptionLocal(option);
            //   setSelectedOption(option);
            // }}
          />
        </div>
      </li>
    </>
  );
};

export default AcceptPayments;
