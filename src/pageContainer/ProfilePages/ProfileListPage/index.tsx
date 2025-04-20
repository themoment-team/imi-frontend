'use client';

import { useRouter } from 'next/navigation';

import { ClubSelector } from '@/components';
import { Loading } from '@/components';
import { axiosInstance } from '@/libs';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

import * as T from '../profile.css';
import * as S from './profileList.css';

interface Profile {
  studentId: number;
  name: string;
  wanted: string[];
  major: string;
}

interface ProfileListResDto {
  amount: number;
  profileList: Profile[];
}

const getProfiles = async (): Promise<Profile[]> => {
  const data: ProfileListResDto = await axiosInstance.get('/profile/list');
  return data.profileList ?? [];
};

export default function ProfileListPage() {
  const router = useRouter();
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);

  const {
    data: profiles = [],
    isLoading,
    error,
  } = useQuery<Profile[]>({
    queryKey: ['profile/list'],
    queryFn: getProfiles,
  });

  if (isLoading) return <Loading />;

  if (error) {
    console.error('프로필 목록 불러오는 중 오류 발생:', error);
    return <div>프로필 목록을 불러오는 중 오류가 발생했습니다.</div>;
  }

  const toggleClub = (club: string) => {
    setSelectedClubs((prev) =>
      prev.includes(club) ? prev.filter((c) => c !== club) : [...prev, club]
    );
  };

  const filteredProfiles = selectedClubs.length
    ? profiles.filter((p: Profile) =>
        p.wanted?.some((club: string) => selectedClubs.includes(club))
      )
    : profiles;

  return (
    <div className={S.ProfileListContainer}>
      <h1 className={S.Title}>자기소개서 목록</h1>

      {/* 동아리 */}
      <ClubSelector selectedClubs={selectedClubs} toggleClub={toggleClub} />

      {/* 자소서 카드 */}
      <div className={S.CardContainer}>
        {filteredProfiles.map((profile: Profile) => (
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
              <p className={T.Content}> {profile.name}</p>
            </div>
            <div className={T.TextContainer}>
              <p className={T.Tag}>관심분야</p>
              <p className={T.Content}> {profile.major}</p>
            </div>

            <div className={S.WantedContainer}>
              <p className={T.Tag}>희망 동아리</p>
              <p className={T.Content}>
                {Array.isArray(profile.wanted)
                  ? profile.wanted.join(', ')
                  : profile.wanted}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
