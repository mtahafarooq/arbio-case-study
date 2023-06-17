import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { PropertiesList } from "../components/properties/properties-list";
import { Stack } from "expo-router";

export default function Properties() {
  const [properties, setProperties] = useState([]);

  async function getProperties() {
    const res = await fetch(
      "https://house-lydiahallie.vercel.app/api/listings"
    );

    const { listings } = await res.json();
    setProperties(listings);
  }

  useEffect(() => {
    getProperties();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Stack.Screen
          options={{
            title: "",
          }}
        />
        {properties && properties.length > 0 && (
          <PropertiesList listings={properties} />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
});
