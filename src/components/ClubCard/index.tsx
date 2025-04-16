import Image from 'next/image';

import { Club } from '@/types/clubResponse';

import * as S from './clubCard.css';

interface ClubCardProps {
  clubInfo: Club;
}

const ClubCard = ({ clubInfo }: ClubCardProps) => {
  return (
    <div className={S.CardContainer}>
      <div className={S.ImageWrapper}>
        <Image
          src={clubInfo.iconUrl}
          alt={clubInfo.name}
          width={361}
          height={207}
          priority
        />
      </div>
      <div className={S.InfoContainer}>
        <div className={S.HeaderRow}>
          <p className={S.ClubTitle}>{clubInfo.name}</p>
          <div className={S.LeaderBadge}>
            <p className={S.LeaderText}>{clubInfo.leader}</p>
          </div>
        </div>
        <p className={S.ProjectTitle}>{clubInfo.mainContent}</p>
      </div>
    </div>
  );
};

export default ClubCard;
