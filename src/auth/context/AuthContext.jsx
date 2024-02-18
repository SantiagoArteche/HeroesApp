import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../../types/types";

export const AuthContext = createContext();

const initialState = {
  logged: false,
};

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState, init);

  const loginUser = (name = "") => {
    const user = {
      id: Date.now(),
      name: name,
    };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    dispatch(action);
  };

  const logoutUser = () => {
    localStorage.removeItem("user");

    const action = {
      type: types.logout,
    };

    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
