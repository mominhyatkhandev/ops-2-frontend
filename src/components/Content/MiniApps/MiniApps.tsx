import React from 'react';
import './MiniApps.css';

const MiniApps = () => {
  return (
    <div id="NewRootRoot" className="flex flex-col w-full mb-[20px]">
      <div className="ma-bg bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-center min-h-[640px] shrink-0 items-center">
        <div className="shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] bg-white flex flex-col justify-center gap-16 w-2/3 h-auto shrink-0 items-center p-[40px] rounded-lg">
          <div
            id="MiniApps1"
            className="text-xl font-semibold leading-[60px] text-dark"
          >
            Mini <span className="text-primary">Apps</span>
          </div>
          <div className="gap-[36px] grid lg:grid-cols-3 md:grid-cols-1">
            <div className=" leading-[20px] font-normal text-darkShade1 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="leading-[20px] font-normal text-darkShade1 text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmodtempor
              incididunt ut labore et doloreLorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </div>
            <div className="leading-[20px] font-normal text-darkShade1 text-base">
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
