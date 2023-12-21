import React from 'react';
import Image, { StaticImageData } from 'next/image';
import TickIcon from '@/assets/icons/tick-icon.svg';

interface ICheckboxInput {
  label: string;
  logo: StaticImageData;
  selected: boolean;
  onSelect: () => void;
}

function CheckboxInput({ label, logo, selected, onSelect }: ICheckboxInput) {
  return (
    <>
      <div
        className="w-full flex flex-row items-center px-5 py-[16px] border-[1px] rounded-lg bg-neutral-white-base border-border-dark gap-4"
        onClick={onSelect}
      >
        <Image src={logo} className="w-6 h-6" alt="tick-icon" />

        <label
          htmlFor="checkbox"
          className="w-full text-sm font-500 text-secondary-base "
        >
          {label}
        </label>
        {selected ? (
          <div className="rounded-full bg-primary-base w-6 h-6 py-[8px] px-[7px] flex justify-center">
            <Image src={TickIcon} width={10} height={8} alt="tick-icon" />
          </div>
        ) : (
          <div className="rounded-full border-[1px] w-6 h-6 border-border-dark py-[8px] px-[7px] flex justify-center" />
        )}
      </div>
    </>
  );
}

export default CheckboxInput;
