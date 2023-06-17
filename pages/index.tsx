import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Link from "next/link";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome 👋</Text>
      <Link href="/properties">
        <Pressable>
          {() => <Text style={styles.link}>Go To Properties List</Text>}
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 36,
    marginBottom: 20,
    color: "white",
  },
  link: {
    fontSize: 26,
    textDecorationLine: "underline",
    color: "white",
  },
});
