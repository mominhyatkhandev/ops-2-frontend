import React, { ReactNode } from 'react';

interface IAcceptPaymentWrapper {
  children: ReactNode;
  //   className?: string;
}

function AcceptPaymentWrapper({ children }: IAcceptPaymentWrapper) {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-center justify-start p-[150px] min-h-[660px] relative">
          {children}
        </div>
      </div>
    </>
  );
}

export default AcceptPaymentWrapper;
