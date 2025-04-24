'use client';

import { ClubSelector } from '@/components';

import { useState } from 'react';

import * as S from './write.css';

const WritePage = () => {
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);
  const [major, setMajor] = useState('');

  const toggleClub = (club: string) => {
    setSelectedClubs((prev) =>
      prev.includes(club) ? prev.filter((c) => c !== club) : [...prev, club]
    );
  };

  return (
    <div className={S.WritePageContainer}>
      <p className={S.Title}>자기소개서 작성</p>
      <div className={S.Section}>
        <p className={S.SectionTitle}>관심 분야</p>
        <input
          value={major}
          onChange={(e) => setMajor(e.target.value)}
          placeholder="관심있는 분야를 작성해주세요. ex) 프론트엔드"
          className={S.InputField}
        />
      </div>
      <div className={S.Section}>
        <div className={S.SectionHeader}>
          <p className={S.SectionTitle}>동아리</p>
          <p className={S.SectionSubtitle}>희망 동아리를 선택해주세요.</p>
        </div>
        <div className={S.ToggleGroup}>
          <ClubSelector selectedClubs={selectedClubs} toggleClub={toggleClub} />
        </div>
      </div>
      <div className={S.Section}>
        <p className={S.SectionTitle}>내용</p>
        <textarea
          placeholder="나의 장단점, 각오, 현재하고 있는 공부 등을 자유롭게 작성해보세요."
          className={S.TextareaField}
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto';
            target.style.height = `${target.scrollHeight + 1.5}px`;
          }}
        />
      </div>
      <div className={S.ButtonGroup}>
        <button className={S.SaveButton}>임시 저장</button>
        <button className={S.SubmitButton}>작성 완료</button>
      </div>
    </div>
  );
};

export default WritePage;
