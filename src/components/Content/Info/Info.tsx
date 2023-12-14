import React from 'react';
import Card from '../../UI/Card/Card';
import { TCard } from '@/types/static/static';

interface IInfoProp {
  title?: string;
  cardsArray?: TCard[];
}

const Info = ({ title, cardsArray }: IInfoProp): JSX.Element => {
  return (
    <div className="w-full inline-flex flex-col justify-center items-start px-[150px] pt-[80px] pb-[120px]">
      <div className="w-full gap-9 text-base flex flex-col justify-center items-start">
        {title == 'payment gateway' ? (
          <div className=" flex flex-col justify-center items-start gap-2">
            <h1 className="heading-primary">
              6 powerful reasons to chose Easypaisa <br />
              <span className="text-primary-base">Payment Gateway</span>
            </h1>
            <p className="text-base font-normal leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </div>
        ) : title === 'payment link' ? (
          <div className=" flex flex-col justify-center items-start gap-2">
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
            <div className=" flex flex-col justify-center items-start gap-2">
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
          <div className=" flex flex-col justify-center items-start gap-2">
            <h1 className="heading-primary">
              Get Registered, start accepting payments.
              <br />
              <span className="text-primary-base">It’s that simple!</span>
            </h1>
            <p className="text-base leading-tight font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </div>
        ) : title == 'mini apps' ? (
          <>
            <div className=" flex flex-col justify-center items-start gap-2">
              <h1 className="heading-primary">
                Get Registered, start accepting payments.
                <br />
                <span className="text-primary-base">It’s that simple!</span>
              </h1>
              <p className="text-base leading-tight font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmodtempor incididunt ut labore et dolore
              </p>
            </div>
          </>
        ) : (
          <div className=" flex flex-col justify-center items-start gap-2 ">
            <h1 className="heading-primary">
              Designed for{' '}
              <span className="text-primary-base">Entrepreneurs</span>
            </h1>
            <p className="text-base leading-tight font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore
            </p>
          </div>
        )}

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
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
