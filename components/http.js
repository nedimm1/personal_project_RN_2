import axios from "axios";

export default function storeNote(dNote) {
  axios.post(
    "https://schoolnotestaker1-default-rtdb.firebaseio.com/note.json",
    dNote
  );
}
