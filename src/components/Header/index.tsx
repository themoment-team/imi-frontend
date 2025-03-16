'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ImiLogo } from '@/asset';

import * as S from './header.css';

const navLinks = [
  { href: '/clubs', label: '동아리' },
  { href: '/profile/list', label: '소개서 목록' },
  { href: '/profile/2415', label: '자기소개서' }, // 로그인한 유저의 학번 불러오기 필요
];

const Header = () => {
  const path = usePathname();

  return (
    <div className={S.HeaderContainer}>
      <div className={S.NavigationContainer}>
        <Link href="/">
          <ImiLogo />
        </Link>
        <div className={S.NavLinks}>
          {navLinks.map(({ href, label }) => {
            return (
              <Link
                key={href}
                href={href}
                className={path === href ? S.ActiveNavLink : ''}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className={S.AuthBox}>
        <button className={S.SignInButton}>로그인</button>
        <button className={S.SignUpButton}>회원가입</button>
        {/* 로그인 여부에 따라 '로그인' or '로그아웃' 버튼 표시 필요. 현재는 임시 */}
      </div>
    </div>
  );
};

export default Header;
