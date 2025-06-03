'use client';

import { useRouter } from 'next/navigation';

import { CloseEyes, ImiLogo, OpenEyes } from '@/asset';
import { axiosInstance } from '@/libs';

import { useEffect, useState } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import * as S from './signUpOne.css';

type FormValues = {
  email: string;
  password: string;
  repassword?: string;
  authCode?: number;
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

  const [authIsOpen, setAuthIsOpen] = useState<boolean>(false);

  const [authBtn, setAuthBtn] = useState<boolean>(false);
  const [emailAuth, setEmailAuth] = useState<boolean>(false);

  const [authStack, setAuthStack] = useState<number>(0);

  const [blockTime, setBlockTime] = useState<string>('');
  const [isBlock, setIsBlock] = useState<boolean>(false);

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
    delete data.authCode;

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

  const EmailAuth = async () => {
    const email = { email: watch('email') };

    if (email.email.length === 6) {
      email.email = email.email + '@gsm.hs.kr';
    }

    try {
      await axiosInstance.post('/auth/send-email', email);
      toast.success('이메일 전송이 완료되었습니다!');
      toast.info('메일이 안왔다면 스팸 메일함을 확인해주세요');
      setAuthStack(0);
      setAuthIsOpen(true);
    } catch (error) {
      toast.error('이메일 전송이 실패했습니다');
      console.error(error);
    }
  };

  const checkAuthCode = async (authCode: number) => {
    const email = { email: watch('email') };

    if (email.email.length === 6) {
      email.email = email.email + '@gsm.hs.kr';
    }
    try {
      await axiosInstance.post('/auth/verify-email', {
        email: email.email,
        authCode: authCode,
      });
      toast.success('이메일 인증에 성공했습니다.');
      setEmailAuth(true);
    } catch (error) {
      setAuthStack((e) => e + 1);
      if (authStack === 4) {
        toast.info('이메일 인증에 5회 실패했습니다');
        toast.info('모든 인증이 5분동안 수행되지 않습니다');
        countBlockTime(setBlockTime);
        setAuthStack((e) => e + 1);
      } else {
        toast.error('이메일 인증에 실패했습니다.');
      }
      console.error(error);
    }
  };

  const countBlockTime = (
    setTimeString: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setIsBlock(true);
    const startKey = 'count_block_time';
    const now = Date.now();
    let startTime = localStorage.getItem(startKey);

    if (!startTime) {
      localStorage.setItem(startKey, now.toString());
      startTime = now.toString();
    }

    const startTimestamp = parseInt(startTime, 10);
    const endTimestamp = startTimestamp + 5 * 60 * 1000;

    const interval = setInterval(() => {
      const now = Date.now();
      const timeLeft = Math.max(0, Math.floor((endTimestamp - now) / 1000));

      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      const formatted = `${String(minutes).padStart(1, '0')}:${String(seconds).padStart(2, '0')}`;
      setTimeString(formatted);

      if (timeLeft <= 0) {
        clearInterval(interval);
        setIsBlock(false);
        localStorage.removeItem(startKey);
      }
    }, 1000);
  };

  useEffect(() => {
    if (authStack > 4) {
      toast.info('email 인증코드를 다시 받아주세요');
      return;
    }

    const code = watch('authCode');
    if (String(code).length === 6 && code != undefined) {
      checkAuthCode(Number(code));
    }
  }, [watch('authCode')]);

  useEffect(() => {
    const existingStartTime = localStorage.getItem('count_block_time');
    if (existingStartTime) {
      countBlockTime(setBlockTime);
    }
  }, []);

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
          <div className={S.TextWrapper}>
            <p className={S.Text}>Email</p>
            {isBlock ? <p className={S.BlockTime}>{blockTime}</p> : null}
          </div>
          <div className={S.InputWrapper}>
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
                    setAuthBtn(false);
                    if (value.length === 0) {
                      return undefined;
                    }
                    if (
                      (/^[sS]\d{2}0\d{2}$/.test(value) ||
                        /^[sS]\d{2}0\d{2}@gsm\.hs\.kr$/.test(value)) &&
                      value.length > 0
                    ) {
                      setAuthBtn(true);
                      return true;
                    }
                    return '이메일 형식에 맞지 않습니다';
                  },
                })}
              />
              <p className={S.InputText}>@gsm.hs.kr</p>
            </div>
            <div
              className={
                authBtn && !emailAuth && !isBlock
                  ? S.AuthButton
                  : S.BlockAuthButton
              }
              onClick={
                authBtn && !emailAuth && !isBlock ? EmailAuth : undefined
              }
            >
              인증
            </div>
          </div>
        </div>
        <div className={S.ErrorBox}>
          <div></div>
          {errors.email && (
            <p className={S.ErrorText}>{errors.email.message}</p>
          )}
        </div>
        {authIsOpen ? (
          <div>
            <div className={S.InputAuthContainer}>
              <p className={S.Text}>인증번호</p>
              <div
                key={'authCode'}
                className={
                  errors.authCode || errors.authCode
                    ? S.inputAuthVariants.error
                    : S.inputAuthVariants.default
                }
              >
                <input
                  type="text"
                  pattern="[0-9]*"
                  className={S.InputBox}
                  placeholder="인증번호를 입력해주세요."
                  disabled={emailAuth || isBlock}
                  {...register('authCode', {
                    validate: (value) => {
                      if (String(value).length === 0) {
                        return undefined;
                      }
                      if (String(value).length > 6) {
                        return '6글자 아래로 입력해 주세요';
                      }
                      return (
                        /^\d+$/.test(String(value)) || '숫자만 입력해주세요.'
                      );
                    },
                  })}
                />
              </div>
            </div>
            <div className={S.ErrorBox}>
              <div></div>
              {errors.authCode && (
                <p className={S.ErrorText}>{errors.authCode.message}</p>
              )}
            </div>{' '}
          </div>
        ) : null}
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
            key={'repassword'}
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
            isValid && allFieldsFilled && emailAuth
              ? S.SignUpBtn
              : S.BlockSignUpBtn
          }
          disabled={!(isValid && allFieldsFilled && emailAuth)}
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
