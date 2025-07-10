'use client';

import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { CloseEyes, ImiLogo, OpenEyes } from '@/asset';
import { useAuth } from '@/hooks';
import { axiosInstance } from '@/libs';
import { LoginResponse } from '@/types';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import * as S from './signIn.css';

type FormValues = {
  email: string;
  password: string;
};

type FormName = 'email' | 'password';

const SignInPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    watch,
    setFocus,
  } = useForm<FormValues>({ mode: 'onBlur', reValidateMode: 'onBlur' });

  const { setIsLogged } = useAuth();

  const loginMutation = useMutation<LoginResponse, AxiosError, FormValues>({
    mutationFn: async (data: FormValues) => {
      const loginData = { ...data };
      if (loginData.email.length === 6) {
        loginData.email = loginData.email + '@gsm.hs.kr';
      }
      const response = await axiosInstance.post<LoginResponse>(
        '/auth/login',
        loginData
      );
      return response as unknown as LoginResponse;
    },
    onSuccess: (response) => {
      document.cookie = `accessToken=${response.accessToken}; path=/;`;
      document.cookie = `refreshToken=${response.refreshToken}; path=/;`;
      setIsLogged(true);
      toast.success('로그인에 성공했습니다');
      router.push('/');
    },
    onError: () => {
      toast.error('이메일 또는 비밀번호가 일치하지 않습니다.');
      setError('email', {
        type: 'server',
        message: '',
      });
      setError('password', {
        type: 'server',
        message: '이메일 또는 비밀번호가 일치하지 않습니다.',
      });
    },
  });

  const onSubmit = async (data: FormValues) => {
    loginMutation.mutate(data);
  };

  const handleFocus = (id: FormName) => {
    setFocus(id);
  };

  const allFieldsFilled = Object.values(watch()).every((value) => value !== '');

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
            onClick={() => handleFocus('email')}
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
            onClick={() => handleFocus('password')}
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
            <div className={S.IconBox} onClick={() => setIsOpen(!isOpen)}>
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
        <p className={S.GrayText} onClick={() => router.push('/password')}>
          비밀번호재설정
        </p>
        <div className={S.Divid} />
        <p className={S.GrayText} onClick={() => router.push('/signup')}>
          회원가입
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
