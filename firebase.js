import firebase from "@react-native-firebase/database";

export const getNotes = async () => {
  const snapshot = await firebase().ref("note").once("value");
  return snapshot.val();
};

export const postNote = async (note) => {
  return firebase().ref("note").push(note);
};

export const fetchNotes = async () => {
  const response = await fetch("https://schoolnotestaker1-default-rtdb.firebaseio.com/note.json");
  const data = await response.json();
  const notes = [];
  for (const key in data) {
    notes.push({
      id: key,
      ...data[key],
    });
  }
  console.log(notes)
};
