import { AuthContext } from "context/AuthContext";
import { useContext } from "react";

export type AuthContextType = [any, (action: any) => void];

export const useAuthContext: () => AuthContextType = () => {
  return useContext<AuthContextType>(AuthContext);
};
