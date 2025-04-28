import { AuthContext } from '@/libs';

import { ReactNode, useState } from 'react';

export const LoginProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
