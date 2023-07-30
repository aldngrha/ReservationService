import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CheckoutScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleOrderPress = () => {
    // Menggunakan data yang diinput untuk melakukan order
    // Misalnya, mengirim data ke backend atau menampilkan pesan konfirmasi
    alert("Order berhasil!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="#fafafa"
        barStyle="dark-content"
      />
      <View style={styles.text}>
        <Text style={styles.h1}>Detail Reservasi</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.h2}>Reservasi Kamu</Text>
        <View style={styles.border}>
          <Text>12 Februari 2023, Pukul 11:00</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.borderText}>Ahmad Ilman</Text>
          <Text style={styles.borderText}>ahmad@example.com</Text>
          <Text>08976152617</Text>
        </View>
        <View style={styles.border}>
          <Text style={styles.borderText}>Nominal</Text>
          <Text>Rp 100.000,-</Text>
        </View>
        <View style={styles.border2}>
          <Text style={styles.borderText}>Transfer ke BCA</Text>
          <Text style={styles.borderText}>987182931</Text>
          <Text>a/n Karim</Text>
        </View>
        <View style={styles.proof}>
          <Text style={styles.proofText}>Upload Bukti Pembayaran</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan gambar"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.button} onPress={handleOrderPress}>
            <Text style={styles.buttonText}>Reservasi</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={handleOrderPress}
          >
            <Text style={styles.buttonTextCancel}>Batal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fafafa",
  },
  text: {
    paddingVertical: 30,
  },
  h1: {
    fontSize: 25,
    fontWeight: "bold",
  },
  card: {
    width: 370,
    backgroundColor: "white",
    borderRadius: 15,
    elevation: 4,
    alignItems: "center",
    marginBottom: 20,
  },
  h2: {
    fontSize: 18,
    paddingVertical: 20,
    fontWeight: "bold",
  },
  border: {
    borderBottomWidth: 1,
    width: 250,
    paddingVertical: 20,
    borderBottomColor: "lightgray",
    alignItems: "center",
  },
  border2: {
    width: 250,
    paddingVertical: 20,
    alignItems: "center",
  },
  borderText: {
    marginBottom: 8,
  },
  proof: {
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    margin: 30,
    marginTop: 0,
    width: 310,
    alignSelf: "flex-start",
  },
  proofText: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "skyblue",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonCancel: {
    marginTop: 10,
    backgroundColor: "lightgray",
    padding: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonTextCancel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
