'use client';

import { useRouter } from 'next/navigation';

import { CloseEyes, ImiLogo, OpenEyes } from '@/asset';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './signIn.css';

type FormValues = {
  email: string;
  password: string;
};

const SignInPage = () => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const onSubmit = (data: FormValues) => {
    console.log('로그인 정보:', data);
  };

  return (
    <div className={S.SigninContainer}>
      <div className={S.LogoContainer}>
        <ImiLogo width="4.125rem" height="3rem" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={S.InputContainer}>
        <div className={S.InputEmailContainer}>
          <p className={S.Text}>Email</p>
          <div
            className={
              errors.email
                ? S.inputEmailVariants.error
                : S.inputEmailVariants.default
            }
          >
            <input
              placeholder="이메일을 입력해주세요"
              className={S.InputBox}
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
          <div className={S.ErrorBox}>
            <div></div>
            {errors.email && (
              <p className={S.ErrorText}>{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className={S.InputPasswordContainer}>
          <p className={S.Text}>Password</p>
          <div
            key={'password'}
            className={
              errors.password
                ? S.inputPasswordVariants.error
                : S.inputPasswordVariants.default
            }
          >
            <input
              type={isOpen ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              className={S.InputBox}
              {...register('password', {
                required: '비밀번호를 입력해주세요.',
                minLength: {
                  value: 8,
                  message: '8글자 이상 입력해야 합니다',
                },
                maxLength: {
                  value: 16,
                  message: '16글자 이하로 입력해야 합니다',
                },
              })}
            />
            <div className={S.IconBox} onClick={() => setOpen(!isOpen)}>
              {isOpen ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
          <div className={S.ErrorBox}>
            <div></div>
            {errors.password && (
              <p className={S.ErrorText}>{errors.password.message}</p>
            )}
          </div>
        </div>
        <button type="submit" className={S.LoginBtn}>
          로그인
        </button>
      </form>
      <div className={S.SignupBox}>
        <p className={S.UnderText}>계정이 없으신가요?</p>
        <p className={S.GrayText} onClick={() => router.push('/signup')}>
          회원가입
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
