import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ICardProps {
  label: string;
  // logo: { image1: StaticImageData | string; image2: StaticImageData | string };
  // logo: { image1: StaticImageData; image2: StaticImageData } | string;
  logo: { image1: StaticImageData; image2: StaticImageData };
  className?: string;
  children?: React.ReactNode;
  description?: string;
}

const Card = ({
  logo,
  label,
  description // className,
} // children
: ICardProps) => {
  return (
    //   <div
    //     className={` group border-solid border-border-light bg-screen-grey flex flex-col gap-[60px] items-start pt-8 pb-6 px-5 border-[0.5px] rounded-[8px] cursor-pointer  hover:bg-primary-base hover:text-white
    // `}
    //   >
    //     <div className="w-[48px] h-[48px] flex items-center justify-center visible group-hover:invisible ">
    //       <Image src={logo.image1} alt={'image'} />
    //     </div>

    //     <div className="w-[48px] h-[48px]  items-center justify-center collapse group-hover:visible">
    //       <Image
    //         src={logo.image2}
    //         alt={'image2'}
    //         // width={32}
    //         // height={32}
    //         style={{ color: 'red', background: 'blue' }}
    //       />
    //     </div>

    //     <div className="self-stretch flex flex-col gap-[24px] items-start">
    //       <div className="text-lg font-semibold leading-[32px] w-full">
    //         {label}
    //       </div>
    //       <div className="leading-[20px] text-secondary-600 group-hover:text-white text-base w-full">
    //         {description}
    //       </div>
    //     </div>
    //   </div>

    <div
      className={`group relative border-solid border-border-light bg-screen-grey flex flex-col gap-[60px] items-start pt-8 pb-6 px-5 border-[0.5px] rounded-[8px] cursor-pointer hover:bg-primary-base hover:text-white`}
    >
      <div className="w-[48px] h-[48px] flex items-center justify-center transition-opacity opacity-100 group-hover:opacity-0 absolute">
        <Image src={logo.image1} alt={'image'} />
      </div>
<<<<<<< Updated upstream

      <div className="w-[48px] h-[48px]  items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 absolute">
        <Image
          src={logo.image2}
          alt={'image2'}
          // width={32}
          // height={32}
          // style={{ color: 'red', background: 'blue' }}
        />
      </div>

      <div className="self-stretch flex flex-col gap-[24px] items-start mt-[60px] ">
        <div className="text-lg font-semibold leading-[32px] w-full">
=======
      <div className="self-stretch flex flex-col gap-6 items-start">
        <div
          id={label}
          className="text-2xl font-semibold leading-[32px] w-full"
        >
>>>>>>> Stashed changes
          {label}
        </div>
        <div className="leading-[20px] text-secondary-600 group-hover:text-white text-base w-full">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
