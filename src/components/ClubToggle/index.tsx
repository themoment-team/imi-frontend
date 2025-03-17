'use client';

import { useState } from 'react';

import * as S from './clubToggle.css';

const ClubToggle = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onClick={() => setIsActive((prev) => !prev)}
      className={!isActive ? S.InactiveButton : S.ActiveButton}
    >
      더모먼트
    </button>
  );
};

export default ClubToggle;
