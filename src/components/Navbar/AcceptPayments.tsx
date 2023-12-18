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
    const pathArray = window.location.pathname.split('/');
    const selectedTitle = pathArray[pathArray.length - 1];
    let formattedTitle;

    if (other === 'Home' || other === 'Developer' || other === 'FAQs') {
      console.log('other', other);
      formattedTitle = '';
    } else {
      formattedTitle = selectedTitle
        .replace(/-/g, ' ')
        .replace(/(?:^|\s)\S/g, match => match.toUpperCase());
    }

    console.log('formatted title', formattedTitle);
    setSelectedOption(formattedTitle);
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
              isHovered
                ? `text-primary-base flex flex-start hover:transition duration-300`
                : `flex flex-start hover:transition duration-300 `
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
          />
        </div>
      </li>
    </>
  );
};

export default AcceptPayments;
