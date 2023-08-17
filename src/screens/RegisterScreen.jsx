import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { auth, database } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { ref, set } from "firebase/database";
import { useForm } from "../utils/useForm";

const RegisterScreen = () => {
  const [form, setForm] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleRegister = () => {
    setIsLoading(true);
    auth
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((userCredentials) => {
        setForm("reset");
        const data = {
          fullName: form.name,
          email: form.email,
          phoneNumber: "",
        };
        const userRef = ref(database, `users/${userCredentials.user.uid}/`);
        set(userRef, data);
        setIsLoading(false);
        alert("Registrasi Berhasil", userCredentials);
        navigation.navigate("Login");
      })
      .catch((error) => {
        setIsLoading(false);
        alert("Register gagal: " + error.message);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.h1}>Register Form</Text>
      </View>
      <TextInput
        label="Nama Lengkap"
        value={form.name}
        onChangeText={(value) => setForm("name", value)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={form.email}
        onChangeText={(value) => setForm("email", value)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={form.password}
        onChangeText={(value) => setForm("password", value)}
        style={styles.input}
      />
      <TextInput
        label="Confirm Password"
        secureTextEntry
        value={form.confirmPassword}
        onChangeText={(value) => setForm("confirmPassword", value)}
        style={styles.input}
      />
      <Button
        mode="contained"
        style={[styles.button, isLoading && styles.buttonLoading]}
        onPress={handleRegister}
        disabled={isLoading} // Menonaktifkan tombol jika loading sedang berjalan
      >
        {isLoading ? (
          <ActivityIndicator color="white" size="small" /> // Menampilkan indikator loading jika isLoading true
        ) : (
          "Register"
        )}
      </Button>
      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    marginBottom: 16,
    backgroundColor: "transparent",
  },
  button: {
    marginTop: 20,
    paddingVertical: 3,
    borderColor: "skyblue",
  },
  buttonLoading: {
    opacity: 0.6,
    backgroundColor: "skyblue",
  },
});

export default RegisterScreen;
