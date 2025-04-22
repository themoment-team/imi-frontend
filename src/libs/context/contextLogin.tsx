import { ReactNode, createContext, useContext, useState } from 'react';

type AuthContextType = {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | boolean>(false);

export const useAuth = () => {
  const context = useContext(AuthContext);
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
