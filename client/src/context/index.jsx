import { ContextProvider } from "./Context";

export const GlobalContext = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};
