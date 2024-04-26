import { StyleSheet, Text, View } from "react-native";
import Footer from "./Footer";
import TabNavigation from "./TabNavigation";
import Header from "./Header";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header />
        <TabNavigation>
          <View style={styles.main}></View>
        </TabNavigation>
        <Footer />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "stretch",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
