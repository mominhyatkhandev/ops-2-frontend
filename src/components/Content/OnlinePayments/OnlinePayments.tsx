import React from 'react';
import Image from 'next/image';
import onlinePayment from '../../../assets/images/onlinePayments.png';

const OnlinePayments = (): JSX.Element => {
  return (
    <div id="NewRootRoot" className="flex flex-col w-full mb-[20px]">
      <div className="bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end shrink-0 items-end pr-40 py-24 relative">
        {/* <div className="bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end min-h-[640px] shrink-0 items-end pr-40 py-24"> */}

        <Image
          src={onlinePayment}
          alt="Payments Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] bg-neutral-white-base max-w-[560px] flex flex-col justify-center py-[40px] px-[32px] gap-[60px] shrink-0 items-start rounded-lg relative ">
          <div
            id="OnlinePayments1"
            className="text-5xl font-semibold text-secondary-base"
          >
            Online <span className="text-primary-base">Payments</span>
          </div>
          <div className="leading-[20px] text-secondary-600 font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt
            ut labore et doloreLorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlinePayments;
