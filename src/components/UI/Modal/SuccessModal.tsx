import React from 'react';
import Image from 'next/image';
import Button from '../Button/PrimaryButton';
import Bitmap from '@/assets/images/Bitmap.svg';
import closeIcon from '@/assets/icons/close-icon.svg';

function SuccessModal() {
  return (
    <div className="flex flex-col gap-12 border-[1px] border-border-dark rounded-2xl  p-5">
      <div className="flex flex-col gap-9">
        <div className="flex justify-end">
          <Image src={closeIcon} alt="close-icon" />
        </div>
        <div>
          <Image src={Bitmap} alt="bitmap-icon" />
        </div>
        <div>
          <div className="flex flex-col gap-2">
            <p className="text-2xl text-secondary-base">
              Account Created Successfully{' '}
            </p>
            <p className="text-base text-secondary-600">
              Congratulations! You have signed up successfully for the Sandbox
              account for [lorem ipsum]
            </p>
          </div>
        </div>
      </div>
      <div>
        <Button
          label="Continue"
          routeName="/login"
          className="button-primary w-[270px] text-xs leading-tight py-[19px] px-3"
        />
      </div>
    </div>
  );
}

export default SuccessModal;
