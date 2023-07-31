import React from "react";
import { Text } from "react-native";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Timeline from "react-native-timeline-flatlist";

const StatusScreen = () => {
  const data = [
    { time: "09:10", title: "Event 1", description: "event 1 description" },
    { time: "09:10", title: "Event 1", description: "event 1 description" },
    { time: "09:10", title: "Event 1", description: "event 1 description" },
    { time: "09:10", title: "Event 1", description: "event 1 description" },
    { time: "09:10", title: "Event 1", description: "event 1 description" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.h1}>Status Pemesanan</Text>
        <Timeline
          data={data}
          circleSize={20}
          circleColor="skyblue"
          lineColor="lightgray"
          innerCircle={"dot"}
          timeStyle={styles.time}
          eventDetailStyle={styles.viewContainer}
          isUsingFlatlist={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  time: {
    textAlign: "center",
    backgroundColor: "#F5F5F5",
    fontSize: 12,
    color: "black",
    padding: 5,
    borderRadius: 15,
    overflow: "hidden",
  },
  h1: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
  viewContainer: {
    padding: 15,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 20,
  },
});
