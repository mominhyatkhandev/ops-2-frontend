'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface IButton {
  label: string;
  type?: 'button' | 'submit';
  className?: string;
  isDisabled?: boolean;
  routeName: string;
  // onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  type = 'button',
  // onClickHandler = () => {},
  routeName,
  className,
  isDisabled = false
}: IButton) => {
  const router = useRouter();
  const handleClick = () => {
    console.log(`Button was clicked for route: ${routeName}`);
    router.push(routeName);
  };

  return (
    <button
      type={type}
      className={`${
        isDisabled
          ? 'bg-neutral-black-300 cursor-default'
          : 'bg-primary-base cursor-pointer'
      } ${className}`}
      disabled={isDisabled}
      onClick={handleClick}
    >
      <div className="w-full">{label}</div>
    </button>
  );
};

export default Button;
