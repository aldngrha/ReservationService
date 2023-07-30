import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ReservationCard({ imageSource, textLeft, textRight }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 380,
    height: 200,
    backgroundColor: "lightgray",
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 20,
    shadowColor: "rgba(0, 0, 0, 0.3)", // Untuk iOS
    shadowOffset: { width: 0, height: 2 }, // Untuk iOS
    shadowOpacity: 0.8, // Untuk iOS
    shadowRadius: 4, // Untuk iOS
    elevation: 6, // Untuk Android
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
