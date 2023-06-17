import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { PropertiesList } from "../../app/components/properties/properties-list";

export default function Properties({ listings }) {
  return (
    <>
      <View style={styles.container}>
        {listings && listings.length > 0 && (
          <PropertiesList listings={listings} />
        )}
      </View>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://house-lydiahallie.vercel.app/api/listings");

  const { listings } = await res.json();

  return {
    props: { listings },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
