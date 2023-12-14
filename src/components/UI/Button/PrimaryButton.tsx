'use client';
import React from 'react';

interface IButton {
  label: string;
  className?: string;
  onClickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ label, onClickHandler = () => {}, className }: IButton) => {
  return (
    <button className={`${className}`} onClick={onClickHandler}>
      <div className="w-full">{label}</div>
    </button>
  );
};

export default Button;
