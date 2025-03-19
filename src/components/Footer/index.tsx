'use client';

import { usePathname } from 'next/navigation';

import { Discord, Insta } from '@/asset';
import Github from '@/asset/Github';

import { useEffect, useState } from 'react';

import * as S from './footer.css';

export default function Footer() {
  const [display, setDisplay] = useState<boolean>(false);

  const ProPath = ['/', '/profile/list', '/clubs', '/profile/[id]'];

  const pathname = usePathname();

  useEffect(() => {
    setDisplay(true);
    if (!ProPath.includes(pathname)) {
      setDisplay(() => false);
    }
  }, [pathname]);

  return (
    display && (
      <div className={S.Container}>
        <div className={S.FooterBox}>
          <div className={S.UpperBox}>
            <div className={S.IntroduceBox}>
              <h3 className={S.TitleText}>IMI</h3>
              <p className={S.Text}>당신의 열정과 재능을 보여주세요!</p>
            </div>
            <div className={S.Contact}>
              <div className={S.SvgContainer}>
                <a
                  className={S.TextLink}
                  href="https://github.com/themoment-team/imi-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a
                  className={S.TextLink}
                  href="https://www.instagram.com/j_.yx0n_/"
                  target="_blank"
                >
                  <Insta />
                </a>
                <a
                  className={S.TextLink}
                  href="https://discord.com/users/junjuny0227"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Discord />
                </a>
              </div>
              <p className={S.Text}>© 2025 IMI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
