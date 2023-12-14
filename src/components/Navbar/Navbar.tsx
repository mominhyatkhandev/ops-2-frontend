'use client';
import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/PrimaryButton';
import Logo from '@/assets/icons/logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import AcceptPayments from './AcceptPayments';
import CustomModal from '../UI/Modal/CustomModal';

const Navbar = () => {
  const [other, setOther] = useState<string>('');
  const [clickTrigger, setClickTrigger] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOther = (itemName: string) => {
    setOther(itemName);
    setClickTrigger(!clickTrigger);
  };
  return (
    <>
      <div className="flex items-center justify-between px-[150px] bg-neutral-white-base shadow-[0px_2px_6px_0px_rgba(51,_51,_51,_0.08)] relative">
        <div className="flex items-center py-6">
          <Image src={Logo} width={173} height={36} alt="logo" className="" />
        </div>
        <div className="flex flex-row items-center justify-end py-6">
          <ul className="w-full lg:inline-flex items-center gap-[24px]">
            <Link href={'/'}>
              <li
                className="text-secondary-base text-sm leading-tight cursor-pointer py-3 hover:text-primary-base transition duration-300"
                onClick={() => handleOther('Home')}
              >
                Home
              </li>
            </Link>
            <div className="w-[1px] h-[10px] bg-border-dark"></div>

            {/* <div className="relative"> */}
            <AcceptPayments other={other} clickTrigger={clickTrigger} />

            <div className="w-[1px] h-[10px] bg-border-dark"></div>

            <div
              className="text-secondary-base text-sm cursor-pointer text-center py-3 hover:text-primary-base transition duration-300"
              onClick={() => handleOther('Developer')}
            >
              Developer
            </div>
            <div className="w-[1px] h-[10px] bg-border-dark"></div>
            <Link href={`/faq`}>
              <li
                className="text-secondary-base text-sm cursor-pointer text-center py-3 hover:text-primary-base transition duration-300"
                onClick={() => handleOther('faq')}
              >
                FAQs
              </li>
            </Link>
            <div className="w-[1px] h-[10px] bg-border-dark"></div>
            <div className="flex flex-row gap-6">
              <Button
                label="Login"
                className="button-secondary w-[96px] text-xs leading-tight py-[11px] px-2"
              />
              {/* <Link href={`/sign-up`}> */}
              <Button
                label="Sign up"
                onClickHandler={handleOpenModal}
                className="button-primary w-[96px] text-xs leading-tight py-[11px] px-2"
              />
              {/* </Link> */}
            </div>
          </ul>
        </div>
      </div>
      {/* </div> */}
      <CustomModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="My Modal Content"
        className="w-1/2 flex items-center justify-center"
      />
    </>
  );
};

export default Navbar;
