'use client';

import { useRouter } from 'next/navigation';

import { ArrowBtn } from '@/asset';
import { ClubSelector, Loading } from '@/components';
import { axiosInstance } from '@/libs';
import { Profile, ProfileResponse } from '@/types';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

import * as T from '../profile.css';
import * as S from './profileList.css';

const getProfileList = async () => {
  const data: ProfileResponse = await axiosInstance.get('/profile/list');
  return data.profileList ?? [];
};

export default function ProfileListPage() {
  const router = useRouter();

  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [isGradeDropdownOpen, setIsGradeDropdownOpen] = useState(false);

  const {
    data: profileList = [],
    isLoading,
    error,
  } = useQuery<Profile[]>({
    queryKey: ['profile/list'],
    queryFn: getProfileList,
  });

  if (isLoading) return <Loading />;

  if (error) {
    toast.error('정보 불러오기 중 오류가 발생했습니다.');
    console.error(error);
  }

  const toggleClub = (club: string) => {
    setSelectedClubs((prev) =>
      prev.includes(club) ? prev.filter((c) => c !== club) : [...prev, club]
    );
  };

  const toggleGrade = (grade: string) => {
    setSelectedGrade((prev) => (prev === grade ? null : grade));
    setIsGradeDropdownOpen(false);
  };

  const filteredProfileList = profileList.filter((p: Profile) => {
    const matchClub =
      selectedClubs.length === 0 ||
      p.wanted?.some((club: string) => selectedClubs.includes(club));

    const matchGrade =
      selectedGrade === null || String(p.studentId)[0] === selectedGrade;

    return matchClub && matchGrade;
  });

  return (
    <div className={S.ProfileListContainer}>
      <div className={S.TitleAndGradeSelector}>
        <h1 className={S.Title}>자기소개서 목록</h1>

        {/* 학년 필터 */}
        <div className={S.GradeSelector}>
          <button
            className={S.GradeToggle}
            onClick={() => setIsGradeDropdownOpen((prev) => !prev)}
          >
            <span className={selectedGrade ? S.SelectedText : S.DefaultText}>
              {selectedGrade ? `${selectedGrade}학년` : '학년 선택'}
            </span>

            <ArrowBtn width="1rem" height="1rem" className={S.ToggleBtn} />
          </button>

          {isGradeDropdownOpen && (
            <ul className={S.GradeDropdown}>
              {['1', '2', '3'].map((grade) => (
                <li
                  key={grade}
                  className={`${S.GradeOption} ${
                    selectedGrade === grade ? S.SelectedGrade : ''
                  }`}
                  onClick={() => toggleGrade(grade)}
                >
                  {grade}학년
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* 동아리 필터 */}
      <ClubSelector selectedClubs={selectedClubs} toggleClub={toggleClub} />

      {/* 자기소개서 카드 */}
      <div className={S.CardContainer}>
        {filteredProfileList.map((profile: Profile) => {
          const wantedText = Array.isArray(profile.wanted)
            ? profile.wanted.join(', ')
            : profile.wanted || '';

          return (
            <div
              key={profile.studentId}
              className={S.Card}
              onClick={() =>
                router.push(
                  `/profile/${encodeURIComponent(profile.studentId + profile.name)}`
                )
              }
            >
              <div className={T.TextContainer}>
                <p className={T.Tag}>이름</p>
                <p className={T.Content} title={profile.name}>
                  {profile.name}
                </p>
              </div>
              <div className={T.TextContainer}>
                <p className={T.Tag}>전공</p>
                <p className={T.Content} title={profile.major}>
                  {profile.major}
                </p>
              </div>
              <div className={S.WantedContainer}>
                <p className={T.Tag}>동아리</p>
                <p className={T.Content} title={wantedText}>
                  {wantedText}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
