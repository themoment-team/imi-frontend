'use client';

import { useRouter } from 'next/navigation';

import * as S from './footer.css';

export default function Footer() {
  const router = useRouter();

  return (
    <div className={S.Container}>
      <div className={S.FooterBox}>
        <div className={S.UpperBox}>
          <div className={S.IntroduceBox}>
            <h3 className={S.TitleText}>IMI</h3>
            <p className={S.Text}>당신의 열정과 재능을 보여주세요!</p>
          </div>
          <div className={S.QuickLink}>
            <h3 className={S.TitleText}>Quick Link</h3>
            <p
              className={S.TextLink}
              onClick={() => {
                router.push('/clubs');
              }}
            >
              동아리
            </p>
            <p
              className={S.TextLink}
              onClick={() => {
                router.push('/write');
              }}
            >
              자기소개서 작성
            </p>
            <p
              className={S.TextLink}
              onClick={() => {
                router.push('/profile/list');
              }}
            >
              소개서 목록
            </p>
          </div>
          <div className={S.Contact}>
            <h3 className={S.TitleText}>Contant</h3>
            <a
              className={S.TextLink}
              href="https://mail.google.com/mail/?view=cm&fs=1&to=s24070@gsm.hs.kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              email: s24070@gsm.hs.kr
            </a>
            <a
              className={S.TextLink}
              href="https://www.instagram.com/j_.yx0n_?igsh=dG90em10d2dwajJm"
              target="_blank"
            >
              insta: j_.yx0n_
            </a>
            <a
              className={S.TextLink}
              href="https://discord.com/users/junjuny0227"
              target="_blank"
              rel="noopener noreferrer"
            >
              discord: junjuny0227
            </a>
          </div>
        </div>
        <div className={S.UnderBox}>
          <p className={S.Text}>© 2025 IMI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
