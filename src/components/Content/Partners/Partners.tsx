import Image from 'next/image';
import React from 'react';
import logo from '../../../assets/logo.svg';

const Partners = () => {
  return (
    <div className="min-h-[640px] w-full inline-flex flex-col items-center justify-center mb-[20px]">
      <div className="gap-[36px] flex justify-center items-center flex-col">
        <h1 className="text-xl text-center font-semibold">
          We power Pakistn’s biggest online brands
        </h1>
        <div className="bg-primary w-1/2 py-[24px] px-[20px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          <Image src={logo} alt="logo" width={100} height={100} />
          <Image src={logo} alt="logo" width={100} height={100} />
          <Image src={logo} alt="logo" width={100} height={100} />
          <Image src={logo} alt="logo" width={100} height={100} />
          <Image src={logo} alt="logo" width={100} height={100} />
          <Image src={logo} alt="logo" width={100} height={100} />
          <Image src={logo} alt="logo" width={100} height={100} />
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
