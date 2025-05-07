'use client';

import { useRouter } from 'next/navigation';

import { ClubSelector, Loading } from '@/components';
import { useMyProfile } from '@/hooks';
import { axiosInstance } from '@/libs';
import { Profile } from '@/types';

import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './write.css';

const WritePage = () => {
  const router = useRouter();

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!major.trim()) {
      toast.warn('관심 분야를 입력해주세요.');
      return;
    }
    if (selectedClubs.length === 0) {
      toast.warn('희망 동아리를 선택해주세요.');
      return;
    }

    mutate();
  };

  const {
    data: myProfile,
    error: myProfileError,
    isLoading: myProfileLoading,
  } = useMyProfile();

  useEffect(() => {
    if (myProfile) {
      setSelectedClubs(myProfile.wanted);
      setMajor(myProfile.major);
      setContent(
        myProfile.content === '아직 자소서를 작성하지 않았습니다.'
          ? ''
          : myProfile.content
      );
    }
  }, [myProfile]);

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
      router.push(`/profile/${myProfile?.studentId}${myProfile?.name}`);
      toast.success('작성이 완료되었습니다.');
    },
    onError: () => {
      toast.error('오류가 발생했습니다.');
    },
  });

  if (myProfileLoading) return <Loading />;

  if (myProfileError) {
    toast.error('정보 불러오기 중 오류 발생.');
    console.error('자기소개서 내용을 불러오는 중 오류 발생: ', myProfileError);
  }

  return (
    <div className={S.WritePageContainer}>
      <p className={S.Title}>자기소개서 작성</p>
      <form className={S.Form} onSubmit={handleSubmit}>
        <div className={S.Section}>
          <p className={S.SectionTitle}>전공</p>
          <input
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            placeholder="전공을 작성해주세요. ex) 프론트엔드"
            className={S.InputField}
          />
        </div>
        <div className={S.Section}>
          <div className={S.SectionHeader}>
            <p className={S.SectionTitle}>동아리</p>
            <p className={S.SectionSubtitle}>
              {String(myProfile?.studentId)[0] === '1' ? '희망' : '소속'}{' '}
              동아리를 선택해주세요.
            </p>
          </div>
          <div className={S.ToggleGroup}>
            <ClubSelector
              selectedClubs={selectedClubs}
              toggleClub={toggleClub}
            />
          </div>
        </div>
        <div className={S.Section}>
          <div className={S.SectionTitleBox}>
            <p className={S.SectionTitle}>내용</p>
            <p className={S.SectionSubtitle}>{content.length}/2400</p>
          </div>
          <textarea
            value={content}
            onChange={(e) => {
              const newContent = e.target.value;
              if (newContent.length <= 2400) {
                setContent(newContent);
              }
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
