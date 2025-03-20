'use client';

import { ImiLogo } from '@/asset';

import { useForm } from 'react-hook-form';

import * as S from './signUp.css';

type FormValues = {
  email: string;
  password: string;
  rePassword: string;
};

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  return (
    <div className={S.SignupContainer}>
      <div className={S.LogoWrapper}>
        <ImiLogo />
      </div>
      <div className={S.InputWrapper}>
        <div
          className={
            errors.email
              ? S.inputEmailVariants.error
              : S.inputEmailVariants.default
          }
        >
          <input
            placeholder="이메일을 입력해주세요"
            className={S.InputEmail}
            {...register('email', {
              required: '이메일을 입력해주세요.',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@gsm\.hs\.kr$/,
                message: '학교 이메일(@gsm.hs.kr)만 사용 가능합니다.',
              },
            })}
          />
          <p className={S.InputText}>@gsm.hs.kr</p>
        </div>
        {errors.email && <p className={S.ErrorText}>{errors.email.message}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;
