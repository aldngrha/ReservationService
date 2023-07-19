import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Card({ icon, text, color }) {
  return (
    <TouchableOpacity
      style={{
        width: 180,
        height: 180,
        marginBottom: 20,
        borderRadius: 10,
        backgroundColor: color,
      }}
    >
      <View style={styles.insideCard}>
        {icon}
        <Text style={styles.textCard}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  insideCard: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 35,
  },
  textCard: {
    fontSize: 20,
    marginTop: 20,
  },
});
