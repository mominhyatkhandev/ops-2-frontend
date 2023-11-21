import React from 'react';
import Logo from '../../../assets/icons/logo.svg';
import Button from '../../UI/Button/PrimaryButton';
import heroBanner from '../../../assets/images/hero1.png';
import Image from 'next/image';

const HeroBanner = (): JSX.Element => {
  return (
    <main className="flex items-center justify-start p-[200px] mb-[20px] h-[660px] relative">
      <Image
        src={heroBanner}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0"
      />

      <div className="flex flex-col gap-[48px] justify-center items-start rounded-lg relative">
        <div className="flex flex-col gap-[24px]">
          <span className="flex justify-start items-center gap-[10px]">
            <p className="text-lg text-dark font-semibold">Welcome to</p>
            <Image src={Logo} alt="logo" width={100} height={40} />
          </span>
          <p className="font-semibold text-xl text-dark leading-[60px]">
            Merchant Portal
          </p>
        </div>
        <p className="text-dark text-base font-normal w-1/2">
          Introductory text, lorem ipsum, including QR, Online Payments and
          Mini-APPS
        </p>
        <Button
          label="Sign up"
          className="w-[200px] py-[20px] px-[10px] min-h-[48px] bg-primary-base text-white rounded-[8px]"
        />
      </div>
    </main>
  );
};

export default HeroBanner;
