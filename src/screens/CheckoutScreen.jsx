import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const CheckoutScreen = () => {
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (newStatus === "granted") {
          setHasGalleryPermission(true);
        } else {
          setHasGalleryPermission(false);
        }
      } else {
        setHasGalleryPermission(true);
      }
    })();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: null,
      quality: 1,
    });

    delete result.cancelled;

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  if (hasGalleryPermission === false) {
    return (
      <View style={styles.error}>
        <Text>No access to Internal Storage</Text>
      </View>
    );
  }

  const handleOrderPress = () => {
    // Menggunakan data yang diinput untuk melakukan order
    // Misalnya, mengirim data ke backend atau menampilkan pesan konfirmasi
    alert("Order berhasil!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
            <View style={styles.timeProof}>
              <Text style={styles.limit}>Batas Waktu Pembayaran:</Text>
              <Text style={styles.timeLimit}>02:90</Text>
            </View>
            <Text style={styles.proofText}>Upload Bukti Pembayaran</Text>
            <TouchableOpacity style={styles.input} onPress={() => pickImage()}>
              <Text style={styles.upload}>Upload gambar</Text>
            </TouchableOpacity>
            {image && <Image source={{ uri: image }} style={styles.image} />}
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
      </ScrollView>
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
    alignItems: "center",
  },
  error: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  timeProof: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  timeLimit: {
    fontWeight: "bold",
  },
  proofText: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: "skyblue",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  upload: {
    color: "skyblue",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 15,
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
