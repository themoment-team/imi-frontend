'use client';

import { useRouter } from 'next/navigation';

import { CloseEyes, ImiLogo, OpenEyes } from '@/asset';
import { axiosInstance } from '@/libs';

import { useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import * as S from './signUpOne.css';

type FormValues = {
  email: string;
  password: string;
  repassword?: string;
};

type FormName = 'email' | 'password' | 'repassword';

type SignUpOnePageProps = {
  formData: { email: string; password: string };
  setFormData: (data: any) => void;
  onNext: () => void;
};

const SignUpOnePage = ({
  formData,
  setFormData,
  onNext,
}: SignUpOnePageProps) => {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const [reIsOpen, setReOpen] = useState(false);

  const handleFocus = (id: FormName) => {
    setFocus(id);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    watch,
    setFocus,
  } = useForm<FormValues>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: formData.email || '',
      password: formData.password || '',
      repassword: formData.password || '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.email.length === 6) {
      data.email = data.email + '@gsm.hs.kr';
    }

    delete data.repassword;

    try {
      const response = await axiosInstance.post('/user/check-email', {
        email: data.email,
      });

      if (response) {
        setError('email', {
          type: 'server',
          message: '이미 존재하는 이메일입니다',
        });
        toast.error('이미 존재하는 이메일입니다');
      } else {
        setFormData(data);
        onNext();
      }
    } catch (error: any) {
      if (error.response?.state === 404 && error.response?.state === 503) {
        toast.error('에러가 발생했습니다');
      } else {
        toast.error('서버통신중 에러가 발생했습니다');
      }
    }
  };

  const allFieldsFilled = Object.values(watch()).every((value) => value !== '');

  const onError = (errors: FieldErrors) => {
    console.error(errors);
  };

  return (
    <div className={S.SignUpContainer}>
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
                  return '이메일 형식에 맞지 않습니다';
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
              errors.password || errors.repassword
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
                  if (
                    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()-_+=]{8,16}$/.test(
                      value
                    ) &&
                    value.length >= 8 &&
                    value.length <= 16
                  ) {
                    return true;
                  }
                  return '8~16자의 영문, 숫자를 포함해야합니다.';
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
          <div
            key={'rsepassword'}
            className={
              errors.repassword
                ? S.ReinputPasswordVariants.error
                : S.ReinputPasswordVariants.default
            }
            onClick={() => handleFocus('repassword')}
          >
            <input
              type={reIsOpen ? 'text' : 'password'}
              placeholder="비밀번호를 재입력해주세요."
              className={S.InputBox}
              {...register('repassword', {
                validate: (value) => {
                  if (!value) {
                    return '';
                  }
                  if (value.length === 0) {
                    return undefined;
                  }
                  if (watch('password') === value) {
                    return true;
                  }
                  return '비밀번호가 일치하지 않습니다';
                },
              })}
            />
            <div className={S.IconBox} onClick={() => setReOpen(!reIsOpen)}>
              {reIsOpen ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
          <div className={S.ErrorBox}>
            <div></div>
            {errors.repassword && (
              <p className={S.ErrorText}>{errors.repassword.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className={
            isValid && allFieldsFilled ? S.SignUpBtn : S.BlockSignUpBtn
          }
          disabled={
            !isValid || !allFieldsFilled || Object.keys(errors).length > 0
          }
        >
          다음
        </button>
      </form>
      <div className={S.SigninBox}>
        <p className={S.UnderText}>계정이 이미있으신가요?</p>
        <p className={S.GrayText} onClick={() => router.push('/signin')}>
          로그인
        </p>
      </div>
    </div>
  );
};

export default SignUpOnePage;
