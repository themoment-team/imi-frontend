import Image from 'next/image';

import * as S from './clubCard.css';

interface ClubInfo {
  img: string;
  name: string;
  leader: string;
  projects: string;
}

const ClubCard = ({ clubInfo }: { clubInfo: ClubInfo }) => {
  return (
    <div className={S.CardContainer}>
      <div className={S.ImageWrapper}>
        <Image
          src={clubInfo.img}
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
        <p className={S.ProjectTitle}>{clubInfo.projects}</p>
      </div>
    </div>
  );
};

export default ClubCard;
