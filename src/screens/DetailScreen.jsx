import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList, ScrollView } from "react-native-gesture-handler";

export default function DetailScreen({ navigation }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const dates = [
    "2023-07-16",
    "2023-07-17",
    "2023-07-18",
    "2023-07-19",
    "2023-07-20",
    "2023-07-21",
    "2023-07-22",
  ];

  const times = ["09:00", "11:00", "13:00", "15:00"];

  const slots = ["A", "B", "C", "D"];

  const handleOrderPress = () => {
    // Menggunakan data yang diinput untuk melakukan order
    // Misalnya, mengirim data ke backend atau menampilkan pesan konfirmasi
    alert("Order berhasil!");
  };

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };

  const handleSlotPress = (slot) => {
    setSelectedSlot(slot);
  };

  const renderDateItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.dateButton, item === selectedDate && styles.selectedDate]}
      onPress={() => handleDatePress(item)}
    >
      <Text
        style={[
          styles.dateText,
          item === selectedDate && styles.selectedDateText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderTimeItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.dateButton, item === selectedTime && styles.selectedDate]}
      onPress={() => handleTimePress(item)}
    >
      <Text
        style={[
          styles.dateText,
          item === selectedTime && styles.selectedDateText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  const renderSlotItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.dateButton, item === selectedSlot && styles.selectedDate]}
      onPress={() => handleSlotPress(item)}
    >
      <Text
        style={[
          styles.dateText,
          item === selectedSlot && styles.selectedDateText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <ImageBackground
          source={require("../../assets/map.png")}
          style={styles.image}
        >
          <View style={styles.overlay}>
            <View style={styles.arrowContainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.card}>
          <View style={styles.detail}>
            <Text style={styles.h1}>Reservasi Servis</Text>
            <View style={styles.dp}>
              <Text style={styles.dpText}>Uang Muka - </Text>
              <Text style={styles.dpText}>Rp 100.000,-</Text>
            </View>
            <Text style={styles.h2}>Tanggal</Text>
            <FlatList
              data={dates}
              renderItem={renderDateItem}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.h2}>Pukul</Text>
            <FlatList
              data={times}
              renderItem={renderTimeItem}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.h2}>Slot Tempat</Text>
            <FlatList
              data={slots}
              renderItem={renderSlotItem}
              keyExtractor={(item) => item}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
            <Text style={styles.h1}>Data Diri</Text>
            <Text style={styles.inputLabel}>Nama Lengkap</Text>
            <TextInput
              style={styles.input}
              placeholder="Ahmad ilman"
              value={name}
              onChangeText={setName}
            />
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="ahmad@xxxx.com"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Text style={styles.inputLabel}>No. Handphone/Whatsapp</Text>
            <TextInput
              style={styles.input}
              placeholder="0896xxxx"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.button} onPress={handleOrderPress}>
              <Text style={styles.buttonText}>Order</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  arrowContainer: {
    marginHorizontal: 20,
    top: 40,
    zIndex: 999,
  },
  image: {
    aspectRatio: 1.3,
    resizeMode: "cover",
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  detail: {
    margin: 20,
  },
  detailTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  h1: {
    marginVertical: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  h2: {
    marginVertical: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  dp: {
    flexDirection: "row",
  },
  dpText: {
    fontSize: 15,
    fontWeight: "500",
  },
  dateButton: {
    borderWidth: 1,
    borderColor: "lightgray",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  selectedDate: {
    backgroundColor: "skyblue",
    borderWidth: 0,
  },
  dateText: {
    fontSize: 16,
    color: "lightgray",
    fontWeight: "bold",
  },
  selectedDateText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "lightgray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputLabel: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: "skyblue",
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
