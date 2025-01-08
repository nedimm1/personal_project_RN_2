// SubjectsScreen Component
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

const SubjectsScreen = ({ navigation }) => {
  const [creatingSubject, setCreatingSubject] = useState(false);
  const [subjectName, setSubjectName] = useState("");
  const { subjects, setSubjects } = useContext(AppContext);

  function handleCreateSubject() {
    if (!subjectName.trim()) return; // Prevent empty subject names

    setSubjects((prevState) => [
      ...prevState,
      { subjectName, notes: [] },
    ]);
    setSubjectName(""); // Clear input
    setCreatingSubject(false); // Close form
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
        <Text style={styles.headerTitle}>Subjects</Text>
      </View>

      <View>
        <Button onPress={() => setCreatingSubject(true)} title="New Subject" />
        <View
          style={
            creatingSubject
              ? styles.subjectForm
              : { display: "none" }
          }
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
        {subjects.map((item) => (
          <View key={item.subjectName} style={styles.subjectItem}>
            <Text style={styles.subjectName}>{item.subjectName}</Text>
            {item.notes.map((note, idx) => (
              <Text key={idx} style={styles.noteText}>
                - {note}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SubjectsScreen;

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
  subjectForm: {
    marginTop: 20,
  },
  subjectItem: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noteText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
