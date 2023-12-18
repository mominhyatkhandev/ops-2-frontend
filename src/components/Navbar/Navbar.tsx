'use client';
import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/SecondaryButton';
import Logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import AcceptPayments from './AcceptPayments';

const Navbar = () => {
  const [other, setOther] = useState<string>('');
  const [clickTrigger, setClickTrigger] = useState<boolean>(false);

  const handleOther = (itemName: string) => {
    setOther(itemName);
    setClickTrigger(!clickTrigger);
  };
  return (
    <nav className=" h-[82px] flex items-center justify-between px-[150px] bg-neutral-white-base  relative shadow-md z-10">
      <div className="flex items-center ">
        <Image src={Logo} width={173} height={36} alt="logo" className="" />
      </div>
      <div className="flex flex-row  ">
        <ul className="w-full lg:inline-flex items-center gap-[24px]">
          <Link href={'/'}>
            <li
              className="text-secondary-base text-sm cursor-pointer px-2 hover:text-primary-base transition duration-300"
              onClick={() => handleOther('Home')}
            >
              Home
            </li>
          </Link>
          <div className="w-[1px] h-[10px] bg-border-dark"></div>

          <AcceptPayments other={other} clickTrigger={clickTrigger} />

          <div className="w-[1px] h-[10px] bg-border-dark"></div>

          <div
            className="text-secondary-base text-sm cursor-pointer text-center px-2 hover:text-primary-base transition duration-300"
            onClick={() => handleOther('Developer')}
          >
            Developer
          </div>
          <div className="w-[1px] h-[10px] bg-border-dark"></div>

          <li
            className="text-secondary-base text-sm cursor-pointer text-center px-2 hover:text-primary-base transition duration-300"
            onClick={() => handleOther('FAQs')}
          >
            FAQs
          </li>
          <div className="w-[1px] h-[10px] bg-border-dark"></div>
          <div className="flex flex-row  gap-[24px]">
            <Button
              label="Login"
              className=" border-primary-base font-semibold text-secondary-base py-[14px] px-[33px] gap-10 rounded-[8px] border-[1.5px] "
            />
            <Button
              label="Sign up"
              className=" bg-primary-base  font-semibold text-neutral-white-base py-[14px] px-[33px] gap-10 rounded-[8px] "
            />
          </div>
        </ul>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;
