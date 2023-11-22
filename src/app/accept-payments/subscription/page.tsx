import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';
import Image from 'next/image';
import paymentGatewayBG from '@/assets/images/payment-gateway.jpg';
import Info from '@/components/Content/Info/Info';

const Subscription = () => {
  return (
    <>
      <div className="flex items-center justify-start p-[200px] mb-[20px] h-[660px] relative">
        <Image
          src={paymentGatewayBG}
          alt="paymentGateway Background"
          layout="fill"
          // objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex w-[710px] flex-col justify-center items-start gap-[48px] rounded-lg relative">
          <p className="heading-primary">
            <span className="text-primary-base">
              {' '}
              Automate Recurring Payments
            </span>{' '}
            with EasyPaisa Subscriptions
          </p>
          <p className="text-secondary-base text-base font-normal w-1/2 leading-[20px]">
            collect recurring payments with multiple payment options to enable
            growth for your subscription based businesses
          </p>
          <Button label="Sign up" className="button-primary" />
        </div>
      </div>
      <Info title={'subscription'} />
      <Partners />
    </>
  );
};

export default Subscription;
