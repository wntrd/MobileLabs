import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Зима Дмитро Андрійович ІПЗк-22-1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    backgroundColor: "#224A98",
  },
  footerText: {
    color: "#ffff",
  },
});

export default Footer;
