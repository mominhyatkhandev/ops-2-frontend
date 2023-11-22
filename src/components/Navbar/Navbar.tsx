import React from 'react';
import Button from '../UI/Button/SecondaryButton';
import Logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import AcceptPayments from './AcceptPayments';

const Navbar = () => {
  return (
    <div className="w-auto h-[82px] flex items-center justify-center shadow-md py-[24px] relative">
      <div className="flex justify-between item-center gap-[166px]">
        <div className="flex items-center justify-center">
          <Image src={Logo} width={250} height={40} alt="logo" className="" />
        </div>
        <ul className="w-full lg:inline-flex items-center justify-center space-x-[24px] hidden">
          <Link href={'/'}>
            <li className="text-secondary-base text-sm cursor-pointer px-2 hover:text-primary-base transition duration-300">
              Home
            </li>
          </Link>
          <div className="w-[1px] h-[10px] bg-border-dark"></div>

          <AcceptPayments />

          <div className="w-[1px] h-[10px] bg-border-dark"></div>

          <div className="text-secondary-base text-sm cursor-pointer text-center px-2 hover:text-primary-base transition duration-300">
            Developer
          </div>
          <div className="w-[1px] h-[10px] bg-border-dark"></div>

          <li className="text-secondary-base text-sm cursor-pointer text-center px-2 hover:text-primary-base transition duration-300">
            FAQs
          </li>
          <div className="w-[1px] h-[10px] bg-border-dark"></div>

          <li className="text-secondary-base text-sm cursor-pointer text-center px-2 hover:text-primary-base transition duration-300">
            Contact Us
          </li>
          <div className="w-[1px] h-[10px] bg-border-dark"></div>
          <Button
            label="Login"
            className="w-[96px] border-primary-base font-normal text-secondary-base py-[14px] px-[10px] gap-10 rounded-[8px] border-[1.5px] "
          />
          <Button
            label="Sign up"
            // className="w-[96px] bg-primary font-normal text-neutral-white-base py-[14px] px-[10px] gap-10 rounded-[8px] "
            className="button-primary button-size-small"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
