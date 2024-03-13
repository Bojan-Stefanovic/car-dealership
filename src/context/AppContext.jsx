/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  // Adding a specific state for header fixed status
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  const value = {
    isHeaderFixed,
    setIsHeaderFixed,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
