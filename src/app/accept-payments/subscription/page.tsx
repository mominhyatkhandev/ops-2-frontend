import React from 'react';
import Button from '@/components/UI/Button/PrimaryButton';
import Partners from '@/components/Content/Partners/Partners';
import Image from 'next/image';
import subscriptionBG from '@/assets/images/subscription.jpg';
import Info from '@/components/Content/Info/Info';
import { cards } from '@/utils/data';

const Subscription = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-start p-[150px] min-h-[640px] relative">
        <Image
          src={subscriptionBG}
          alt="Subscription Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0"
        />
        <div className="flex justify-center items-start gap-9">
          <div className="flex flex-col justify-center items-start gap-9 rounded-lg relative">
            <div className="flex flex-col gap-4">
              <p className="heading-primary">
                <span className="text-primary-base">
                  Automate recurring payments
                </span>
                <br></br>
                <span>with easypaisa subscriptions</span>
              </p>
              <p className="text-secondary-base text-base font-normal leading-tight">
                Collect recurring payments with multiple payment options to
                enable growth for your subscription <br /> based businesses
              </p>
            </div>
            <Button
              label="Sign up"
              className="button-primary w-[200px] px-3 py-[19px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col pb-[120px]">
        <Info title={'subscription'} cardsArray={cards} />
        <Partners />
      </div>
    </div>
  );
};

export default Subscription;
