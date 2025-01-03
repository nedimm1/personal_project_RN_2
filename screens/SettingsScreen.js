import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";

const SettingsScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = React.useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

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
        <Text style={styles.headerTitle}>Settings</Text>
      </View>

      {/* Settings Options */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#007BFF" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;

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
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  settingText: {
    fontSize: 16,
  },
});
