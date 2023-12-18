// Dropdown.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Coin from '../../assets/icons/card-coin.svg';
import Scanner from '../../assets/icons/scanner-nav.svg';
import Shop from '../../assets/icons/shop-nav.svg';
import Money from '../../assets/icons/money-nav.svg';
import LinkIcon from '../../assets/icons/link-angled-nav.svg';
import SubscriptionIcon from '@/assets/icons/subscription-icon.svg';
import { usePathname } from 'next/navigation';

interface IDropdownProps {
  isHovered: boolean;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown = ({ isHovered, setSelectedOption }: IDropdownProps) => {
  const router = usePathname();

  const dropDownList = [
    { title: 'Payment Gateway', link: 'payment-gateway', icon: Coin },
    { title: 'QR Payments', link: 'qr-payments', icon: Scanner },
    { title: 'Mini Apps', link: 'mini-apps', icon: Shop },
    { title: 'Payment Link', link: 'payment-link', icon: Money },
    { title: 'Subscription', link: 'subscription', icon: SubscriptionIcon }
  ];

  return (
    <>
      {isHovered && (
        <div className="absolute top-[82px] left-0 shadow-md p-[24px] bg-neutral-white-base flex flex-col justify-start gap-[24px] w-[225px] items-start rounded-lg z-10">
          {dropDownList.map((item, index) => (
            <Link key={index} href={`/accept-payments/${item.link}`}>
              <div
                key={index}
                onClick={() => setSelectedOption(item.title)}
                className={`flex flex-row gap-4 items-start hover:text-primary-base hover:transition duration-300 ${
                  router === `/accept-payments/${item.link}`
                    ? 'text-primary-base'
                    : ''
                }`}
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
