'use client';

import { ClubCard } from '@/components';
import Loading from '@/components/Loading';
import { get } from '@/libs';
import { ClubsResponse } from '@/types';

import { useQuery } from '@tanstack/react-query';

import * as S from './clubs.css';

const ClubsPage = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['clubInfos'],
    queryFn: () => get<ClubsResponse>('/club'),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <Loading />;

  if (error) return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;

  return (
    <div className={S.ClubsPageContainer}>
      <div className={S.HeaderRow}>
        <div className={S.AccentBar} />
        <p className={S.PageTitle}>동아리 목록</p>
      </div>
      <div className={S.ClubCardsContainer}>
        {data?.clubs.map((clubInfo) => {
          return <ClubCard key={clubInfo.id} clubInfo={clubInfo} />;
        })}
      </div>
    </div>
  );
};

export default ClubsPage;
