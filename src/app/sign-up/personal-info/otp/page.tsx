import React from 'react';
import HeaderWrapper from '@/components/UI/Wrappers/HeaderWrapper';
import FormLayout from '@/components/UI/Wrappers/FormLayout';
import OTP from '@/components/OTP/OTP';
import Button from '@/components/UI/Button/PrimaryButton';

const OtpInputWithValidation = () => {
  return (
    <div className="flex flex-col gap-6">
      <HeaderWrapper
        heading={'Enter One Time Password (OTP)'}
        description={
          "we've sent verification on your email address (abc@domain.com) and your mobile number (03341234567)"
        }
        show={true}
      />
      <FormLayout>
        <div className="flex flex-col justify-center items-center gap-12">
          <OTP description="Enter Email OTP here" />
          <OTP description="Enter SMS OTP here" />
          <Button
            label="Verify"
            className="button-primary w-[270px] py-[19px] px-3"
          />
        </div>
      </FormLayout>
    </div>
  );
};

export default OtpInputWithValidation;
