import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import InputBox from "../InputBox";
const User = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Створення акаунту
        </Text>
      </View>
      <View style={{ marginHorizontal: 30 }}>
        <InputBox style={styles.input} inpTitle={"Ім'я"} />
        <InputBox style={styles.input} inpTitle={"Прізвище"} />
        <InputBox style={styles.input} inpTitle={"Група"} />
        <InputBox style={styles.input} inpTitle={"Email"} />
        <InputBox style={styles.input} inpTitle={"Пароль"} />
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          marginHorizontal: 30,
          borderRadius: 20,
          justifyContent: "center",
          marginBottom: 20,
          marginTop: 10,
          backgroundColor: "#224A98",
        }}
      >
        <Text style={{ fontSize: 20, color: "#ffff", textAlign: "center" }}>
          Створити акаунт
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 27,
    fontWeight: "700",
    marginBottom: 6,
    textAlign: "center",
  },
  linkText: {
    textAlign: "center",
    fontSize: 15,
  },
  link: {
    color: "#0c8fff",
  },
});

export default User;
