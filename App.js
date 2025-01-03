import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import NotesScreen from "./screens/NotesScreen";
import SubjectsScreen from "./screens/SubjectsScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Drawer = createDrawerNavigator();

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
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
