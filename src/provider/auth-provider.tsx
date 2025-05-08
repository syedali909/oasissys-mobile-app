import { createContext, useContext, useEffect, useState } from "react";
import { useAppStore } from "../stores";

const AuthContext = createContext<any>({
  isUserLogin: false,
});

export const AuthProvider = ({ children }: any) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const { fetchUser } = useAppStore();

  useEffect(() => {
    if (isUserLogin) {
      fetchUser();
    }
  }, [isUserLogin]);

  return (
    <AuthContext.Provider
      value={{
        isUserLogin,
        setIsUserLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
