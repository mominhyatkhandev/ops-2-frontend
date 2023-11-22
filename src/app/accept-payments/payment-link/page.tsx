import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';
import Image from 'next/image';
import web from '@/assets/icons/global.svg';
import paymentGatewayBG from '@/assets/images/payment-gateway.jpg';
import Info from '@/components/Content/Info/Info';
import { TCard } from '@/types/static/static';

const PaymentLink = () => {
  const cards: TCard[] = [
    {
      label: 'Digital Activation',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    },
    {
      label: 'Payment Sources',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    },
    {
      label: 'Easy Integration',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    },
    {
      label: 'Instant Settlement',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    }
  ];
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
            <span className="text-primary-base">Collect Online Payments</span>{' '}
            with from anywhere in Pakistan
          </p>
          <p className="text-secondary-base text-base font-normal w-1/2 leading-[20px]">
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
