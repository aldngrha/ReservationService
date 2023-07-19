import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/Card";
import MapLinkScreen from "../components/MapLink";
import ReservationCard from "../components/ReservationCard";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h2}>Halo, Nana!</Text>
      <View style={styles.row}>
        <Card
          color="salmon"
          icon={<Entypo name="book" size={50} />}
          text="Reservasi"
        />
        <Card
          color="skyblue"
          icon={<Entypo name="info-with-circle" size={50} />}
          text="Tentang"
        />
      </View>
      <Text style={styles.h1}>Lokasi</Text>
      <MapLinkScreen />
      <Text style={styles.h1}>Ketersediaan Tempat</Text>
      <ScrollView horizontal>
        <View style={styles.rowReservation}>
          <ReservationCard
            imageSource={require("../../assets/map.png")}
            textLeft="Perbaikan Mesin"
            textRight="2Hari"
          />
          <ReservationCard
            imageSource={require("../../assets/map.png")}
            textLeft="Perbaikan Kap"
            textRight="1Hari"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 17,
    marginTop: -10,
  },
  h1: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 20,
  },
  h2: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowReservation: {
    flexDirection: "row",
  },
});
