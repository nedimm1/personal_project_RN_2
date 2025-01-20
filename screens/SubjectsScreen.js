import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { AppContext } from "../components/AppContext";
import DeleatButton from "../components/DeleatButton";

const SubjectsScreen = ({ navigation }) => {
  const [creatingSubject, setCreatingSubject] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const { subjects, setSubjects } = useContext(AppContext);

  function handleCreateSubject() {
    if (!subjectName.trim()) return;
    setSubjects((prevState) => [
      ...prevState,
      {
        id: Date.now(),
        subjectName,
        notes: [{ noteText: "" }],
      },
    ]);
    setSubjectName("");
    setCreatingSubject(false);
  }

  function handleDeleteSubject(subjectId) {
    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== subjectId)
    );
  }

  function handleDeleteNote(subjectIndex, noteIndex) {
    setSubjects((prevSubjects) =>
      prevSubjects.map((subject, sIdx) =>
        sIdx === subjectIndex
          ? {
              ...subject,
              notes: subject.notes.filter((_, nIdx) => nIdx !== noteIndex),
            }
          : subject
      )
    );
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
        <Text style={styles.headerTitle}>Subjects</Text>
      </View>
      <View>
        <Button onPress={() => setCreatingSubject(true)} title="New Subject" />
        <View
          style={creatingSubject ? styles.subjectForm : { display: "none" }}
        >
          <Text>Subject Name:</Text>
          <TextInput
            value={subjectName}
            onChangeText={(text) => setSubjectName(text)}
            placeholder="Enter subject name"
          />
          <Button onPress={handleCreateSubject} title="Create Subject" />
        </View>
      </View>
      <ScrollView>
        {subjects.map((item, subjectIndex) => (
          <View key={item.id} style={styles.subjectItem}>
            <Text style={styles.subjectName}>{item.subjectName}</Text>
            {item.notes.map((note, noteIndex) => (
              <View
                key={noteIndex}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <Text style={styles.noteText}>- {note.noteText}</Text>
                <DeleatButton
                  onPress={() => handleDeleteNote(subjectIndex, noteIndex)}
                  title="delete"
                />
              </View>
            ))}
            <DeleatButton
              title="Delete Subject"
              onPress={() => handleDeleteSubject(item.id)}
            />
          </View>
        ))}
      </ScrollView>
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
  subjectForm: {
    marginTop: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  subjectItem: {
    marginBottom: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
    color: "#333",
  },
  noteText: {
    fontSize: 16,
    marginLeft: 10,
    color: "#555",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default SubjectsScreen;
