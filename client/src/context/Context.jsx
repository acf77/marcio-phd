import React, { createContext, useState } from "react";

export const DEFAULT_STATE = {
  state: {
    agenteNotif: "",
    date: "",
  },
  setState: () => {},
};

const Context = createContext(DEFAULT_STATE);

const ContextProvider = ({ children }) => {
  const [state, setState] = useState(DEFAULT_STATE.state);

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export { Context, ContextProvider };
