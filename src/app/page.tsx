'use client';
import Header from '@/components/Content/HeroBanner/HeroBanner';
import Info from '@/components/Content/Info/Info';
import OnlinePayments from '@/components/Content/OnlinePayments/OnlinePayments';
import QRPayments from '@/components/Content/QRPayments/QRPayments';
import PaymentLink from '@/components/Content/Paymentlink/PaymentLink';
import MiniApps from '@/components/Content/MiniApps/MiniApps';
import web from '@/assets/icons/global.svg';
import scanner from '@/assets/icons/scanning.svg';
import cartIcon from '@/assets/icons/cartIcon.svg';
import { TCard } from '@/types/static/static';
import { cards } from '@/utils/data';
import { useState } from 'react';
import CustomModal from '@/components/UI/Modal/CustomModal';

export default function Home() {
  // const cards: TCard[] = [
  //   {
  //     label: 'Online Payments',
  //     logo: web,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
  //   },
  //   {
  //     label: 'QR Integration',
  //     logo: scanner,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
  //   },
  //   {
  //     label: 'Mini Apps',
  //     logo: cartIcon,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
  //   },
  //   {
  //     label: 'Payment link',
  //     logo: web,
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed d  eiusmodtempor incididunt ut labore et dolore'
  //   }
  // ];

  return (
    <main>
      <Header />
      <Info cardsArray={cards} />
      <div className="flex flex-col gap-5 pb-[93px]">
        <OnlinePayments />
        <QRPayments />
        <MiniApps />
        <PaymentLink />
      </div>
    </main>
  );
}
