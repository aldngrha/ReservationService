import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ReservationCard({ imageSource, onClick }) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onClick}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
    </TouchableOpacity>
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
