import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [subjectName, setSubjectName] = useState("");
    const [subjects, setSubjects] = useState([])
  return (
    <AppContext.Provider value={{subjectName, setSubjectName, subjects, setSubjects}}>
      {children}
    </AppContext.Provider>
  );
};
