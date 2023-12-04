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
      className={`group border-solid h-[300px] border-border-light bg-screen-grey flex flex-col items-start justify-center py-6 px-5 border-[0.5px] rounded-[8px] cursor-pointer hover:bg-primary-base hover:text-white duration-300 ease-out`}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
    >
      {isCardHovered ? (
        <div className="">
          <Image src={logo.image2} alt={'image2'} width={48} height={48} />
        </div>
      ) : (
        <div className="">
          <Image src={logo.image1} alt={'image'} height={48} width={48} />
        </div>
      )}

      <div className="self-stretch flex flex-col gap-[24px] items-start mt-[60px] ">
        <div className="text-2xl font-semibold w-full group-hover:text-white">
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
        <div className="leading-[20px] text-secondary-600 group-hover:text-white text-base w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
