import { get } from '@/libs';
import { Profile } from '@/types';

import { useQuery } from '@tanstack/react-query';

export const useMyProfile = () =>
  useQuery({
    queryKey: ['myProfile'],
    queryFn: () => get<Profile>('/profile/my'),
  });
