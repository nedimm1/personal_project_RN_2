import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const DeleatButton = ({
  title,
  onPress,
  backgroundColor = "#007BFF",
  textColor = "#FFFFFF",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      title={title}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DeleatButton;
