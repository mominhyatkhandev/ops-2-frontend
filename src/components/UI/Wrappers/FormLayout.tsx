import React, { ReactNode } from 'react';

interface IFormLayout {
  children: ReactNode;
  className?: string;
}

const FormLayout = ({ children, className }: IFormLayout) => {
  return (
    <div className="px-[150px]">
      <div className="border-[0.5px] rounded-lg border-border-light bg-screen-grey px-[290px] py-[60px]">
        {children}
      </div>
    </div>
  );
};
export default FormLayout;
