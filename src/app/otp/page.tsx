import React from 'react';
import SignUpHeader from '@/components/UI/Wrappers/HeaderWrapper';
import OTP from '@/components/OTP/OTP';
import WrapperComponent from '@/components/OTP/FormWrapper';

const OtpInputWithValidation = () => {
  return (
    <div>
      <SignUpHeader
        heading={'Enter One Time Password (OTP)'}
        description={
          "we've sent verification on your email address (abc@domain.com) and your mobile number (03341234567)"
        }
        show={false}
      />
      <WrapperComponent>
        <OTP />
      </WrapperComponent>
    </div>
  );
};

export default OtpInputWithValidation;
