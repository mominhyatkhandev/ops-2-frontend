import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Image from 'next/image';
import qrPaymentBG from '@/assets/images/qr-payment.jpg';
import Info from '@/components/Content/Info/Info';
import { cards } from '@/utils/data';

const QRPayments = () => {
  return (
    <div className="flex flex-col">
      {/* <div className="pg-bg flex items-center justify-start bg-center bg-cover bg-no-repeat p-[200px] mb-[20px] h-[660px] relative"> */}
      <div className="flex items-center justify-start p-[150px] min-h-[640px] relative">
        <Image
          src={qrPaymentBG}
          alt="qrPayment Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex flex-col justify-center items-start gap-9 rounded-lg relative">
          <div className="flex flex-col gap-4">
            <p className="heading-primary">
              <span className="text-primary-base"> Safe, secure and easy</span>{' '}
              <br />
              payments through QR code
            </p>
            <p className="text-secondary-base text-base font-normal w-[720px] leading-tight">
              Hassel free real time settlements by receiving payment through
              easypaisa QR/Till in a fast and <br /> secure way! Enjoy amazing
              cash back offerings on becoming easypaisa QR Merchant.
            </p>
          </div>
          <Button
            label="Sign up"
            className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Info title={'qr payments'} cardsArray={cards} />
      </div>
    </div>
  );
};

export default QRPayments;
