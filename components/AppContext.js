import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [subjectName, setSubjectName] = useState("");
  return (
    <AppContext.Provider value={{subjectName, setSubjectName}}>
      {children}
    </AppContext.Provider>
  );
};
