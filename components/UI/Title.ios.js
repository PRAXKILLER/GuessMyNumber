import { Platform, StyleSheet, Text } from "react-native";

import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderColor: "white",
    padding: 12,
    margin: 20,
    maxWidth: "80%",
  },
});

export default Title;
