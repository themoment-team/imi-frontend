import { ClubCard } from '@/components';

import * as S from './clubs.css';

const ClubInfos = [
  {
    img: '/images/the-moment.png',
    name: '더모먼트',
    leader: '이세민',
    projects: 'Hello GSM, GSM Networking',
  },
];

const ClubsPage = () => {
  return (
    <div className={S.ClubsPageContainer}>
      <div className={S.HeaderRow}>
        <div className={S.AccentBar} />
        <p className={S.PageTitle}>동아리 목록</p>
      </div>
      <div className={S.ClubCardsContainer}>
        {ClubInfos.map((clubInfo, index) => {
          return <ClubCard key={index} clubInfo={clubInfo} />;
        })}
      </div>
    </div>
  );
};

export default ClubsPage;
