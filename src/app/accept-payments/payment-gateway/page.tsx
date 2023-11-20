import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';

const PaymentGateway = () => {
  return (
    <div>
      <div className="flex items-center justify-start bg-center bg-cover bg-no-repeat p-[200px] mb-[20px] h-[660px]">
        <div className="flex w-auto flex-col justify-center items-start gap-[48px] rounded-lg">
          <p className="font-semibold text-xl text-dark leading-[60px]">
            <span className="text-primary"> Trusted Payment Technology</span> by
            Pakistan’s leading businesses & entrepreneurs
          </p>
          <p className="text-dark text-base font-normal w-1/2 leading-[20px]">
            Grow your business with Payment Gateway that powers Pakistan’s
            largest brands and even through easypaisa app authorization.
          </p>
          <Button
            label="Sign up"
            className="w-[200px] py-[19px] px-[10px] min-h-[48px] bg-primary text-white rounded-[8px]"
          />
        </div>
      </div>
      <Partners />
    </div>
  );
};

export default PaymentGateway;
