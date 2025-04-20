export interface Profile {
  name: string;
  email: string;
  studentId: number;
  wanted: string[];
  major: string;
  content: string;
}

export interface ProfileResponse {
  amount: number;
  profiles: Profile[];
}
