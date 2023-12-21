import React from 'react';

const SuccessModal = () => {
  return (
    <>
      <div id="NewRootRoot" className="flex flex-row w-1/2 items-start">
        <div className="border-solid border-[#d0d0d0] bg-white flex flex-col gap-12 w-full font-['SF_Pro_Display'] items-start pt-5 pb-16 px-5 border rounded-lg">
          <div className="flex flex-col ml-20 gap-4 w-5/6 items-start">
            <img
              src="https://file.rendit.io/n/fN4i24kj0W0RCAVOG2Yd.svg"
              alt="Close1"
              id="Close1"
              className="ml-[458px] w-6"
            />
            <div className="flex flex-col gap-2 w-5/6 items-start">
              <img
                src="https://file.rendit.io/n/20UgKhtXtXRpK3NeHCXK.png"
                alt="Bitmap"
                id="Bitmap"
                className="ml-32"
              />
              <div className="flex flex-col gap-1 w-full font-['SF_Pro_Display'] items-start">
                <div className="relative flex flex-row pt-1 w-4/5 items-start">
                  <div className="text-5xl font-semibold leading-[60px] text-[#322c3c] absolute top-0 left-20 h-16 w-56">
                    Dashboard
                  </div>
                  <div className="text-center text-2xl font-semibold leading-[30px] text-[#322c3c] relative mt-6 mb-1">
                    Account Created Successfully
                  </div>
                </div>
                <div className="text-center leading-[20px] text-[#5b5663] w-full">
                  Congratulations! You have signed up successfully for the
                  Sandbox Account for [ Lorem Ipsum ]
                </div>
              </div>
            </div>
          </div>
          <button
            id="ButtonDefault"
            className="text-center text-sm font-semibold leading-[18px] text-white bg-[#21b25f] flex flex-row ml-[145px] w-1/2 h-12 cursor-pointer items-start pt-5 px-3 rounded-lg"
          >
            Continue
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default SuccessModal;
