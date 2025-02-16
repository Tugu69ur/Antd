import { decryptWithAES, encryptWithAES } from "../../utils/parse";
import http from "..";
import { LoginData, LoginResponse } from "./type";

const tokenKey = "newsadmin.token";
const userKey = "app.user";

namespace auth {
  export const login = (body?: LoginData) =>
    http.post<LoginResponse>("api/login", { body });

  export const saveToken = (token: string) => {
    localStorage.setItem(tokenKey, token);
  };

  export const hasToken = () => !!localStorage.getItem(tokenKey);
  export const removeToken = () => localStorage.removeItem(tokenKey);
  export const getToken = () => localStorage.getItem(tokenKey);

  export const info = () =>
    http.get("api/login", { hasAuth: true });

  export const rememberUser = (values: LoginData) => {
    if (values.remember) {
      localStorage.setItem(userKey, encryptWithAES(JSON.stringify(values)));
    } else {
      localStorage.removeItem(userKey);
    }
  };

  export const getRememberUser = () => {
    const userData = localStorage.getItem(userKey);
    if (userData) {
      return JSON.parse(decryptWithAES(userData)) as LoginData;
    }
    return undefined;
  };
}

export default auth;
