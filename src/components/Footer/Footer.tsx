import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/icons/logo.svg';
import phoneIcon from '@/assets/images/phoneIcon.png';
import emailIcon from '@/assets/images/emailIcon.png';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center w-full min-h-[350px] gap-[60px] items-center px-20 py-20">
      <div className="bg-border-light h-[1px] w-full"></div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col gap-[60px] min-h-[107px] items-start">
          <Image src={Logo} alt="logo" height={36} width={173} />
          <div
            id="Copyright"
            className="leading-[20px] text-secondary-600 text-base font-normal"
          >
            Copyright © 2023 Easypaisa | All Rights Reserved{' '}
          </div>
        </div>
        <div className="flex flex-col justify-between min-h-[107px] gap-6 items-start">
          <div
            id="FooterTitle"
            className="text-2xl font-semibold text-secondary-base"
          >
            Contact us
          </div>
          <div className="flex flex-row w-[310px] gap-3 items-start">
            <Image src={emailIcon} alt="email" height={20} width={20} />
            <div className="leading-[20px] text-secondary-600 text-base font-normal">
              businesspartnersupport@telenorbank.pk
            </div>
          </div>
          <div className="flex flex-row gap-3 w-[310px] items-center">
            <Image src={phoneIcon} alt="phone" height={20} width={20} />
            <div className="leading-[20px] text-secondary-600 text-base font-normal">
              62632 (10 AM to 5 PM)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// <div className="flex flex-row justify-between w-full h-40 items-end p-10">
//   <div className="flex flex-col gap-16 h-[107px] items-start border-t-4">
//     <Image src={Logo} width={173} height={36} alt="logo" id="Home" />
//     <div
//       id="Copyright"
//       className="font-['SF_Pro_Display'] leading-[20px] text-secondary-600"
//     >
//       Copyright © 2023 Easypaisa | All Rights Reserved{" "}
//     </div>
//   </div>
//   <div className="flex flex-col justify-between mb-px h-24 items-start">
//     <div
//       id="FooterTitle"
//       className="text-2xl font-['SF_Pro_Display'] font-semibold leading-[32px] text-[#322c3c]"
//     >
//       Contact us
//     </div>
//     <div className="flex flex-row gap-3 w-[306px] items-center">
//       <img
//         src="https://file.rendit.io/n/y3xr6RJfXYKxtAfCbOKM.svg"
//         id="LineRoundedEmail"
//         className="self-start w-5 shrink-0"
//       />
//       <div className="font-['SF_Pro_Display'] leading-[20px] text-[#5b5663]">
//         businesspartnersupport@telenorbank.pk
//       </div>
//     </div>
//     <div className="flex flex-row gap-3 w-48 items-center">
//       <img
//         src="https://file.rendit.io/n/4ZjrIZQscHbX8rrav8Do.svg"
//         id="LineRoundedPhone"
//         className="self-start w-5 shrink-0"
//       />
//       <div className="font-['SF_Pro_Display'] leading-[20px] text-[#5b5663]">
//         62632 (10 AM to 5 PM)
//       </div>
//     </div>
//   </div>
// </div>
