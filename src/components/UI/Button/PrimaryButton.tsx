'use client';
import React from 'react';

interface IButton {
  label: string;
  type?: 'button' | 'submit';
  className?: string;
  isDisabled?: boolean;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  type = 'button',
  onClickHandler = () => {},
  className,
  isDisabled = false
}: IButton) => {
  return (
    <button
      type={type}
      className={`${
        isDisabled
          ? 'bg-neutral-black-300 cursor-default'
          : 'bg-primary-base cursor-pointer'
      } ${className}`}
      onClick={onClickHandler}
      disabled={isDisabled}
    >
      <div className="w-full">{label}</div>
    </button>
  );
};

export default Button;
