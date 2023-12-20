'use client';
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Input from '@/components/UI/Inputs/Input';
import Button from '@/components/UI/Button/PrimaryButton';
import loginSchema, { loginInitialValues } from '@/validations/loginSchema';

const LoginForm = () => {
  return (
    <div className="bg-warning-400 w-full flex flex-col items-center justify-center bg-neutral-white-base p-3">
      <div className="w-1/2 text-5xl text-center text-primary-base font-semibold">
        Sign Up
      </div>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginSchema}
        onSubmit={() => {
          console.log('login submitted');
        }}
      >
        {formik => (
          <Form className="w-1/2 mx-auto mt-8 space-y-4 py-6 px-10 shadow-lg bg-primary-200">
            <Input
              label="Username"
              name="username"
              type="text"
              error={formik.errors.username}
              touched={formik.touched.username}
            />
            <Input
              label="Password"
              name="password"
              type="password"
              error={formik.errors.password}
              touched={formik.touched.password}
            />

            <Button
              label="Login"
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

export default LoginForm;
