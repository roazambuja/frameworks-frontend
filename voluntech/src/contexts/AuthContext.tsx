import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import api from "../services/api";
import { getUser, OrganizationInterface, UserInterface } from "../services/users";

interface AuthContextData {
  user: any;
  login: (token: string) => void;
  logout: () => void;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  function getPayload(token: string) {
    const payloadBase64 = token.split(".")[1];
    const payloadJson = atob(payloadBase64);
    return JSON.parse(payloadJson);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      login(token);
    }
    setLoading(false);
  }, []);

  async function login(token: string) {
    // COMENTAR TODO O CÓDIGO ABAIXO PARA RODAR APLICAÇÃO COM BACKEND
    setUser({
      _id: "1",
      name: "Voluntech",
      role: "Organização",
      profilePicture: {
        filePath: "path",
        publicId: "profile-pictures/voluntech.png",
      },
      cause: "Apoio ao Terceiro Setor",
      description:
        "Voluntech é uma aplicação web criada com o objetivo de conectar ONGs e Voluntários.",
    });
    localStorage.setItem("token", token);

    // DESCOMENTAR CÓDIGO ABAIXO PARA RODAR APLICAÇÃO COM BACKEND
    // setLoading(true);
    // api.defaults.headers["Authorization"] = `Bearer ${token}`;
    // let payload = getPayload(token);

    // try {
    //   let { data } = await getUser(payload.user);
    //   if (!localStorage.getItem("token")) {
    //     localStorage.setItem("token", token);
    //   }
    //   setUser(data.data);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = "";
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
