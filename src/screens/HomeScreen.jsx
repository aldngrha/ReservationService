import React, { useEffect, useState } from "react";
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
import { auth, database } from "../../firebase";
import { onValue, ref } from "firebase/database";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();

  // Misalnya pada komponen Dashboard
  useEffect(() => {
    // Mendapatkan referensi ke data pengguna dari database
    const userRef = ref(database, `users/${auth.currentUser.uid}`);

    // Menggunakan onValue untuk mendapatkan data secara real-time
    onValue(userRef, (snapshot) => {
      const userData = snapshot.val();
      if (userData) {
        setUserData(userData);
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {userData ? (
        <Text style={styles.h2}>Halo, {userData.fullName}!</Text>
      ) : (
        <Text style={styles.h2}>Loading...</Text>
      )}
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
      <Text style={styles.h1}>Lokasi Bengkel</Text>
      <MapLinkScreen />
      <Text style={styles.h1}>Tempat</Text>
      <View style={styles.rowReservation}>
        <ReservationCard
          imageSource={require("../../assets/map.png")}
          onClick={() => navigation.navigate("Detail")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    paddingHorizontal: 17,
  },
  h1: {
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 20,
  },
  h2: {
    fontSize: 17,
    fontWeight: "600",
    marginVertical: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowReservation: {
    flexDirection: "row",
  },
});
