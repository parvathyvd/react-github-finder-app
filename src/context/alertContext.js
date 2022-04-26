import React, { useReducer } from "react";
import { useContext } from "react";
import alertReducer from "./alertReducer";

const AlertContext = React.createContext();

const AlertContextProvider = ({ children }) => {
  const initState = null;
  const [state, dispatch] = useReducer(alertReducer, initState);

  const setAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: "CLEAR_ALERT" });
    }, 3000);
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

const useAlertContext = () => {
  return useContext(AlertContext);
};

export { AlertContextProvider, useAlertContext };
