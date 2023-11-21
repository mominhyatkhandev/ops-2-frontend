import React from 'react';
import Card from '../../UI/Card/Card';
import { TCard } from '@/types/static/static';

interface IInfoProp {
  title?: string;
  cardsArray?: TCard[];
}

const Info = ({ title, cardsArray }: IInfoProp): JSX.Element => {
  return (
    <div className="min-h-[640px] w-full inline-flex flex-col justify-center items-center">
      <div className="w-full gap-[36px] flex flex-col justify-center items-center">
        {title == 'payment gateway' ? (
          <div className="">
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
          <>
            <h1 className="text-xl font-semibold">
              Get Registered, start accepting payments.
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </>
        ) : title === 'qr payments' ? (
          <>
            <h1 className="text-xl text-center font-semibold">
              Get Registered, start accepting payments.
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </>
        ) : title == 'subscription' ? (
          <>
            <h1 className="text-xl font-semibold">
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
            <h1 className="text-xl font-semibold">
              Get Registered, start accepting payments.
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base font-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </>
        ) : (
          <>
            <h1 className="text-xl text-center font-semibold">
              Designed for{' '}
              <span className="text-primary-base">Entrepreneurs</span>
            </h1>
            <p className="text-base font-normal text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </>
        )}

        <div className="py-[24px] px-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
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
