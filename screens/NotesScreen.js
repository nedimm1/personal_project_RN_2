import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { AppContext } from "../components/AppContext";

const NotesScreen = ({ navigation }) => {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [note, setNote] = useState("");
  const { subjects, setSubjects } = useContext(AppContext);

  function handleSaveNote() {
    if (!note.trim() || !selectedSubject) return; // Prevent empty notes or unselected subject

    setSubjects((prevState) =>
      prevState.map((item) =>
        item.subjectName === selectedSubject
          ? { ...item, notes: [...item.notes, note] }
          : item
      )
    );
    setNote(""); // Clear note input
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notes Taker</Text>
      </View>

      {/* Subject Dropdown */}
      <View style={styles.inputContainer}>
        <View style={styles.dropdown}>
          <Picker
            selectedValue={selectedSubject}
            onValueChange={(itemValue) => setSelectedSubject(itemValue)}
          >
            <Picker.Item label="Select a subject" value="" />
            {subjects.map((item) => (
              <Picker.Item
                label={item.subjectName}
                value={item.subjectName}
                key={item.subjectName}
              />
            ))}
          </Picker>
        </View>
      </View>

      {/* Note Input */}
      <TextInput
        style={[styles.input, styles.noteInput]}
        placeholder="Make note here"
        multiline
        value={note}
        onChangeText={(newNote) => setNote(newNote)}
      />

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuButton: {
    padding: 10,
  },
  menuButtonText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "#f9f9f9",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
  },
  noteInput: {
    height: 150,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
