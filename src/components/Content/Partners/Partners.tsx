import Image from 'next/image';
import React from 'react';
import logo from '../../../assets/icons/logo.svg';
import albarakabankLogo from '@/assets/images/Partners/albaraka-banking.png';
import alfalahbankLogo from '@/assets/images/Partners/alfalah-banking.png';
import alliedbankLogo from '@/assets/images/Partners/allied-banking.png';
import askaribankLogo from '@/assets/images/Partners/askari-banking.png';
import faysalbankLogo from '@/assets/images/Partners/faysal banking.png';
import habibbankLogo from '@/assets/images/Partners/habib-banking.png';
import islamibankLogo from '@/assets/images/Partners/islami-banking.png';
import khushalibankLogo from '@/assets/images/Partners/khushali-banking.png';
import mufgbankLogo from '@/assets/images/Partners/mufg-banking.png';
import mustakeembankLogo from '@/assets/images/Partners/mustakeem-banking.png';
import soneribankLogo from '@/assets/images/Partners/soneri-banking.png';
import ublbankLogo from '@/assets/images/Partners/ubl-banking.png';

const Partners = (): JSX.Element => {
  const partnersImages = [
    albarakabankLogo,
    alfalahbankLogo,
    alliedbankLogo,
    askaribankLogo,
    faysalbankLogo,
    habibbankLogo,
    islamibankLogo,
    khushalibankLogo,
    mufgbankLogo,
    mustakeembankLogo,
    soneribankLogo,
    ublbankLogo
  ];

  return (
    <>
      <div className="min-h-[640px] px-[200px] w-full inline-flex flex-col items-center justify-center mb-[20px]">
        <div className="gap-[36px] flex justify-center items-center flex-col">
          <h1 className="text-xl text-center font-semibold">
            We power Pakistan’s biggest{' '}
            <span className="text-primary">online brands</span>
          </h1>
        </div>
        <div className="justify-center w-full py-[24px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-[20px] ">
          {partnersImages.map((item, index) => (
            <Image
              src={item}
              key={index}
              alt={`Partner Logo ${index}`}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
