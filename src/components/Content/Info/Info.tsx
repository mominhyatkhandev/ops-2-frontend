import React from 'react';
import Card from '../../UI/Card/Card';
import web from '../../../assets/global.svg';
import scanner from '../../../assets/scanning.svg';
import cartIcon from '../../../assets/cartIcon.svg';

const Info = () => {
  return (
    <div className="min-h-[640px] w-full inline-flex flex-col justify-center items-center">
      <div className="w-full gap-[36px] flex flex-col justify-center items-center">
        <h1 className="text-xl text-center font-semibold">
          Designed for <span className="text-primary">Entrepreneurs</span>
        </h1>
        <p className="text-base font-normal text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodtempor incididunt ut labore et dolore
        </p>
        <div className="py-[24px] px-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          <Card
            logo={web}
            label="Online Payments"
            className={`text-dark hover:bg-primary hover:text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d{'  '}
            eiusmodtempor incididunt ut labore et dolore
          </Card>
          <Card
            logo={scanner}
            label="QR Integrations"
            className={`text-dark hover:bg-primary hover:text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d{'  '}
            eiusmodtempor incididunt ut labore et dolore
          </Card>
          <Card
            logo={cartIcon}
            label="Mini APPs"
            className={`text-dark hover:bg-primary hover:text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d{'  '}
            eiusmodtempor incididunt ut labore et dolore
          </Card>
          <Card
            logo={web}
            label="Payment Link"
            className={`text-dark hover:bg-primary hover:text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d{'  '}
            eiusmodtempor incididunt ut labore et dolore
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Info;
