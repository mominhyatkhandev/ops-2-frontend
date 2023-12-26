import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Image from 'next/image';
import miniAppsBG from '@/assets/images/mini-apps.jpg';
import Info from '@/components/Content/Info/Info';
import { cards } from '@/utils/data';
import AcceptPaymentWrapper from '@/components/UI/Wrappers/AcceptPaymentWrapper';

const MiniApps = () => {
  return (
    <>
      <AcceptPaymentWrapper>
        <Image
          src={miniAppsBG}
          alt="paymentGateway Background"
          layout="fill"
          quality={100}
          // className="absolute inset-0"
        />
        <div className="flex flex-col justify-center items-start gap-9 rounded-lg relative">
          <div className="flex flex-col gap-4">
            <p className="heading-primary">
              <span className="text-primary-base"> easypaisa</span>
              <br /> Mini App Store
            </p>
            <p className="text-secondary-base text-base font-normal w-[657] leading-tight">
              A Feature Rich Ecosystem for Your Brand Showcase your Products and
              Services to Pakistan’s <br /> Largest online Audience.
            </p>
          </div>
          <Button
            label="Sign up"
            routeName="/login"
            className="button-primary w-[200px] px-3 py-[19px] text-sm leading-tight"
          />
        </div>
      </AcceptPaymentWrapper>
      <div className="flex flex-col">
        <Info title={'mini apps'} cardsArray={cards} />
      </div>
    </>
  );
};

export default MiniApps;
