import React from 'react';
import Logo from '../../../assets/icons/logo.svg';
import Button from '../../UI/Button/PrimaryButton';
import heroBanner from '../../../assets/images/hero1.png';
import Image from 'next/image';

const HeroBanner = (): JSX.Element => {
  return (
    <main className="flex items-center justify-start p-[150px] mb-[20px] min-h-[660px] relative">
      <Image
        src={heroBanner}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />

      <div className="flex flex-col gap-[48px] justify-center items-start rounded-lg relative">
        <div className="flex flex-col gap-6">
          <span className="flex justify-start items-center gap-[10px]">
            <p className="text-2xl text-secondary-base font-semibold">
              Welcome to
            </p>
            <Image src={Logo} alt="logo" width={100} height={40} />
          </span>
          <p className="font-semibold text-5xl text-secondary-base leading-[60px]">
            Merchant Portal
          </p>
        </div>
        <p className="text-secondary-base text-base font-normal w-1/2">
          Introductory text, lorem ipsum, including QR, Online Payments and
          Mini-APPS
        </p>
        <Button label="Sign up" className="button-primary" />
      </div>
    </main>
  );
};

export default HeroBanner;
