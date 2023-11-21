import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ICardProps {
  label: string;
  logo: StaticImageData | string;
  className?: string;
  children?: React.ReactNode;
  description?: string;
}

const Card = ({
  logo,
  label,
  description,
  className,
  children
}: ICardProps) => {
  return (
    <div
      id="CardARoot"
      className={`${className} transition duration-300  border-solid border-greyish2 bg-greyish3 flex flex-col gap-[60px] items-start pt-8 pb-6 px-5 border-[0.5px] rounded-[8px] cursor-pointer`}
    >
      <div className="w-[48px] h-[48px] flex items-center justify-center">
        <Image src={logo} alt={'image'} width={32} height={32} />
      </div>
      <div className="self-stretch flex flex-col gap-[24px] items-start">
        <div id={label} className="text-lg font-semibold leading-[32px] w-full">
          {label}
        </div>
        <p className="leading-[20px] text-darkShade1 text-base w-full">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
