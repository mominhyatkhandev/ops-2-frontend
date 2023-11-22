import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Image from 'next/image';
import qrPaymentBG from '@/assets/images/qr-payment.jpg';
import Info from '@/components/Content/Info/Info';
import { cards } from '@/types/data';

const QRPayments = () => {
  return (
    <>
      {/* <div className="pg-bg flex items-center justify-start bg-center bg-cover bg-no-repeat p-[200px] mb-[20px] h-[660px] relative"> */}
      <div className="flex items-center justify-start p-[200px] mb-[20px] h-[660px] relative">
        <Image
          src={qrPaymentBG}
          alt="qrPayment Background"
          layout="fill"
          // objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex w-[710px] flex-col justify-center items-start gap-[48px] rounded-lg relative">
          <p className="heading-primary">
            <span className="text-primary-base"> Safe, secure and easy</span>{' '}
            <br />
            payments through QR code
          </p>
          <p className="text-secondary-base text-base font-normal w-[720px] leading-[20px]">
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
