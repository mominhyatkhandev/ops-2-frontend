import React from 'react';
import { ErrorMessage, Field } from 'formik';
import Image from 'next/image';

interface IInput {
  name: string;
  label: string;
  type: string;
  className?: string;
  isDisabled?: boolean;
  error: string | undefined;
  touched: boolean | undefined;
  image: React.ReactElement;
}

const ImageInput = ({
  name,
  label,
  type,
  className,
  isDisabled = false,
  error,
  touched,
  image
}: IInput) => {
  return (
    <div className="w-full  bg-neutral-white-base">
      <div
        className={`focus:border-primary-base peer relative ${
          touched && error && 'border-danger-base focus:border-danger-base'
        }  appearance-none focus:ring-0 border-2 border-border-light flex`}
      >
        <Field
          name={name}
          type={type}
          id={label}
          className={`${className} block rounded-lg px-2.5 pb-1.5 pt-5 w-full text-base leading-tight font-500 text-secondary-base focus:outline-none`}
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
        <Image src={image} alt="image" width={20} height={20} />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="p-2 text-danger-base text-xs"
      />
      {/* Success msg if any  */}
      {/* {touched && !error && (
        <p className="p-2 text-primary-base text-xs">Valid</p>
      )} */}
    </div>
  );
};

export default ImageInput;
