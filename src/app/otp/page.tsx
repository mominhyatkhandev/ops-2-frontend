import React from 'react';
import SignUpHeader from '@/components/OTP/SignUpHeader';
import OTP from '@/components/OTP/OTP';
import WrapperComponent from '@/components/OTP/SignUpWrapper';

const OtpInputWithValidation = () => {
  return (
    <div>
      <SignUpHeader
        label={'Enter One Time Password (OTP)'}
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
