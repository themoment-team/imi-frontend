'use client';

import { useRouter } from 'next/Navigation';

import { ImiLogo } from '@/asset';

import * as S from './header.css';

export default function Header() {
  const router = useRouter();

  /**
   *  로그인 여부를 판별하기 위해 임시로 만든 변수
   * 로그인 기능 추가후 삭제 & 변경 바람
   */
  const login = true;

  return (
    <div className={S.HeaderBox}>
      <div className={S.HeaderWrapper}>
        <div className={S.RightItems}>
          <ImiLogo width="51.97" height="40" />
          <div className={S.Navigation}>
            <h3
              className={S.NavigationBtn}
              onClick={() => {
                router.push('/');
              }}
            >
              홈
            </h3>
            <h3
              className={S.NavigationBtn}
              onClick={() => {
                router.push('/clubs');
              }}
            >
              동아리
            </h3>
            <h3
              className={S.NavigationBtn}
              onClick={() => {
                router.push('/profil/list');
              }}
            >
              소개서 목록
            </h3>
            <h3
              className={S.NavigationBtn}
              onClick={() => {
                router.push('/profil/[id]');
              }}
            >
              자기소개서
            </h3>
          </div>
        </div>
        <div className={S.LoginSignupBox}>
          {login ? (
            <button className={S.Logout}>로그아웃</button>
          ) : (
            <>
              <button
                className={S.LoginBtn}
                onClick={() => router.push('/signin')}
              >
                로그인
              </button>
              <button
                className={S.Signup}
                onClick={() => router.push('/signup')}
              >
                회원가입
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
