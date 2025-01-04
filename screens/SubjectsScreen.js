import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button, TextInput } from "react-native";

const SubjectsScreen = ({ navigation }) => {
  const [creatingSubject, setCreatingSubject] = useState(false);
  const [subjectName, setSubjectName] = useState("");

  function handleCreateSubject() {
    setCreatingSubject((prev) => !prev);
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
        <Button onPress={handleCreateSubject} title="New Subject" />
        <View
          style={[
            styles.subjectForm,
            { display: creatingSubject ? "flex" : "none" },
          ]}
        >
          <Text>Subject Name:</Text>
          <TextInput
            value={subjectName}
            onChangeText={(text) => setSubjectName(text)}
            placeholder="Enter subject name"
          />
          <Button onPress={handleCreateSubject} title="Create a Subject" />
        </View>
      </View>
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
});
