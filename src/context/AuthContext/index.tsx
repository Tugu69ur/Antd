import { createContext, useEffect, useReducer } from "react";
import { useRequest } from "ahooks";
import { PageLoading } from "@ant-design/pro-layout";
import auth from "../../api/auth";

export const AuthContext = createContext<any>([
  { authorized: false, init: false, user: null },
  () => {},
]);

const initialState = {
  authorized: false,
  init: false,
  user: undefined,
};

const AuthActionTypes = {
  LOGIN: "LOGIN",
  INIT: "INIT",
  LOGOUT: "LOGOUT",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, authorized: true, user: action.payload };
    case AuthActionTypes.INIT:
      return { ...state, init: action.payload };
    case AuthActionTypes.LOGOUT:
      return { ...state, authorized: false, user: null };
    default:
      return state;
  }
};

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const userInfo = useRequest(auth.info, {
    manual: true,
    onSuccess: (result: any) => {
      const payload = {
        id: 1,
        name: "Tugo",
        email: "tugit8833@gmail.com",
        username: "Tuguldur",
        password: "qwe123",
      };
      console.log("User Info Fetched:", payload);
      dispatch({ type: AuthActionTypes.LOGIN, payload });
      dispatch({ type: AuthActionTypes.INIT, payload: true });
    },
    onError: (error) => {
      console.error("Auth Fetch Error:", error); 
      dispatch({ type: AuthActionTypes.LOGOUT, payload: null });
      dispatch({ type: AuthActionTypes.INIT, payload: true });
      auth.removeToken();
    },
  });

  useEffect(() => {
    userInfo.run();
  }, []);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {!state.init ? <PageLoading /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
