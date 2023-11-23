import React from 'react';
import Card from '../../UI/Card/Card';
import { TCard } from '@/types/static/static';

interface IInfoProp {
  title?: string;
  cardsArray?: TCard[];
}

const Info = ({ title, cardsArray }: IInfoProp): JSX.Element => {
  return (
<<<<<<< Updated upstream
    <div className="min-h-[640px] w-full inline-flex flex-col ">
      {/* <div className="w-full gap-[36px] flex flex-col justify-center items-center"> */}
      <div className="w-full gap-[36px] flex flex-col ">
=======
    <div className="min-h-[640px] w-full inline-flex flex-col justify-center items-center">
      <div className="w-full gap-9 flex flex-col justify-center items-center">
>>>>>>> Stashed changes
        {title == 'payment gateway' ? (
          <div className="px-[200px]">
            <h1 className="heading-primary">
              6 powerful reasons to chose Easypaisa <br />
              <span className="text-primary-base">Payment Gateway</span>
            </h1>

            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </div>
        ) : title === 'payment link' ? (
<<<<<<< Updated upstream
          <div className="px-[200px]">
            <h1 className="heading-primary">
=======
          <>
            <h1 className="text-5xl font-semibold">
>>>>>>> Stashed changes
              Get Registered, start accepting payments.
              <br />
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </div>
        ) : title === 'qr payments' ? (
          <>
<<<<<<< Updated upstream
            <div className="px-[200px]">
              <h1 className="heading-primary">
                Get Registered, start accepting payments.
                <br />
                <span className="text-primary-base">It’s that simple!</span>
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </div>
          </>
        ) : title == 'subscription' ? (
          <div className="px-[200px]">
            <h1 className="heading-primary">
=======
            <h1 className="text-5xl font-semibold">
>>>>>>> Stashed changes
              Get Registered, start accepting payments.
              <br />
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
<<<<<<< Updated upstream
          </div>
        ) : title == 'mini apps' ? (
          <>
            <div className="px-[200px]">
              <h1 className="heading-primary">
                Get Registered, start accepting payments.
                <br />
                <span className="text-primary-base">It’s that simple!</span>
              </h1>
              <p className="text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </div>
=======
          </>
        ) : title == 'subscription' ? (
          <>
            <h1 className="text-5xl font-semibold">
              Get Registered, start accepting payments.
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base font-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </>
        ) : title == 'mini apps' ? (
          <>
            <h1 className="text-5xl font-semibold">
              Get Registered, start accepting payments.
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base font-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
>>>>>>> Stashed changes
          </>
        ) : (
          <>
            <h1 className="text-5xl text-center font-semibold">
              Designed for{' '}
              <span className="text-primary-base">Entrepreneurs</span>
            </h1>
            <p className="text-base font-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </>
        )}

        <div className="py-[24px] px-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardsArray?.map((item, index) => {
            return (
              <Card
                key={index}
                logo={item.logo}
                label={item.label}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
