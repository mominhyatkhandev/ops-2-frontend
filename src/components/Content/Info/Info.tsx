import React from 'react';
import Card from '../../UI/Card/Card';
import web from '../../../assets/icons/global.svg';
import scanner from '../../../assets/icons/scanning.svg';
import cartIcon from '../../../assets/icons/cartIcon.svg';

const Info = ({ title }: { title?: string }): JSX.Element => {
  return (
    <div className="min-h-[640px] w-full inline-flex flex-col justify-center items-center">
      {title !== 'payment gateway' ? (
        <div className="w-full gap-[36px] flex flex-col justify-center items-center">
          <h1 className="text-xl text-center font-semibold">
            Designed for <span className="text-primary">Entrepreneurs</span>
          </h1>

          <p className="text-base font-normal text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore
          </p>
          <div className="py-[24px] px-[200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            <Card
              logo={web}
              label="Online Payments"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
            <Card
              logo={scanner}
              label="QR Integrations"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
            <Card
              logo={cartIcon}
              label="Mini APPs"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
            <Card
              logo={web}
              label="Payment Link"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
          </div>
        </div>
      ) : (
        // ................................................................................//
        <div className="w-full gap-[36px] flex flex-col ">
          <h1 className="text-xl text-start font-semibold">
            6 powerful reasons to chose Easypaisa <br />
            <span className="text-primary">Payment Gateway</span>
          </h1>

          <p className="text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore
          </p>
          <div className="py-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            <Card
              logo={web}
              label="Digital Activation"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
            <Card
              logo={scanner}
              label="Payment Resources"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
            <Card
              logo={cartIcon}
              label="Easy Integration"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
            <Card
              logo={web}
              label="Payment Settlement"
              className={`text-dark hover:bg-primary hover:text-white`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d
              {'  '}
              eiusmodtempor incididunt ut labore et dolore
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
