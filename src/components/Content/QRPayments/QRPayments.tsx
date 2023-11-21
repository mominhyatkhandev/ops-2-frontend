import React from 'react';
// import "./QRPayments.css";
import Image from 'next/image';
import qrPayments from '../../../assets/images/qrpayments.png';

const QRPayments = () => {
  return (
    <div id="NewRootRoot" className="flex flex-col w-full mb-[20px]">
      {/* <div className="qr-bg bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col justify-end min-h-[640px] shrink-0 items-start pl-40 py-24"> */}
      <div className="flex flex-col justify-end min-h-[640px] shrink-0 items-start pl-40 py-24 relative">
        <Image
          src={qrPayments}
          alt="QrPayments Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />

        <div className="shadow-[0px_4px_16px_0px_rgba(51,_51,_51,_0.08)] max-w-[560px] bg-white flex flex-col justify-center py-[40px] px-[32px] gap-[60px] h-auto shrink-0 items-start rounded-lg relative">
          <div
            id="QRPayments1"
            className="text-xl font-semibold text-dark self-start"
          >
            QR <span className="text-primary-base">Payments</span>
          </div>
          <div className="leading-[20px] font-normal text-base">
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
