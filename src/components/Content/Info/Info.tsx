import React from 'react';
import Card from '../../UI/Card/Card';
import { TCard } from '@/types/static/static';

interface IInfoProp {
  title?: string;
  cardsArray?: TCard[];
}

const Info = ({ title, cardsArray }: IInfoProp): JSX.Element => {
  return (
    <div className="min-h-[640px] w-full inline-flex flex-col justify-center items-center gap-12">
      <div className="w-full gap-9 flex flex-col justify-center items-start">
        {title == 'payment gateway' ? (
          <div className="px-[150px] flex flex-col justify-center items-start gap-8">
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
          <div className="px-[150px] flex flex-col justify-center items-start gap-8">
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
        ) : title === 'qr payments' ? (
          <>
            <div className="px-[150px] flex flex-col justify-center items-start gap-8">
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
          <div className="px-[150px] flex flex-col justify-center items-start gap-8">
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
        ) : title == 'mini apps' ? (
          <>
            <div className="px-[150px] flex flex-col justify-center items-start gap-8">
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
        ) : (
          <div className="px-[150px] w-full flex flex-col justify-center items-center gap-8">
            <h1 className="heading-primary">
              Designed for{' '}
              <span className="text-primary-base">Entrepreneurs</span>
            </h1>
            <p className="text-base font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </div>
        )}

        <div className="px-[150px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cardsArray?.map((item, index) => {
            return (
              <div key={index} className="px-5 py-6">
                <Card
                  key={index}
                  logo={item.logo}
                  label={item.label}
                  description={item.description}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
