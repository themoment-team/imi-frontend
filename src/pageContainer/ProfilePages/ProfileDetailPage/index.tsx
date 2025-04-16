'use client';

import { usePathname, useRouter } from 'next/navigation';

import { BackBtn } from '@/asset';
import { EmptyProfile } from '@/components';
import Loading from '@/components/Loading';
import { axiosInstance } from '@/libs';
import NotFoundPage from '@/pageContainer/NotFoundPage';

import { useQuery } from '@tanstack/react-query';

import * as T from '../profile.css';
import * as S from './profileDetail.css';

interface ProfileResDto {
  name: string;
  email: string;
  studentId: number;
  wanted?: string[];
  major?: string;
  content?: string;
}

// // 목업
// const getProfile = async (
//   studentNameId: string
// ): Promise<ProfileResDto | null> => {
//   console.log('목업');

//   return {
//     name: '이세민',
//     email: 'semin@gsm.hs.kr',
//     studentId: 2110,
//     wanted: ['더모먼트', '소개과'],
//     major: '프론트엔드',
//     content: '자기소개서 내용입니다.',
//   };
// };

// // 목업
// const getMyProfile = async (): Promise<ProfileResDto | null> => {
//   console.log('목업');

//   return {
//     name: '이세민',
//     email: 'semin@gsm.hs.kr',
//     studentId: 2110,
//     major: '인형 뺏기',
//     wanted: ['더모먼트', '소개과'],
//     content: '이것은 내 자기소개서입니다.',
//   };
// };

const getProfile = async (
  studentNameId: string
): Promise<ProfileResDto | null> => {
  try {
    const response = await axiosInstance.get<ProfileResDto>(
      `/profile/${studentNameId}`,
      {
        headers: {
          Authorization: undefined,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('profile 요청 실패: ', error);
    return null;
  }
};

const getMyProfile = async (): Promise<ProfileResDto | null> => {
  try {
    const response = await axiosInstance.get<ProfileResDto>(`/profile/my`);
    return response.data;
  } catch (error) {
    console.error('my profile 요청 실패: ', error);
    return null;
  }
};

export default function ProfileDetailPage() {
  const pathname = usePathname();
  const idFromPath = pathname.split('/').pop() || '';
  const studentNameId = decodeURIComponent(idFromPath);

  console.log('studentNameId:', studentNameId);

  const router = useRouter();

  const { data: profile, isLoading } = useQuery<ProfileResDto | null>({
    queryKey: ['profile', studentNameId],
    queryFn: () => getProfile(studentNameId),
  });

  const { data: myProfile } = useQuery({
    queryKey: ['myProfile'],
    queryFn: getMyProfile,
  });

  const isMyProfile =
    profile &&
    myProfile &&
    `${profile.studentId}${profile.name}` ===
      `${myProfile.studentId}${myProfile.name}`;

  if (isLoading) return <Loading />;
  if (!profile && isMyProfile) return <EmptyProfile />;
  if (!profile) return <NotFoundPage />;

  return (
    <div className={S.ProfileDetailContainer}>
      <div className={S.BackBtn} onClick={() => router.back()}>
        <BackBtn />
      </div>
      <h1 className={S.Name}>{profile.name}</h1>
      <div className={S.ContentContainer}>
        {isMyProfile && (
          <a className={S.EditBtn} onClick={() => router.push(`/write`)}>
            수정하기
          </a>
        )}

        <div className={T.TextContainer}>
          <p className={T.Tag}>관심 분야</p>
          <p className={T.Content}>{profile.major}</p>
        </div>

        <div className={T.TextContainer}>
          <p className={T.Tag}>희망 동아리</p>
          <p className={T.Content}>
            {Array.isArray(profile.wanted)
              ? profile.wanted.join(', ')
              : profile.wanted}
          </p>
        </div>

        <p className={S.Content}>
          {profile.content?.trim()
            ? profile.content
            : '자기소개서가 아직 작성되지 않았습니다.'}
        </p>
      </div>
    </div>
  );
}
