import React from 'react';
// import "./QRPayments.css";
import Image from 'next/image';
import qrPayments from '../../../assets/images/qrpayments.png';

const QRPayments = () => {
  return (
    <div id="NewRootRoot" className="flex flex-col w-full">
      {/* <div className="qr-bg bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end min-h-[640px] shrink-0 items-start pl-40 py-24"> */}
      <div className="min-h-[640px] flex flex-col justify-end shrink-0 items-start pl-40 py-24 relative">
        <Image
          src={qrPayments}
          alt="QrPayments Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />

        <div className="shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] max-w-[560px] bg-neutral-white-base flex flex-col justify-center py-[40px] px-[32px] gap-12 h-auto shrink-0 items-start rounded-lg relative">
          <div
            id="QRPayments1"
            className="text-5xl leading-tight font-semibold text-secondary-base self-start"
          >
            QR <span className="text-primary-base">Payments</span>
          </div>
          <div className="leading-tight text-secondary-600 font-normal text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt
            ut labore et doloreLorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRPayments;
