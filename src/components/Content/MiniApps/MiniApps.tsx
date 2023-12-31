import React from 'react';
import miniApps from '../../../assets/images/miniapps.png';
import Image from 'next/image';

const MiniApps = (): JSX.Element => {
  return (
    <div id="NewRootRoot" className="flex flex-col w-full">
      {/* <div className="ma-bg bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center min-h-[640px] shrink-0 items-center"> */}
      <div className="flex flex-col justify-center shrink-0 px-[254px] py-[158px] items-center relative">
        <Image
          src={miniApps}
          alt="miniApps Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] bg-neutral-white-base flex flex-col justify-center gap-12 shrink-0 items-center p-10 rounded-lg relative">
          <div
            id="MiniApps1"
            className="text-5xl font-semibold leading-tight text-secondary-base"
          >
            Mini <span className="text-primary-base leading-tight">Apps</span>
          </div>
          <div className="gap-9 grid lg:grid-cols-3 md:grid-cols-1">
            <div className="text-base leading-tight font-normal text-secondary-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="text-base leading-tight font-normal text-secondary-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="text-base leading-tight font-normal text-secondary-600">
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
