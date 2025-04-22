import { ReactNode, createContext, useContext, useState } from 'react';

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth는 LoginProvider 안에서만 사용해야 합니다.');
  }
  return context;
};

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
