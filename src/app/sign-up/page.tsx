'use client';
import Button from '@/components/UI/Button/PrimaryButton';
import InputPrimary from '@/components/UI/Inputs/InputPrimary';
import React, { useState } from 'react';
import eye from '../../assets/icons/eye.svg';
import * as Yup from 'yup';
import CheckboxInput from '@/components/UI/Inputs/CheckboxInput';
import GlobalIcon from '@/assets/icons/global.svg';
import QrIcon from '@/assets/icons/scanning.svg';
import CartIcon from '@/assets/icons/cartIcon.svg';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';
import FormWrapper from '@/components/OTP/FormWrapper';

const AccountOptions = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectedOption = (option: string) => {
    setSelectedOption(option);
  };

  console.log('selected option : ', selectedOption);

  return (
    <div className="flex flex-col gap-6">
      <HeaderWrapper
        heading="What would you like to Sign up for?"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmodtempor incididunt ut labore et dolore"
      />
      <FormWrapper>
        <div className="w-full flex flex-col justify-between gap-4 items-start">
          <div className=" font-semibold text-base leading-tight text-[#322c3c]">
            Please Select One Option
          </div>

          <CheckboxInput
            label="Online Payments"
            logo={GlobalIcon}
            selected={selectedOption === 'Online Payments'}
            onSelect={() => handleSelectedOption('Online Payments')}
          />
          <CheckboxInput
            label="QR Payments"
            logo={QrIcon}
            selected={selectedOption === 'QR Payments'}
            onSelect={() => handleSelectedOption('QR Payments')}
          />
          <CheckboxInput
            label="Mini Apps"
            logo={CartIcon}
            selected={selectedOption === 'Mini Apps'}
            onSelect={() => handleSelectedOption('Mini Apps')}
          />
        </div>
        <div className="flex justify-center pt-[32px]">
          <Button
            label="Next"
            isDisabled={selectedOption === ''}
            className="button-primary w-[270px] text-sm px-3 py-[19px]"
          />
        </div>
      </FormWrapper>
    </div>
  );
};

export default AccountOptions;
