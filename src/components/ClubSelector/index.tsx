import * as S from './clubSelector.css';

interface ClubSelectorProps {
  selectedClubs: string[];
  toggleClub: (club: string) => void;
}

export default function ClubSelector({
  selectedClubs,
  toggleClub,
}: ClubSelectorProps) {
  const clubs = [
    '더모먼트',
    'MSG',
    '앰퍼샌드',
    '마인드웨이',
    '잡탕',
    'S/ASH',
    '인력사무소',
    '깨소금',
    '맛소금',
    '아티',
    '마사삭',
    '코디',
    '아잉',
    '콩보리',
  ];

  return (
    <div className={S.ClubsContainer}>
      {clubs.map((club) => (
        <a
          key={club}
          className={`${S.Club} ${selectedClubs.includes(club) ? S.Active : ''}`}
          onClick={() => toggleClub(club)}
        >
          {club}
        </a>
      ))}
    </div>
  );
}
