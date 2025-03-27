'use client';

import { useRouter } from 'next/navigation';

import { CloseEyes, ImiLogo, OpenEyes } from '@/asset';

import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

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
    formState: { errors, isValid },
    setError,
    clearErrors,
    watch,
  } = useForm<FormValues>({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const onSubmit = (data: FormValues) => {
    if (data.email.length === 0 || data.password.length === 0) {
      return 0;
    }
    if (data.email.length === 6) {
      data.email = data.email + '@gsm.hs.kr';
    }
    console.log('로그인 정보:', data);
    //api
    if (true) {
      setError('email', {
        type: 'server',
        message: '',
      });
      setError('password', {
        type: 'server',
        message: '이메일 또는 비밀번호가 일치하지 않습니다.',
      });
    }
  };

  const allFieldsFilled = Object.values(watch()).every((value) => value !== '');

  const onError = (errors: FieldErrors) => {
    console.error(errors);
  };

  return (
    <div className={S.SigninContainer}>
      <div className={S.LogoContainer}>
        <ImiLogo width="4.125rem" height="3rem" />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className={S.InputContainer}
      >
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
              placeholder="이메일을 입력해주세요."
              className={S.InputBox}
              {...register('email', {
                validate: (value) => {
                  if (value.length === 0) {
                    return undefined;
                  }
                  if (
                    (/^[sS]\d{2}0\d{2}$/.test(value) ||
                      /^[sS]\d{2}0\d{2}@gsm\.hs\.kr$/.test(value)) &&
                    value.length > 0
                  ) {
                    return true;
                  }
                  return '';
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
              placeholder="비밀번호를 입력해주세요."
              className={S.InputBox}
              {...register('password', {
                validate: (value) => {
                  if (value.length === 0) {
                    return undefined;
                  }
                  if (value.length >= 8 && value.length <= 16) {
                    return true;
                  }
                  return '';
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
        <button
          type="submit"
          className={isValid && allFieldsFilled ? S.LoginBtn : S.BlockLoginBtn}
          disabled={
            !isValid || !allFieldsFilled || Object.keys(errors).length > 0
          }
        >
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
