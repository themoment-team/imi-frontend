export interface Club {
  id: number;
  name: string;
  leader: string;
  mainContent: string;
  notionUrl: string;
  iconUrl: string;
  isFunctionalClub: boolean;
}

export interface ClubsResponse {
  length: number;
  clubs: Club[];
}
