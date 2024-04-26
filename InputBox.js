import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const InputBox = ({ inpTitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputLabel}>{inpTitle}</Text>
      <TextInput style={styles.inputBox} placeholder={inpTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputLabel: {
    fontWeight: "500",
    fontSize: 15,
    flex: 1,
    marginLeft: 15,
    marginBottom: 10,
  },
  inputBox: {
    height: 50,
    marginBottom: 20,
    backgroundColor: "#ffff",
    borderRadius: 20,
    marginTop: 10,
    paddingLeft: 10,
    color: "#af9f85",
    width: 200,
  },
});

export default InputBox;
