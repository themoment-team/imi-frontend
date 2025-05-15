'use client';

import { useRouter } from 'next/navigation';

import { ClubSelector, Loading } from '@/components';
import { useMyProfile } from '@/hooks';
import { put } from '@/libs';

import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './write.css';

const MAX_CONTENT_LENGTH = 2400;

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

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
      return '작성하던 내용이 모두 사라집니다. 계속하시겠습니까?';
    };

    if (window !== undefined)
      window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const { mutate } = useMutation({
    mutationFn: () =>
      put('/profile', {
        wanted: selectedClubs,
        major: major.trim(),
        content: content.trim(),
      }),
    onSuccess: () => {
      if (myProfile && myProfile.studentId && myProfile.name) {
        router.push(`/profile/${myProfile.studentId}${myProfile.name}`);
        toast.success('작성이 완료되었습니다.');
      } else {
        toast.error('프로필 정보를 찾을 수 없습니다.');
      }
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
            <p className={S.SectionSubtitle}>
              {content.length}/{MAX_CONTENT_LENGTH}
            </p>
          </div>
          <textarea
            value={content}
            onChange={(e) => {
              const newContent = e.target.value;
              if (newContent.length <= MAX_CONTENT_LENGTH) {
                setContent(newContent);
              } else {
                toast.warn('2400자를 초과했습니다.');
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
