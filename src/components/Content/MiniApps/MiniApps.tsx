import React from 'react';
import miniApps from '../../../assets/images/miniapps.png';
import Image from 'next/image';

const MiniApps = (): JSX.Element => {
  return (
    <div id="NewRootRoot" className="flex flex-col w-full mb-[20px]">
      {/* <div className="ma-bg bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center min-h-[640px] shrink-0 items-center"> */}
      <div className="min-h-[640px] flex flex-col justify-center shrink-0 items-center relative">
        <Image
          src={miniApps}
          alt="miniApps Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] bg-neutral-white-base flex flex-col justify-center gap-16 w-2/3 h-auto shrink-0 items-center p-[40px] rounded-lg relative">
          <div
            id="MiniApps1"
            className="text-5xl font-semibold leading-[60px] text-secondary-base"
          >
            Mini <span className="text-primary-base">Apps</span>
          </div>
          <div className="gap-9 grid lg:grid-cols-3 md:grid-cols-1">
            <div className=" leading-[20px] font-normal text-secondary-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="leading-[20px] font-normal text-secondary-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="leading-[20px] font-normal text-secondary-600 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniApps;
