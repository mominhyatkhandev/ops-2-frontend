'use client';
import React from 'react';
import Image from 'next/image';
import LoginBg from '@/assets/images/login-bg.jpg';
import Input from '@/components/UI/Inputs/Input';
import Button from '@/components/UI/Button/PrimaryButton';
import Link from 'next/link';
import { Form, Formik } from 'formik';
import loginSchema, { loginInitialValues } from '@/validations/loginSchema';
import ImageInput from '@/components/UI/Inputs/ImageInput';
import eye from '@/assets/icons/eye.svg';

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
        <div className="relative bg-neutral-white-base w-[680px] h-max rounded-lg border-[1px] border-border-light py-9 px-[60px]">
          <span className="flex w-full pb-8 justify-center text-[40px] font-semibold">
            Login to your account
          </span>
          <Formik
            initialValues={loginInitialValues}
            validationSchema={loginSchema}
            onSubmit={() => {
              console.log('login submitted');
            }}
          >
            {formik => (
              <Form className="flex flex-col items-center gap-6">
                <Input
                  label="Username"
                  name="username"
                  type="text"
                  error={formik.errors.username}
                  touched={formik.touched.username}
                />
                {/* <Input
                  label="Password"
                  name="password"
                  type="password"
                  error={formik.errors.password}
                  touched={formik.touched.password}
                /> */}
                <ImageInput
                  name="password"
                  label="Password"
                  type="password"
                  error={formik.errors.password}
                  touched={formik.touched.password}
                  image={eye}
                />

                <Button
                  label="Login"
                  type="submit"
                  isDisabled={!formik.isValid}
                  className={`button-primary w-[270px] py-[19px] px-4 text-sm leading-tight transition duration-300`}
                />
              </Form>
            )}
          </Formik>
          {/* <div className="flex flex-col gap-6">
            <InputPrimary
              label="Username or email"
              type="kmska"
              className="knak"
              error={'xyz'}
              touched={false}
              // hasImage={false}
              isDisabled={false}
            />
            <Input
              name={'password'}
              label="Password"
              type="password"
              className="knak"
              // hasImage={false}
              isDisabled={false}
              error={'xyz'}
              touched={false}
            />
          </div>
          <div className="flex justify-center pt-8 pb-6">
            <Button
              label="Login"
              className="button-primary w-[270px] px-3 py-[19px]"
            />
          </div> */}
          <span className="flex justify-center text-sm leading-tight font-normal pt-6">
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
