'use client';

import Link from 'next/link';

import { DownArrow } from '@/asset';

import * as S from './section1.css';

const Section1 = ({ scrollToSection2 }: { scrollToSection2: () => void }) => {
  return (
    <section className={S.SectionContainer}>
      <div className={S.ContentContainer}>
        <div className={S.IntroBox}>
          <h1 className={S.IntroText}>자신을 소개하고 동아리에 지원하세요!</h1>
          <p className={S.DescriptionText}>
            당신의 열정과 재능을 보여줄 기회입니다.
          </p>
        </div>
        <Link href="/signin">
          <button className={S.ActionButton}>
            로그인
            {/* 로그인 여부에 따라 바로가기 or 로그인 버튼 표시 필요 */}
          </button>
        </Link>
      </div>
      <div className={S.AnimatedArrow} onClick={scrollToSection2}>
        <DownArrow />
      </div>
    </section>
  );
};

export default Section1;
