import Image from 'next/image';

import * as S from './clubCard.css';

const ClubCard = () => {
  return (
    <div className={S.CardContainer}>
      <div className={S.ImageWrapper}>
        <Image
          src="/images/the-moment.png"
          alt="더모먼트"
          width={361}
          height={207}
          priority
        />
      </div>
      <div className={S.InfoContainer}>
        <div className={S.HeaderRow}>
          <p className={S.ClubTitle}>더모먼트</p>
          <div className={S.LeaderBadge}>
            <p className={S.LeaderText}>이세민</p>
          </div>
        </div>
        <p className={S.ProjectTitle}>Hello GSM, GSM-Network</p>
      </div>
    </div>
  );
};

export default ClubCard;
