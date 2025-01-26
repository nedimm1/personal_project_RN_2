import firebase from "@react-native-firebase/database";

export const getNotes = async () => {
  const snapshot = await firebase().ref("note").once("value");
  return snapshot.val();
};

export const postNote = async (note) => {
  return firebase().ref("note").push(note);
};
