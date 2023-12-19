'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface IInputPrimary {
  name: string;
  label: string;
  type: string;
  className?: string;
  hasImage?: boolean;
  isDisabled?: boolean;
  image: React.ReactElement;
}

const InputPrimary = ({
  name,
  label,
  type,
  className,
  hasImage = false,
  isDisabled = false,
  image
}: IInputPrimary) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleMouseDown = () => {
    setIsPasswordVisible(true);
  };

  const handleMouseLeave = () => {
    setIsPasswordVisible(false);
  };

  const handleDivClick = () => {
    setActive(true);
    if (isFilled === false) return;
    setIsFilled(false);
  };

  const handleDivBlur = () => {
    setIsFilled(true);
    console.log('BLURRR HIT');
  };

  return (
    <div
      id="InputFieldRoot"
      className={`flex justify-between items-center gap-4 border-solid border-border-light bg-screen-white w-full ${
        active && !isFilled ? 'py-[15px] border-primary-base' : 'py-6'
      }  px-5 border rounded-lg`}
    >
      <div
        id="InputHeading"
        className={`"w-full flex flex-col gap-1 justify-center items-start"`}
        onClick={handleDivClick}
        onBlur={handleDivBlur}
      >
        <label
          className={`w-full transition-all duration-300 cursor-pointer ${
            active
              ? `text-xs font-normal ${
                  isDisabled ? 'text-secondary-200' : 'text-secondary-500'
                } `
              : `text-sm font-medium ${
                  isDisabled ? 'text-secondary-200' : 'text-secondary-base'
                }`
          } font-medium leading-tight `}
        >
          {label}
        </label>
        {active && (
          <div className="w-full">
            <input
              autoFocus
              className={`w-full focus:outline-none ${
                isDisabled
                  ? 'text-secondary-200 bg-inherit'
                  : 'text-secondary-base'
              } text-base font-medium leading-tight  ${className}`}
              value={value}
              type={
                type === 'password' ? (isPasswordVisible ? 'text' : type) : type
              }
              disabled={isDisabled}
              onChange={e => setValue(e.target.value)}
              //   onClick={handleInputClick}
              //   onBlur={() => setIsFilled(true)}
            />
          </div>
        )}
      </div>
      {hasImage && (
        <Image
          src={image}
          alt={image}
          width={24}
          height={24}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseLeave}
        />
        //   <img
        //     src="https://file.rendit.io/n/KeFeeJcAAmEGGIZtMq0I.svg"
        //     alt="ImageRemoveRedEye icon"
        //     id="Vuesaxlineareye"
        //     className="w-6"
        //   />
      )}
    </div>
  );
};

export default InputPrimary;
