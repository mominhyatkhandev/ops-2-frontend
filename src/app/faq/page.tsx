import React from 'react';

const FAQ = () => {
  return (
    <div
      id="NewRootRoot"
      className="flex flex-row w-full items-start h-[500px]"
    >
      <div className="bg-screen-grey flex flex-col justify-end w-full h-[313px] items-start">
        <div className="flex flex-col ml-40 gap-12 items-start">
          <div className="flex flex-col gap-2 w-full items-start">
            <div
              id="Line"
              className="border-solid border-[#e7e7e7] ml-[294px] w-1/2 h-2 border-r border-l-0 border-y-0"
            />
            <div className="text-5xl font-semibold leading-[60px] text-secondary-base">
              How can we help you?
            </div>
          </div>
          <div className="flex flex-row gap-8 w-full items-start">
            <div className="flex flex-col gap-3 w-1/2 items-start">
              <div className="font-medium leading-[20px] text-[#21b25f]">
                Online payment gateway
              </div>
              <div
                id="Line1"
                className="border-solid border-[#21b25f] w-full h-px border-t-2 border-b-0 border-x-0"
              />
            </div>
            <div
              id="Line2"
              className="border-solid border-[#d0d0d0] w-px h-2 mt-0 mr-px border-r border-l-0 border-y-0"
            />
            <div className="font-['SF_Pro_Display'] font-medium leading-[20px] text-[#322c3c]">
              QR payments
            </div>
            <div
              id="Line3"
              className="border-solid border-[#d0d0d0] w-px h-2 mt-0 mr-px border-r border-l-0 border-y-0"
            />
            <div className="font-['SF_Pro_Display'] font-medium leading-[20px] text-[#322c3c]">
              Mini Apps
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
