import { createContext, useContext } from 'react';

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 LoginProvider 안에서만 사용해야 합니다.');
  }
  return context;
};
