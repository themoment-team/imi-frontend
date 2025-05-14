import { AuthContext } from '@/contexts';

import { useContext } from 'react';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 LoginProvider 안에서만 사용해야 합니다.');
  }
  return context;
};
