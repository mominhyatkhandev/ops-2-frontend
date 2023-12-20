import Button from '@/components/UI/Button/PrimaryButton';
import InputPrimary from '@/components/UI/Inputs/InputPrimary';
import React from 'react';

const page = () => {
  return (
    <>
      <div
        id="SignupAccountOptionsRoot"
        className="bg-neutral-white-base flex flex-col pb-[124px]"
      >
        <div className="flex flex-col px-[150px] pt-[76px] gap-6 items-start">
          <div className="flex flex-col gap-2 items-start">
            <div className="text-5xl font-semibold leading-tight text-[#322c3c]">
              What would you like to Sign up for?
            </div>
            <div className=" leading-tight text-[#5b5663]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </div>
          </div>
          <div className="border-solid border-border-light bg-screen-grey flex flex-col justify-center px-[290px] py-[60px] gap-8 w-full items-center rounded-lg">
            <div className="w-full flex flex-col justify-between gap-4 items-start">
              <div className=" font-semibold leading-tight text-[#322c3c]">
                Please Select One Option
              </div>
              <div
                id="InputField"
                className="border-solid border-border-light bg-white flex flex-row justify-between w-full h-16 items-start pt-4 px-5 border rounded-lg"
              >
                <div className="flex flex-row gap-4 w-full items-start">
                  <img
                    src="https://file.rendit.io/n/vXZZAAi6JI9o5pNo67W9.svg"
                    alt="Vuesaxlinearglobal"
                    id="Vuesaxlinearglobal"
                    className="w-6"
                  />
                  <div
                    id="InputHeading"
                    className="text-sm w-full font-medium leading-tight text-[#322c3c] mt-1"
                  >
                    Online Payments
                  </div>
                </div>
                <div
                  id="Ellipse"
                  className="bg-[url(https://file.rendit.io/n/oJT5KXretMLunELLSXjO.svg)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row w-6 h-6 items-start pt-2 px-2"
                >
                  <img
                    src="https://file.rendit.io/n/q4Qk176WFSLiMD90E9hs.svg"
                    alt="Group"
                    className="w-2"
                  />
                </div>
              </div>
              <div
                id="InputField1"
                className="border-solid border-border-light bg-white flex flex-row justify-between w-full h-16 items-start pt-4 px-5 border rounded-lg"
              >
                <div className="flex flex-row gap-4 w-full items-start">
                  <img
                    src="https://file.rendit.io/n/v8u5idxKRGuj9g39CRVz.svg"
                    alt="Vuesaxlinearscanning"
                    id="Vuesaxlinearscanning"
                    className="w-6"
                  />
                  <div
                    id="InputHeading1"
                    className="text-sm  font-medium leading-tight text-[#322c3c] mt-1"
                  >
                    QR Payments
                  </div>
                </div>
                <img
                  src="https://file.rendit.io/n/2de4wvF0uOrZyBF4WFNh.svg"
                  alt="IconCheckbox1"
                  id="IconCheckbox1"
                  className="w-6"
                />
              </div>
              <div
                id="InputField2"
                className="border-solid border-border-light bg-white flex flex-row justify-between w-full h-16 items-start pt-4 px-5 border rounded-lg"
              >
                <div className="flex flex-row gap-4 w-full items-start">
                  <img
                    src="https://file.rendit.io/n/JVFthuBWFIsCMvJFGu4A.svg"
                    alt="IconInputfield2"
                    id="IconInputfield2"
                    className="w-6"
                  />
                  <div
                    id="InputHeading2"
                    className="text-sm  font-medium leading-tight text-[#322c3c] mt-1"
                  >
                    Mini Apps
                  </div>
                </div>
                <img
                  src="https://file.rendit.io/n/2de4wvF0uOrZyBF4WFNh.svg"
                  alt="IconCheckbox2"
                  id="IconCheckbox2"
                  className="w-6"
                />
              </div>
            </div>
            <Button
              label="Next"
              className="button-primary w-[270px] text-sm px-3 py-[19px]"
            />
            {/* <InputPrimary label="Username" type="text" /> */}
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default page;
