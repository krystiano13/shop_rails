import { createContext, useState, useEffect } from "react";

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

  useEffect(() => {
    if (!localStorage.getItem("refresh_token")) return;

    fetch("http://localhost:3000/users/tokens/refresh", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refresh_token") as string}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setAuth({
            user: data.resource_owner.email,
            token: data.token,
            refresh_token: data.refresh_token,
            is_logged_in: true,
          });
        }
      });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
