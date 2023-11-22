import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Image from 'next/image';
import web from '@/assets/icons/global.svg';
import miniAppsBG from '@/assets/images/mini-apps.jpg';
import Info from '@/components/Content/Info/Info';
import { TCard } from '@/types/static/static';

const MiniApps = () => {
  const cards: TCard[] = [
    {
      label: 'Digital Activation',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    },
    {
      label: 'Payment Sources',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    },
    {
      label: 'Easy Integration',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    },
    {
      label: 'Instant Settlement',
      logo: web,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
    }
  ];
  return (
    <>
      {/* <div className="pg-bg flex items-center justify-start bg-center bg-cover bg-no-repeat p-[200px] mb-[20px] h-[660px] relative"> */}
      <div className="flex items-center justify-start p-[200px] mb-[20px] h-[660px] relative">
        <Image
          src={miniAppsBG}
          alt="paymentGateway Background"
          layout="fill"
          // objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex w-[710px] flex-col justify-center items-start gap-[48px] rounded-lg relative">
          <p className="heading-primary">
            <span className="text-primary"> easypaisa</span>
            <br /> Mini App Store
          </p>
          <p className="text-dark text-base font-normal w-[657] leading-[20px]">
            A Feature Rich Ecosystem for Your Brand Showcase your Products and
            Services to Pakistan’s Largest online Audience.
          </p>
          <Button label="Sign up" className="button-primary" />
        </div>
      </div>
      <Info title={'mini apps'} cardsArray={cards} />
    </>
  );
};

export default MiniApps;
