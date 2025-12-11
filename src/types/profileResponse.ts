export interface Profile {
  name: string;
  email: string;
  studentId: number;
  wanted: string[];
  major: string;
  content: string;
  isLinked: boolean;
}

export interface ProfileResponse {
  amount: number;
  profileList: Profile[];
}
