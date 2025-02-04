import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AppContext } from "./AppContext";

const SpecialNotes = () => {
  const { specialNotes } = useContext(AppContext);

  if (!specialNotes || specialNotes.length === 0) {
    return <Text style={styles.noNotes}>No special notes available.</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Special Notes</Text>
      {specialNotes.map((note) => (
        <View key={note.id}>
          <Text style={styles.note}>ID: {note.id}</Text>
          <Text style={styles.note}>Text: {note.noteText}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  note: {
    fontSize: 16,
    marginBottom: 10,
  },
  noNotes: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },
});

export default SpecialNotes;