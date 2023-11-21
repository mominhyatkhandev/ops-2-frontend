'use client';

import React from 'react';
import Image from 'next/image';
import Coin from '../../assets/icons/card-coin.svg';
import Scanner from '../../assets/icons/scanner-nav.svg';
import Shop from '../../assets/icons/shop-nav.svg';
import Money from '../../assets/icons/money-nav.svg';
import LinkIcon from '../../assets/icons/link-angled-nav.svg';
import Link from 'next/link';

interface IDropdownProps {
  isHovered: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = ({ isHovered, setSelectedOption }: IDropdownProps) => {
  const dropDownList = [
    { title: 'Payment Gateway', link: 'payment-gateway', icon: Coin },
    { title: 'QR Payments', link: 'qr-payment', icon: Scanner },
    { title: 'Mini Apps', link: 'mini-apps', icon: Shop },
    { title: 'Payment Link', link: 'payment-link', icon: Money },
    { title: 'Subscription', link: 'subscription', icon: LinkIcon }
  ];
  return (
    <>
      {isHovered && (
        <div className="absolute top-20 left-0 shadow-md p-[24px] bg-white flex flex-col justify-start gap-[24px] w-[225px] items-start rounded-lg z-10">
          {dropDownList.map((item, index) => (
            <Link key={index} href={`/accept-payments/${item.link}`}>
              <div
                key={index}
                onClick={() => setSelectedOption(item.title)}
                className="flex flex-row gap-[16px] items-start hover:text-primary hover:transition duration-300"
              >
                <Image src={item.icon} width={24} height={24} alt="coin" />
                <span>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;

{
  /* //     <Link href="/">
        //       <div className="flex flex-row gap-[16px] items-start hover:text-primary hover:transition duration-300">
        //         <Image src={Scanner} width={24} height={24} alt="coin" />
        //         <span>QR Payments</span>
        //       </div>
        //     </Link>
        //     <Link href="/">
        //       <div className="flex flex-row gap-[16px] items-start hover:text-primary">
        //         <Image src={Shop} width={24} height={24} alt="coin" />
        //         <span>Mini Apps</span>
        //       </div>
        //     </Link>
        //     <Link href="/">
        //       <div className="flex flex-row gap-[16px] items-start hover:text-primary">
        //         <Image src={Money} width={24} height={24} alt="coin" />
        //         <span>Payment Link</span>
        //       </div>
        //     </Link>
        //     <Link href="/">
        //       <div className="flex flex-row gap-[16px] items-start hover:text-primary">
        //         <Image src={LinkIcon} width={24} height={24} alt="coin" />
        //         <span>Subscription</span>
        //       </div>
        //     </Link>
        //     {/* Add more menu items as needed */
}
//   </div>
// )} */}
