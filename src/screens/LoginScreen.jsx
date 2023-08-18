import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput, Button, ActivityIndicator } from "react-native-paper";
import { auth } from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "../utils/useForm";
import { ref, once } from "firebase/database";

const LoginScreen = () => {
  const [form, setForm] = useForm({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Dashboard");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    setIsLoading(true); // Start loading
    auth
      .signInWithEmailAndPassword(form.email, form.password)
      .then((userCredentials) => {
        alert("Berhasil login");
        setIsLoading(false);

        navigation.navigate("Dashboard");
      })
      .catch((error) => {
        alert("Email atau password salah", error);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loading
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.h1}>Login Form</Text>
      </View>
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
      <Button
        mode="contained"
        style={[styles.button, isLoading && styles.buttonLoading]}
        onPress={handleLogin}
        disabled={isLoading} // Menonaktifkan tombol jika loading sedang berjalan
      >
        {isLoading ? (
          <ActivityIndicator color="white" size="small" /> // Menampilkan indikator loading jika isLoading true
        ) : (
          "Login"
        )}
      </Button>
      <Button
        mode="outlined"
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        Register
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

export default LoginScreen;
