import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Image from 'next/image';
import paymentGatewayBG from '@/assets/images/payment-gateway.jpg';
import Info from '@/components/Content/Info/Info';
import { TCard } from '@/types/static/static';
import web from '@/assets/icons/global.svg';

const QRPayments = () => {
  const cards: TCard[] = [
    {
      label: 'Smooth & Easy onboarding process',
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
      {/* <div className="pg-bg flex items-center justify-start bg-center bg-cover bg-no-repeat p-[200px] mb-[20px] h-[660px] relative"> */}
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
            <span className="text-primary-base"> Safe, secure and easy</span>{' '}
            payments through QR code
          </p>
          <p className="text-dark text-base font-normal w-1/2 leading-[20px]">
            Hassel free real time settlements by receiving payment through
            easypaisa QR/Till in a fast and secure way! Enjoy amazing cash back
            offerings on becoming easypaisa QR Merchant.
          </p>
          <Button label="Sign up" className="button-primary" />
        </div>
      </div>
      <Info title={'qr payments'} cardsArray={cards} />
    </>
  );
};

export default QRPayments;
