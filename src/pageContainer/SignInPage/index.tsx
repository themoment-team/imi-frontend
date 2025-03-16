'use client';

import { useRouter } from 'next/navigation';

import { CloseEyes, ImiLogo, OpenEyes } from '@/asset';

import { useState } from 'react';

import * as S from './signIn.css';

const SignInPage = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const [emailValue, setEmailValue] = useState<string>('');
  const [pwValue, setPwValue] = useState<string>('');

  const router = useRouter();

  const handleRouter = () => {
    router.push('/signup');
  };

  const handlePassword = () => {
    setOpen((value) => !value);
  };

  return (
    <div className={S.SigninContainer}>
      <div className={S.LogoContainer}>
        <ImiLogo width="4.125rem" height="3rem" />
      </div>
      <div className={S.InputContainer}>
        <div className={S.InputEmailContainer}>
          <p className={S.Text}>Email</p>
          <div className={S.InputEmail}>
            <input
              placeholder="이메일을 입력해주세요"
              className={S.InputBox}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <p className={S.InputText}>@gsm.hs.kr</p>
          </div>
        </div>
        <div className={S.InputEmailContainer}>
          <p className={S.Text}>Password</p>
          <div className={S.InputEmail}>
            {isOpen ? (
              <input
                type="text"
                placeholder="비밀번호를 입력해주세요"
                className={S.InputBox}
                onChange={(e) => setPwValue(e.target.value)}
                value={pwValue}
              />
            ) : (
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className={S.InputBox}
                onChange={(e) => setPwValue(e.target.value)}
                value={pwValue}
              />
            )}
            <div className={S.IconBox} onClick={handlePassword}>
              {isOpen ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
        </div>
      </div>
      <div className={S.LoginBtn}>로그인</div>
      <div className={S.SignupBox}>
        <p className={S.Text}>계정이 없으신가요?</p>
        <p className={S.GrayText} onClick={handleRouter}>
          회원가입
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
