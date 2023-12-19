import { error } from 'console';
import { ErrorMessage, Field } from 'formik';
import React, { useState } from 'react';

const Input = ({ label, type, name, error, touched }: any) => {
  return (
    <div className="w-full relative bg-neutral-white-base">
      <Field
        name={name}
        type={type}
        id={label}
        className={`block rounded-lg px-2.5 pb-1.5 pt-5 w-full text-base leading-tight font-500 text-secondary-base border-2 border-border-light appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-primary-base peer ${
          touched && error && 'border-danger-base focus:border-danger-base'
        }`}
        placeholder=" "
        disabled={false}
      />
      <label
        htmlFor={label}
        className="absolute text-sm font-500 leading-tight text-secondary-base duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] start-3 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 focus:text-xs peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
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

export default Input;
