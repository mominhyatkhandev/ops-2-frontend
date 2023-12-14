'use client';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';

interface ICardProps {
  label: string;
  logo: { image1: StaticImageData; image2: StaticImageData };
  className?: string;
  children?: React.ReactNode;
  description?: string;
}

const Card = ({ logo, label, description }: ICardProps) => {
  const [isCardHovered, setIsCardHovered] = useState(false);
  return (
    <div
      className={`group border-solid min-h-[300px] border-border-light bg-screen-grey flex flex-col items-start justify-start py-6 px-5 border-[0.5px] rounded-[8px] cursor-pointer hover:bg-primary-base hover:text-white duration-300 ease-out gap-[60px]`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {isCardHovered ? (
        <div className="">
          <Image src={logo.image2} alt={'image2'} />
        </div>
      ) : (
        <div className="">
          <Image src={logo.image1} alt={'image'} />
        </div>
      )}

      <div className="self-stretch flex flex-col gap-4 items-start">
        <div className="text-2xl text-secondary-base leading-tight font-semibold w-full group-hover:text-white">
          {/* {label} */}
          <>
            {label == 'Online Payments' ? (
              <>
                Online <br></br>
                Payments
              </>
            ) : label == 'QR Integration' ? (
              <>
                QR <br></br>
                Integration
              </>
            ) : label == 'Mini APPS' ? (
              <>
                Mini <br></br>
                Apps
              </>
            ) : label == 'Payment Link' ? (
              <>
                Payment <br></br>
                Link
              </>
            ) : (
              <>{label}</>
            )}
          </>
        </div>
        <div className="text-base leading-tight font-normal text-secondary-600 group-hover:text-white w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
