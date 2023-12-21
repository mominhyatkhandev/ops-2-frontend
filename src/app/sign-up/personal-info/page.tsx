'use client';
import FormWrapper from '@/components/OTP/FormWrapper';
import Button from '@/components/UI/Button/PrimaryButton';
import Input from '@/components/UI/Inputs/Input';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';
import { signUpInitialValues, signUpSchema } from '@/validations/signUpSchema';
import { Form, Formik } from 'formik';
import React from 'react';

const PersonalInfo = () => {
  return (
    <>
      <Formik
        initialValues={signUpInitialValues}
        validationSchema={signUpSchema}
        onSubmit={() => {
          console.log('Sign up form submitted');
        }}
      >
        {formik => (
          <Form className="w-full flex flex-col gap-9">
            <div className="w-full flex flex-col gap-6">
              <HeaderWrapper
                heading="Please fill in the Information below"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore"
                show
              />
              <FormWrapper className="flex flex-col justify-center items-start gap-4">
                {/* <div className="w-full flex flex-col justify-between gap-4 items-start"> */}
                <div className=" font-semibold text-base leading-tight text-secondary-base">
                  Personal Information
                </div>
                {/* <div className="flex flex-col w-full"> */}
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
                {/* </div> */}
              </FormWrapper>
              <FormWrapper className="flex flex-col justify-center items-start gap-4">
                {/* <div className="flex flex-col w-full gap-4"> */}
                <div className=" font-semibold text-base leading-tight text-secondary-base">
                  Set your Login Password
                </div>
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
                {/* </div> */}
              </FormWrapper>
              <FormWrapper className="flex flex-col justify-center items-start gap-4">
                <div className=" font-semibold text-base leading-tight text-secondary-base">
                  Terms & Conditions
                </div>
                <div className="bg-neutral-white-base p-6">
                  <div className="text-xs leading-tight">
                    In using this website, you are deemed to have read and
                    agreed to the following terms and conditions. The following
                    terminology applies to these Terms and Conditions, Privacy
                    Statement and applies to these Terms and Conditions
                    Disclaimer Notice and any or all Agree Notice and any other
                    terms and In using this website, you are deemed to have read
                    and agreed to the following terms and conditions. The
                    following terminology applies to these Terms and Conditions,
                    Privacy Statement and applies to these Terms and Conditions
                    Disclaimer Notice and any or all Agree Notice and any other
                    terms and In using this website, you are deemed to have read
                    and agreed to the following terms and conditions. The
                    following terminology applies to these Terms and Conditions,
                    Privacy Statement and applies to these Terms and Conditions
                    Disclaimer Notice and any or all Agree Notice and any other
                    terms and In using this website, you are deemed to have read
                    and agreed to the following terms and co
                  </div>
                </div>
                <div className="flex gap-2">
                  <input type="checkbox" />
                  <p className="text-xs leading-tight font-semibold">
                    I agree to easypaisa Terms & Conditions
                  </p>
                </div>
              </FormWrapper>
            </div>
            <div className="flex flex-col items-end px-[150px]">
              <div className="w-full">VERIFY COMPONENT</div>
              <Button
                label="Sign up"
                type="submit"
                isDisabled={!formik.isValid}
                className={`button-primary w-[260px] py-[19px] px-4 text-sm leading-tight transition duration-300`}
              />
            </div>
            {/* </div> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalInfo;
