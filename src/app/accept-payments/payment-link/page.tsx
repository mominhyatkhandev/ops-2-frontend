import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';
import Image from 'next/image';
import paymentLinkBG from '@/assets/images/payment-link.jpg';
import Info from '@/components/Content/Info/Info';
import { cards } from '@/utils/data';

const PaymentLink = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start p-[150px] min-h-[640px] relative">
        <Image
          src={paymentLinkBG}
          alt="paymentGateway Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex flex-col justify-center items-start gap-9 rounded-lg relative">
          <div className="flex flex-col gap-4">
            <p className="heading-primary">
              <span className="text-primary-base">Collect Online Payments</span>
              <br />
              from anywhere in Pakistan
            </p>
            <p className="text-secondary-base text-base font-normal w-[657] leading-tight">
              A Feature Rich Ecosystem for Your Brand Showcase your Products and
              Services to Pakistan's <br /> Largest online Audience
            </p>
          </div>
          <Button
            label="Sign up"
            className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Info title={'payment link'} cardsArray={cards} />
        {/* <Partners /> */}
      </div>
    </div>
  );
};

export default PaymentLink;
