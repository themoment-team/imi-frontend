import { ClubCard } from '@/components';

import * as S from './clubs.css';

const ClubsPage = () => {
  return (
    <div className={S.ClubsPageContainer}>
      <div className={S.HeaderRow}>
        <div className={S.AccentBar} />
        <p className={S.PageTitle}>동아리 목록</p>
      </div>
      <div className={S.ClubCardsContainer}></div>
    </div>
  );
};

export default ClubsPage;
