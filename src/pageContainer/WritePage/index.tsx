'use client';

import { ClubSelector } from '@/components';
import { axiosInstance } from '@/libs';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './write.css';

const WritePage = () => {
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);
  const [major, setMajor] = useState('');
  const [content, setContent] = useState('');

  const toggleClub = (club: string) => {
    setSelectedClubs((prev) =>
      prev.includes(club) ? prev.filter((c) => c !== club) : [...prev, club]
    );
  };

  const handleResizeHeight = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = 'auto';
    target.style.height = `${target.scrollHeight + 1.8}px`;
  };

  const { mutate } = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.put('/profile', {
        wanted: selectedClubs,
        major,
        content,
      });
      return response;
    },
    onSuccess: () => {
      toast.success('작성이 완료되었습니다.');
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!major.trim()) {
      toast.warn('관심 분야를 입력해주세요.');
      return;
    } else if (selectedClubs.length === 0) {
      toast.warn('희망 동아리를 선택해주세요.');
      return;
    } else if (!content.trim()) {
      toast.warn('내용을 입력해주세요.');
      return;
    }

    mutate();
  };

  return (
    <div className={S.WritePageContainer}>
      <p className={S.Title}>자기소개서 작성</p>
      <form className={S.Form} onSubmit={handleSubmit}>
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
            <ClubSelector
              selectedClubs={selectedClubs}
              toggleClub={toggleClub}
            />
          </div>
        </div>
        <div className={S.Section}>
          <p className={S.SectionTitle}>내용</p>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              handleResizeHeight(e);
            }}
            placeholder="나의 장단점, 각오, 현재하고 있는 공부 등을 자유롭게 작성해보세요."
            className={S.TextareaField}
          />
        </div>
        <button type="submit" className={S.SubmitButton}>
          작성 완료
        </button>
      </form>
    </div>
  );
};

export default WritePage;
