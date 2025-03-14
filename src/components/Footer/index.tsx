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
            <h1 className={S.Text}>IMI</h1>
            <p className={S.Text}>당신의 열정과 재능을 보여주세요!</p>
          </div>
          <div className={S.QuickLink}>
            <h1 className={S.Text}>Quick Link</h1>
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
                router.push('/profil/list');
              }}
            >
              자기소개서 작성
            </p>
            <p
              className={S.TextLink}
              onClick={() => {
                router.push('/profil/[id]');
              }}
            >
              소개서 목록
            </p>
          </div>
          <div className={S.Contact}>
            <h1 className={S.Text}>Contant</h1>
            <p className={S.Text}>email:</p>
            <p className={S.Text}>insta:</p>
            <p className={S.Text}>phone:</p>
          </div>
        </div>
        <div className={S.UnderBox}>
          <p className={S.Text}>© 2025 IMI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
