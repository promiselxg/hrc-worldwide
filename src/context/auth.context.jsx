/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("userInfo")) || null,
  loading: false,
  error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const handleLogOut = async () => {
    try {
      localStorage.removeItem("userInfo");
      dispatch({ type: "LOGOUT" });
      window.location = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
