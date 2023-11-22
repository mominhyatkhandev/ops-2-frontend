import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';
import Image from 'next/image';
import paymentLinkBG from '@/assets/images/payment-link.jpg';
import Info from '@/components/Content/Info/Info';
import { cards } from '@/types/data';

const PaymentLink = () => {
  return (
    <>
      <div className="flex items-center justify-start p-[200px] mb-[20px] h-[660px] relative">
        <Image
          src={paymentLinkBG}
          alt="paymentGateway Background"
          layout="fill"
          // objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex w-[710px] flex-col justify-center items-start gap-[48px] rounded-lg relative">
          <p className="heading-primary">
            <span className="text-primary-base">Collect Online Payments</span>
            <br />
            from anywhere in Pakistan
          </p>
          <p className="text-secondary-base text-base font-normal w-[657] leading-[20px]">
            A Feature Rich Ecosystem for Your Brand Showcase your Products and
            Services to Pakistan's Largest online Audience
          </p>
          <Button label="Sign up" className="button-primary" />
        </div>
      </div>
      <Info title={'payment link'} cardsArray={cards} />
      <Partners />
    </>
  );
};

export default PaymentLink;
