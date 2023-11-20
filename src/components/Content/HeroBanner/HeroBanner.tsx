import Image from 'next/image';
import React from 'react';
import Logo from '../../../assets/logo.svg';
import Button from '../../UI/Button/PrimaryButton';
import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <div className="hb-bg flex items-center justify-start bg-center bg-cover bg-no-repeat p-[200px] mb-[20px] h-[660px]">
      <div className="flex flex-col gap-[48px] justify-center items-start rounded-lg">
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
          className="w-[200px] py-[20px] px-[10px] min-h-[48px] bg-primary text-white rounded-[8px]"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
