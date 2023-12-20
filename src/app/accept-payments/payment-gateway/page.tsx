import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';
import Image from 'next/image';
import paymentGatewayBG from '@/assets/images/payment-gateway.jpg';
import Info from '@/components/Content/Info/Info';
import { cards } from '@/utils/data';

const PaymentGateway = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start p-[150px] min-h-[660px] relative">
        <Image
          src={paymentGatewayBG}
          alt="paymentGateway Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="flex flex-col justify-center items-start gap-9 rounded-lg relative">
          <div className="flex flex-col gap-4">
            <p className="heading-primary">
              <span className="text-primary-base">
                Trusted Payment Technology
              </span>
              <br></br>
              <span>by Pakistan’s leading</span>
              <br></br>
              <span>businesses & entrepreneurs</span>
            </p>
            <p className="text-secondary-base text-dark text-base font-normal leading-tight">
              <span>
                Grow your business with Payment Gateway that powers Pakistan’s
                largest brands and even through
              </span>{' '}
              <br></br>
              <span>easypaisa app authorization.</span>
            </p>
          </div>
          <Button
            label="Sign up"
            className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
          />
        </div>
      </div>
      <div className="flex flex-col pb-[120px]">
        <Info title={'payment gateway'} cardsArray={cards} />
        <Partners />
      </div>
    </div>
  );
};

export default PaymentGateway;
