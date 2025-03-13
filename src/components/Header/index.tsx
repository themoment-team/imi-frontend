'use client';

import { useRouter } from 'next/Navigation';

import { ImiLogo } from '@/asset';

import { useState } from 'react';

import * as S from './header.css';

type NavigationType = {
  name: string;
  path: string;
};

export default function Header() {
  const router = useRouter();

  const [activePath, setActivePath] = useState<string>('');

  const handleNavigation = (path: string) => {
    setActivePath(path);
    router.push(path);
  };

  const NavigationArray: NavigationType[] = [
    { name: '동아리', path: '/clubs' },
    { name: '소개서 목록', path: '/profil/list' },
    { name: '자기소개서', path: '/profil/[id]' },
  ];

  /**
   *  로그인 여부를 판별하기 위해 임시로 만든 변수
   * 로그인 기능 추가후 삭제 & 변경 바람
   */
  const login = true;

  return (
    <div className={S.HeaderBox}>
      <div className={S.HeaderWrapper}>
        <div className={S.RightItems}>
          <div onClick={() => router.push('/')}>
            <ImiLogo width="51.97" height="40" />
          </div>
          <div className={S.Navigation}>
            {NavigationArray.map((value) => {
              return (
                <h3
                  key={value.name}
                  className={`${S.NavigationBtn}  `}
                  onClick={() => handleNavigation(value.path)}
                >
                  {value.name}
                  <div
                    className={`${S.Underline} ${
                      S.UnderlineVariants[
                        activePath === value.path ? 'active' : 'inactive'
                      ]
                    } ${S.UnderlineVariants}`}
                  />
                </h3>
              );
            })}
          </div>
        </div>
        <div className={S.LoginSignupBox}>
          {login ? (
            <div className={S.Logout}>로그아웃</div>
          ) : (
            <>
              <div
                className={S.LoginBtn}
                onClick={() => router.push('/signin')}
              >
                로그인
              </div>
              <div className={S.Signup} onClick={() => router.push('/signup')}>
                회원가입
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
