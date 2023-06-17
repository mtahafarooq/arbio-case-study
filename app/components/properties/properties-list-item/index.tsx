import React from "react";
import { View, Text, Image, Platform } from "react-native";

export const PropertiesListItem = ({ listing }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        width: 300,
        margin: 10,
      }}
    >
      <View style={{ position: "relative", height: 200, width: "100%" }}>
        {Platform.OS !== "web" ? (
          <Image
            alt={listing.title}
            source={{ uri: listing.image }}
            style={{ height: 200 }}
          />
        ) : (
          <img
            alt={listing.title}
            src={listing.image}
            style={{ height: 200 }}
          />
        )}
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ marginBottom: 10, color: "white" }}>{listing.name}</Text>
        <Text style={{ color: "white" }}>
          {listing.city},{listing.state}
        </Text>
        <Text style={{ color: "deeppink" }}>
          ${new Intl.NumberFormat("en-US").format(listing.price)}
        </Text>
        <Text style={{ color: "white" }}>
          {listing.floors} floor, {listing.rooms} rooms, {listing.sqft}ft
        </Text>
      </View>
    </View>
  );
};
