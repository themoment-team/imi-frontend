'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import EmptyProfile from '@/components/EmptyProfile';

import BackBtn from '../../../asset/BackBtn.png';
import * as T from '../styles/profile.css';
import * as S from './profile.css';

const profile = {
  id: 1111,
  name: '정효주',
  major: 'FE',
  wanted: ['더모먼트', 'MSG'],
  content:
    '안녕하세요 효주예요 제 엠비티아이는 엔프제이에요 친구들이 자꾸 저보고 티라고 하는데 저는 에프에요 사실 이 학교오고 티가 되긴 했는데 에프라고 우기고 있어요 감사합니다. 안녕하세요 효주예요 제 엠비티아이는 엔프제이에요 친구들이 자꾸 저보고 티라고 하는데 저는 에프에요 사실 이 학교오고 티가 되긴 했는데 에프라고 우기고 있어요 감사합니다. 안녕하세요 효주예요 제 엠비티아이는 엔프제이에요 친구들이 자꾸 저보고 티라고 하는데 저는 에프에요 사실 이 학교오고 티가 되긴 했는데 에프라고 우기고 있어요 감사합니다. 안녕하세요 효주예요 제 엠비티아이는 엔프제이에요 친구들이 자꾸 저보고 티라고 하는데 저는 에프에요 사실 이 학교오고 티가 되긴 했는데 에프라고 우기고 있어요 감사합니다. 안녕하세요 효주예요 제 엠비티아이는 엔프제이에요 친구들이 자꾸 저보고 티라고 하는데 저는 에프에요 사실 이 학교오고 티가 되긴 했는데 에프라고 우기고 있어요 감사합니다.  안녕하세요 효주예요 제 엠비티아이는 엔프제이에요 친구들이 자꾸 저보고 티라고 하는데 저는 에프에요 사실 이 학교오고 티가 되긴 했는데 에프라고 우기고 있어요 감사합니다. 안녕하세요 효주예요 제 엠비티아이는 엔프제이에요 친구들이 자꾸 저보고 티라고 하는데 저는 에프에요 사실 이 학교오고 티가 되긴 했는데 에프라고 우기고 있어요 감사합니다.',
  // '',
};

export default function ProfileDetail() {
  const router = useRouter();

  return (
    <div>
      {profile ? (
        <div className={S.ProfileDetailContainer}>
          <div className={S.BackBtn} onClick={() => router.back()}>
            <Image src={BackBtn} alt="Back" width={16} height={30} />
          </div>
          <h1 className={S.Name}>{profile.name}</h1>
          <div className={S.ContentContainer}>
            <a
              className={S.EditBtn}
              onClick={() => router.push(`/write/${profile.id}`)}
            >
              수정하기
            </a>
            <div className={T.TextContainer}>
              <p className={T.Tag}>관심 분야</p>
              <p className={T.Content}>{profile.major}</p>
            </div>
            <div className={T.TextContainer}>
              <p className={T.Tag}>희망 동아리</p>
              <p className={T.Content}>{profile.wanted}</p>
            </div>

            <p className={S.Content}>
              {profile.content.trim()
                ? profile.content
                : '자기소개서가 아직 작성되지 않았습니다.'}
            </p>
          </div>
        </div>
      ) : (
        <EmptyProfile />
      )}
    </div>
  );
}
