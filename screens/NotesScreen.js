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
    if (!note.trim() || !selectedSubject) return;
    setSubjects((prevState) =>
      prevState.map((item) =>
        item.subjectName === selectedSubject
          ? { ...item, notes: [...item.notes, { noteText: note }] }
          : item
      )
    );
    setNote("");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notes Taker</Text>
      </View>
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
      <TextInput
        style={[styles.input, styles.noteInput]}
        placeholder="Make note here"
        multiline
        value={note}
        onChangeText={(newNote) => setNote(newNote)}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveNote}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  menuButton: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
  },
  menuButtonText: {
    color: "#fff",
    fontSize: 20,
  },
  headerTitle: {
    flex: 1,
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    marginBottom: 15,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
    elevation: 2,
  },
  noteInput: {
    height: 150,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default NotesScreen;
