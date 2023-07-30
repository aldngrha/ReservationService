import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SuccessScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Permintaanmu sedang diproses, kamu akan menerima
        </Text>
        <Text style={styles.text}>notifikasi beberapa menit lagi.</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Kembali ke home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    width: 400, // Atur ukuran wadah sesuai keinginan Anda
    height: 300, // Atur ukuran wadah sesuai keinginan Anda
    justifyContent: "center", // Gambar akan berada di tengah secara vertikal
    alignItems: "center", // Gambar akan berada di tengah secara horizontal
  },
  image: {
    width: "100%", // Ukuran gambar akan mengisi seluruh lebar wadah
    height: "100%", // Ukuran gambar akan mengisi seluruh tinggi wadah
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  text: {
    marginBottom: 6,
  },
  button: {
    backgroundColor: "skyblue",
    paddingVertical: 10,
    paddingHorizontal: 100,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 50,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
