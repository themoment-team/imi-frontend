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
    '스타트업',
    '인큐브',
    '리큐브',
    '코디',
    '미술하는친구들',
    'NAVY',
    'Gamism',
    'air up',
    'SLASH',
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
