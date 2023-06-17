import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link, Stack } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome 👋</Text>
      <Stack.Screen options={{ title: "" }} />
      <Link href="/properties" asChild>
        <Pressable>
          {() => <Text style={styles.link}>Go to Properties List</Text>}
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
