'use client';
import React, { useState } from 'react';
// import Checkbox from '@/components/UI/Checkbox';
import Checkbox from '@/components/UI/Checkbox/Checkbox';
import GlobalIcon from '@/assets/icons/global.svg';
import OnlinePayments from '@/components/Content/OnlinePayments/OnlinePayments';
function test() {
  const [selectedOption, setSelectedOption] =
    useState<string>('Online Payments');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    // setSelectedOption(option === selectedOption ? null : option);
    console.log('selected', selectedOption);
  };
  return (
    <div>
      <Checkbox
        logo={GlobalIcon}
        label="Online Payments"
        isSelected={selectedOption === 'Online Payments'}
        onSelect={() => handleOptionSelect('Online Payments')}
      />
      <Checkbox
        logo={GlobalIcon}
        label="QR Payments"
        isSelected={selectedOption === 'QR Payments'}
        onSelect={() => handleOptionSelect('QR Payments')}
      />
      {/* <Checkbox logo={GlobalIcon} label="Mini Apps" /> */}
    </div>
  );
}

export default test;
