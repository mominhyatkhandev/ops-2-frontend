import React from 'react';
import Logo from '../../../assets/icons/logo.svg';
import Button from '../../UI/Button/PrimaryButton';
import heroBanner from '../../../assets/images/hero1.png';
import Image from 'next/image';

const HeroBanner = (): JSX.Element => {
  return (
    <main className="flex items-center justify-start p-[150px] min-h-[640px] relative">
      <Image
        src={heroBanner}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute max-w-full inset-0"
      />

      <div className="flex flex-col gap-9 justify-center items-start rounded-lg relative">
        <div className="flex flex-col gap-2">
          <span className="flex justify-start items-center gap-2">
            <p className="text-2xl text-secondary-base font-semibold">
              Welcome to
            </p>
            <Image src={Logo} alt="logo" width={100} height={40} />
          </span>
          <p className="font-semibold text-5xl text-secondary-base leading-tight">
            Merchant Portal
          </p>
          <div className="text-secondary-base text-base leading-tight font-normal">
            Introductory text, lorem ipsum, including QR,<br></br> Online
            Payments and Mini-APPS
          </div>
        </div>
        <Button
          label="Sign up"
          className="button-primary w-[200px] px-3 py-[19px]"
        />
      </div>
    </main>
  );
};

export default HeroBanner;
