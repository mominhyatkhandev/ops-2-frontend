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
      <div className="px-[150px] w-full inline-flex flex-col items-center justify-center gap-9">
        <div className="gap-9 flex justify-center items-center flex-col">
          <h1 className="text-5xl text-center font-semibold">
            We power Pakistan’s biggest{' '}
            <span className="text-primary-base">online brands</span>
          </h1>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-5 ">
          {partnersImages.map((item, index) => (
            <div
              key={index}
              className="py-9 px-5 flex items-center justify-center"
            >
              <Image
                src={item}
                key={index}
                alt={`Partner Logo ${index}`}
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;
