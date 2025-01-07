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
  const { subjectName, setSubjectName, subjects, sSubjects } =
    useContext(AppContext);

  let i = 0;

  function handleCreateSubject() {
    setCreatingSubject((prev) => !prev);
    console.log(subjectName);
    i++;
    sSubjects((prevState) => [
      ...prevState,
      { subjectName, notes: ["test"], index: i },
    ]);
  }

  function handleCreatingSubject() {
    setCreatingSubject(true);
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
        <Button onPress={handleCreatingSubject} title="New Subject" />
        <View
          style={[
            styles.subjectForm,
            { display: creatingSubject ? "flex" : "none" },
          ]}
        >
          <Text>Subject Name:</Text>
          <TextInput
            onChangeText={(text) => setSubjectName(text)}
            placeholder="Enter subject name"
          />
          <Button onPress={handleCreateSubject} title="Create a Subject" />
        </View>
      </View>

      <ScrollView>
        {subjects.map((item, index) => (
          <View key={index}>
            <Text>{item.subjectName}</Text>
            <Text>{item.notes}</Text>
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
});
