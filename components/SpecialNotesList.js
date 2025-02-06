import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

const SpecialNotesList = () => {
  const { specialNotes } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Special Notes</Text>
      <FlatList
        data={specialNotes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteId}>Id: {item.id}</Text>
            <Text style={styles.noteText}>Note Text: {item.noteText}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noteItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  noteId: {
    fontWeight: 'bold',
  },
  noteText: {
    marginTop: 5,
  },
});

export default SpecialNotesList;
