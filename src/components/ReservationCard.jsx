import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ReservationCard({ imageSource, textLeft, textRight }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.textLeft}>{textLeft}</Text>
        <Text style={styles.textRight}>{textRight}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
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
  textContainer: {
    position: "absolute",
    flexDirection: "row",
    top: 155,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
  textLeft: {
    color: "white",
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold",
  },
  textRight: {
    color: "white",
    fontSize: 18,
    textAlign: "right",
    fontWeight: "bold",
  },
});
