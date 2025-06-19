'use client';

import { ClubCard } from '@/components';
import Loading from '@/components/Loading';
import { get } from '@/libs';
import { ClubsResponse } from '@/types';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';

import * as S from './clubs.css';

const ClubsPage = () => {
  const [isFunctionalClub, setIsFunctionalClub] = useState<boolean>(false);

  const { data, error, isLoading } = useQuery({
    queryKey: ['clubInfos'],
    queryFn: () => get<ClubsResponse>('/club'),
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 24,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  if (isLoading) return <Loading />;

  if (error) {
    toast.error('정보 불러오기 중 오류가 발생했습니다.');
    console.error(error);
  }

  const filteredClubs = data?.clubs.filter(
    (club) => club.isFunctionalClub === isFunctionalClub
  );

  return (
    <div className={S.ClubsPageContainer}>
      <div className={S.HeaderRow}>
        <div className={S.HeaderLeft}>
          <div className={S.AccentBar} />
          <p className={S.PageTitle}>동아리 목록</p>
        </div>
        <div className={S.HeaderRight}>
          <button
            className={`${S.FilterButton} ${!isFunctionalClub ? S.FilterButtonActive : ''}`}
            onClick={() => setIsFunctionalClub(false)}
          >
            전공동아리
          </button>
          <div className={S.SeparatorBar} />
          <button
            className={`${S.FilterButton} ${isFunctionalClub ? S.FilterButtonActive : ''}`}
            onClick={() => setIsFunctionalClub(true)}
          >
            전공심화동아리
          </button>
        </div>
      </div>
      <div className={S.ClubCardsContainer}>
        {filteredClubs?.map((clubInfo) => {
          return <ClubCard key={clubInfo.id} clubInfo={clubInfo} />;
        })}
      </div>
    </div>
  );
};

export default ClubsPage;
