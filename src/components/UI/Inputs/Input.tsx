'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ErrorMessage, Field } from 'formik';
import { StaticImageData } from 'next/image';

interface IInput {
  name: string;
  label: string;
  type: string;
  className?: string;
  isDisabled?: boolean;
  hasImage?: boolean;
  image?: StaticImageData;
  error: string | undefined;
  touched: boolean | undefined;
}

const Input = ({
  name,
  label,
  type,
  className,
  isDisabled = false,
  error,
  touched,
  hasImage,
  image
}: IInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const handleImageClick = () => {
    setIsPasswordVisible(prev => !prev);
  };
  return (
    <div className="w-full flex flex-col gap-[6px] relative ">
      <Field
        name={name}
        type={isPasswordVisible ? 'text' : type}
        id={label}
        className={`${className} bg-neutral-white-base block rounded-lg px-2.5 pb-1.5 pt-5 w-full text-base leading-tight font-500 text-secondary-base border-2 border-border-light appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary-base peer ${
          touched && error && 'border-danger-base focus:border-danger-base'
        }`}
        placeholder=" "
        disabled={isDisabled}
        // autoComplete="off"
      />
      <label
        htmlFor={label}
        className="absolute text-sm font-500 leading-tight text-secondary-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 focus:text-xs peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
      {hasImage && image && (
        <div className="absolute top-1/2 transform -translate-y-1/2 right-2">
          {/* Your image component */}
          <Image
            src={image}
            alt="Image"
            className="w-4 h-4"
            onMouseDown={handleImageClick}
            onMouseUp={() => setIsPasswordVisible(false)}
          />
        </div>
      )}
      {/* Success msg if any  */}
      {/* {touched && !error && (
        <p className="p-2 text-primary-base text-xs">Valid</p>
      )} */}
      <ErrorMessage
        name={name}
        component="div"
        className="text-danger-base px-2.5 text-xs leading-tight"
      />
    </div>
  );
};

export default Input;
