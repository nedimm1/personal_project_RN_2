import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [subjectName, setSubjectName] = useState("");
    const [subjects, sSubjects] = useState([])
  return (
    <AppContext.Provider value={{subjectName, setSubjectName, subjects, sSubjects}}>
      {children}
    </AppContext.Provider>
  );
};
