import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import InputPrimary from '@/components/UI/Inputs/InputPrimary';
import Input from '@/components/UI/Inputs/Input';
import { signUpInitialValues, signUpSchema } from '@/validations/signUpSchema';
import Button from '@/components/UI/Button/PrimaryButton';

const SignUpForm = ({ onSubmit }: any) => {
  return (
    <div className="flex flex-col items-center justify-center bg-neutral-white-base p-3">
      <div className="text-5xl text-primary-base font-semibold">Sign Up</div>
      <Formik
        initialValues={signUpInitialValues}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form className="max-w-md mx-auto mt-8 space-y-4 py-6 px-10 shadow-lg">
            <Input
              label="First Name"
              name="firstName"
              type="text"
              error={formik.errors.firstName}
              touched={formik.touched.firstName}
            />
            <Input
              label="Last Name"
              name="lastName"
              type="text"
              error={formik.errors.lastName}
              touched={formik.touched.lastName}
            />
            <Input
              label="Merchant Name"
              name="merchantName"
              type="text"
              error={formik.errors.merchantName}
              touched={formik.touched.merchantName}
            />
            <Input
              label="Mobile Number"
              name="phoneNumber"
              type="text"
              error={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
            />
            <Input
              label="Email"
              name="email"
              type="email"
              error={formik.errors.email}
              touched={formik.touched.email}
            />
            <Input
              label="Website"
              name="website"
              type="text"
              error={formik.errors.website}
              touched={formik.touched.website}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              error={formik.errors.password}
              touched={formik.touched.password}
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              error={formik.errors.confirmPassword}
              touched={formik.touched.confirmPassword}
            />

            {/* <button
              type="submit"
              disabled={!formik.isValid}
              className={`${
                !formik.isValid ? 'bg-neutral-black-300' : 'bg-primary-base'
              } text-sm leading-tight font-semibold w-full text-neutral-white-base p-2 rounded-md hover:bg-blue-600 transition duration-300`}
            >
              Sign Up
            </button> */}
            <Button
              label="Sign up"
              type="submit"
              isDisabled={!formik.isValid}
              className={`button-primary w-full py-[19px] px-4 text-sm leading-tight transition duration-300`}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
