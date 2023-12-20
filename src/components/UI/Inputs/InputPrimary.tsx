'use client';

import React, { useState } from 'react';

interface IInputPrimary {
  label: string;
  type: string;
  className?: string;
  hasImage?: boolean;
  isDisabled?: boolean;
}

const InputPrimary = ({
  label,
  type,
  className,
  hasImage = false,
  isDisabled = false
}: IInputPrimary) => {
  const [value, setValue] = useState('');
  const [active, setActive] = useState(false);

  return (
    <div
      id="InputFieldRoot"
      className={`border-solid border-border-light bg-screen-white w-full ${
        active ? 'py-[15px] border-primary-base' : 'py-6'
      }  px-5 border rounded-lg`}
    >
      <div
        id="InputHeading"
        className={`"w-full flex flex-col gap-1 justify-center items-start"`}
      >
        <label
          className={`transition-all duration-300 ${
            active
              ? `text-xs font-normal ${
                  isDisabled ? 'text-secondary-200' : 'text-secondary-500'
                } `
              : `text-sm font-medium ${
                  isDisabled ? 'text-secondary-200' : 'text-secondary-base'
                }`
          } font-medium leading-tight `}
          onClick={() => setActive(true)}
        >
          {label}
        </label>
        {active && (
          <div className="w-full flex justify-between items-center gap-4">
            <input
              className={`w-full outline-none ${
                isDisabled
                  ? 'text-secondary-200 bg-inherit'
                  : 'text-secondary-base'
              } text-base font-medium leading-tight  ${className}`}
              value={value}
              type={type}
              disabled={isDisabled}
              onChange={e => setValue(e.target.value)}
            />
            {hasImage && (
              <img
                src="https://file.rendit.io/n/KeFeeJcAAmEGGIZtMq0I.svg"
                alt="ImageRemoveRedEye icon"
                id="Vuesaxlineareye"
                className="w-6"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputPrimary;
