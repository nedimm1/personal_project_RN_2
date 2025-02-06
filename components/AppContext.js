import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [subjectName, setSubjectName] = useState("");
    const [subjects, setSubjects] = useState([])
    const [specialNotes, setSpecialNotes] = useState([])
  return (
    <AppContext.Provider value={{subjectName, setSubjectName, subjects, setSubjects, specialNotes}}>
      {children}
    </AppContext.Provider>
  );
};
