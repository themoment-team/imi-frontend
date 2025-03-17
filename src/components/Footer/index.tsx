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
                router.push('/profile/list');
              }}
            >
              자기소개서 작성
            </p>
            <p
              className={S.TextLink}
              onClick={() => {
                router.push('/profile/[id]');
              }}
            >
              소개서 목록
            </p>
          </div>
          <div className={S.Contact}>
            <h3 className={S.TitleText}>Contant</h3>
            <p className={S.Text}>email: s24070@gsm.hs.kr</p>
            <a
              className={S.Text}
              href="https://www.instagram.com/j_.yx0n_?igsh=dG90em10d2dwajJm"
              target="_blank"
            >
              insta: j_.yx0n_
            </a>
            <p className={S.Text}>discord: junjuny0227</p>
          </div>
        </div>
        <div className={S.UnderBox}>
          <p className={S.Text}>© 2025 IMI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
