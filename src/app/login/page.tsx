import React from 'react';
import Image from 'next/image';
import LoginBg from '@/assets/images/login-bg.jpg';
import InputPrimary from '@/components/UI/Inputs/InputPrimary';
import Button from '@/components/UI/Button/PrimaryButton';
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <div className="bg-primary-700 px-[380px] pt-[120px] pb-[144px] relative">
        <Image
          src={LoginBg}
          alt="LoginBg"
          layout="fill"
          objectFit="cover"
          className="absolute max-w-full inset-0"
        />
        <div className="relative bg-neutral-white-base w-full h-max rounded-lg border-[1px] border-border-light py-9 px-[60px]">
          <span className="flex w-full pb-8 justify-center text-[40px] font-semibold">
            Login to your account
          </span>
          <div className="flex flex-col gap-6">
            <InputPrimary
              label="Username or email"
              type="kmska"
              className="knak"
              hasImage={false}
              isDisabled={false}
            />
            <InputPrimary
              label="Password"
              type="kmska"
              className="knak"
              hasImage={false}
              isDisabled={false}
            />
          </div>
          <div className="flex justify-center pt-8 pb-6">
            <Button
              label="Login"
              className="button-primary w-[270px] px-3 py-[19px]"
            />
          </div>
          <span className="flex justify-center text-sm font-normal">
            Dont have an account? &nbsp;
            <Link
              href={'/'}
              // className="text-primary-base underline after:translate-y-1"
              className="text-primary-base relative inline-block after:-content-[''] after:block after:w-full after:h-0.5 after:bg-primary-base after:absolute after:bottom-0 after:left-0 after:transform after:translate-y-1 after:transition-transform after:origin-bottom"
            >
              Create an account
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
