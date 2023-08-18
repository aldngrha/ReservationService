import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import CustomDrawer from "./src/components/CustomDrawer";
import CheckoutScreen from "./src/screens/CheckoutScreen";
import SuccessScreen from "./src/screens/SuccessScreen";
import StatusScreen from "./src/screens/StatusScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import { DefaultTheme, PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "skyblue", // Ganti warna primer sesuai keinginan Anda
    accent: "green", // Ganti warna aksen sesuai keinginan Anda
    text: "black", // Ganti warna teks umum
    placeholder: "gray", // Ganti warna placeholder
  },
};

function DrawerDashboard() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Dashboard"
            component={DrawerDashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
