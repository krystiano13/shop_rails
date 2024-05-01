import { createContext, useState } from "react";

interface Auth {
  user: string;
  token: string;
  refresh_token: string;
  is_logged_in: boolean;
}

interface AuthState {
  auth: Auth;
  setAuth: (auth: Auth) => void;
}

const defaultValue: Auth = {
  user: "",
  token: "",
  refresh_token: "",
  is_logged_in: false,
};

export const AuthContext = createContext<{
  auth: Auth;
  setAuth: (auth: Auth) => void;
}>({
  auth: defaultValue,
  setAuth: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<Auth>(defaultValue);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
