import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const NotesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes Taker</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Select Subject:</Text>
        <TextInput style={styles.input} placeholder="Subject" />
      </View>
      <TextInput
        style={[styles.input, styles.noteInput]}
        placeholder="Make note here"
        multiline
      />
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const SubjectsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Subjects</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Favorites</Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="Notes" component={NotesScreen} />
        <Drawer.Screen name="Subjects" component={SubjectsScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
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
