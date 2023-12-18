import React from 'react';
import Image from 'next/image';
import LoginBg from '@/assets/images/login-bg.jpg';

const Admin = () => {
  return (
    <>
      <div className="bg-primary-700 h-screen">
        <Image src={LoginBg} alt="LoginBg" width={100} height={100} />
      </div>
      <div>Login</div>
    </>
  );
};

export default Admin;
