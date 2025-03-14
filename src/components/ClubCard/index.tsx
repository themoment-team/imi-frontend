// ClubCard.tsx
import Image from 'next/image';

import * as S from './clubCard.css';

const ClubCard = () => {
  return (
    <div className={S.cardContainer}>
      <div className={S.imageWrapper}>
        <Image
          src="/images/the-moment.png"
          alt="더모먼트"
          width={361}
          height={207}
          priority
        />
      </div>
      <div className={S.infoContainer}>
        <div className={S.headerRow}>
          <p className={S.clubTitle}>더모먼트</p>
          <div className={S.leaderBadge}>
            <p className={S.leaderText}>이세민</p>
          </div>
        </div>
        <p className={S.projectTitle}>Hello GSM, GSM-Network</p>
      </div>
    </div>
  );
};

export default ClubCard;
