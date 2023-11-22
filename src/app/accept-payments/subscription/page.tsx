import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';
import Image from 'next/image';
import subscriptionBG from '@/assets/images/subscription.jpg';
import Info from '@/components/Content/Info/Info';

const Subscription = () => {
  return (
    <>
      <div className="flex items-center justify-start p-[200px] mb-[20px] h-[660px] relative">
        <Image
          src={subscriptionBG}
          alt="Subscription Background"
          layout="fill"
          // objectFit="cover"
          // height={100}
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex w-[710px] flex-col justify-center items-start gap-[48px] rounded-lg relative">
          <p className="heading-primary">
            <span className="text-primary"> Automate Recurring Payments</span>{' '}
            with EasyPaisa Subscriptions
          </p>
          <p className="text-dark text-base font-normal w-[750px] leading-[20px]">
            Collect recurring payments with multiple payment options to enable
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
