import React from "react";
import { PropertiesListItem } from "../properties-list-item";
import { SafeAreaView, FlatList, Platform } from "react-native";

export function PropertiesList(props) {
  return (
    <SafeAreaView>
      <FlatList
        data={props.listings}
        renderItem={({ item }) => (
          <PropertiesListItem key={item.id} listing={item} />
        )}
        keyExtractor={(item) => item.id}
        horizontal={Platform.OS !== "web" ? false : true}
      />
    </SafeAreaView>
  );
}
