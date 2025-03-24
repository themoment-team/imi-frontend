'use client';

import { useRouter } from 'next/navigation';

import { ClubSelector } from '@/components';

import { useState } from 'react';

import * as T from '../profile.css';
import * as S from './profileList.css';

const profiles = [
  { id: 1111, name: '정효주', major: 'FE', wanted: ['더모먼트', 'MSG'] },
  { id: 2222, name: '전준연', major: 'FE', wanted: ['더모먼트'] },
  { id: 3333, name: '이서준', major: 'FE', wanted: ['S/ASH'] },
  {
    id: 4444,
    name: '이상혁',
    major: 'AI',
    wanted: ['마인드웨이', '더모먼트'],
  },
  {
    id: 5555,
    name: '이세민',
    major: 'Security',
    wanted: ['인력사무소', '앰퍼샌드'],
  },
  {
    id: 6666,
    name: '김태은',
    major: 'BE',
    wanted: ['인력사무소', '맛소금'],
  },
];

export default function ProfileListPage() {
  const router = useRouter();
  const [selectedClubs, setSelectedClubs] = useState<string[]>([]);

  const toggleClub = (club: string) => {
    setSelectedClubs((prev) =>
      prev.includes(club) ? prev.filter((c) => c !== club) : [...prev, club]
    );
  };

  const filteredProfiles = selectedClubs.length
    ? profiles.filter((p) =>
        p.wanted.some((club) => selectedClubs.includes(club))
      )
    : profiles;

  return (
    <div className={S.ProfileListContainer}>
      <h1 className={S.Title}>자기소개서 목록</h1>

      {/* 동아리 */}
      <ClubSelector selectedClubs={selectedClubs} toggleClub={toggleClub} />

      {/* 자소서 카드 */}
      <div className={S.CardContainer}>
        {filteredProfiles.map((profile) => (
          <div
            key={profile.id}
            className={S.Card}
            onClick={() => router.push(`/profile/${profile.id}`)}
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
