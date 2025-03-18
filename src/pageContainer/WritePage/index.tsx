'use client';

import { ClubToggle } from '@/components';

import * as S from './write.css';

const WritePage = () => {
  return (
    <div className={S.WritePageContainer}>
      <p className={S.Title}>자기소개서 작성</p>
      <div className={S.Section}>
        <p className={S.SectionTitle}>관심 분야</p>
        <input
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
          <ClubToggle />
        </div>
      </div>
      <div className={S.Section}>
        <p className={S.SectionTitle}>내용</p>
        <textarea
          placeholder="나의 장단점, 각오, 현재하고 있는 공부 등을 자유롭게 작성해보세요."
          className={S.TextareaField}
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
