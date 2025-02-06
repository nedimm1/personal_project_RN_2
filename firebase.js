import database from "@react-native-firebase/database";

export const getNotes = async () => {
  const snapshot = await database().ref("note").once("value");
  return snapshot.val();
};

export const postNote = async (note) => {
  return database().ref("note").push(note);
};

export const fetchNotes = async () => {
  const response = await fetch("https://schoolnotestaker1-default-rtdb.firebaseio.com/note.json");
  const data = await response.json();
  console.log(Object.keys(data).map((key) => ({ id: key, ...data[key] })));
};


export const fetchSpecialNotes = async (setSpecialNotes) => {
  const response = await fetch("https://schoolnotestaker1-default-rtdb.firebaseio.com/note.json");
  const data = await response.json();
  const notes = Object.keys(data).map((key) => ({ id: key, noteText: data[key].noteText }));
  setSpecialNotes(notes);
};