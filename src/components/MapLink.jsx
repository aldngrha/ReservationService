import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Linking,
} from "react-native";

function MapLinkScreen() {
  const handleOpenMap = () => {
    const lat = 37.78825;
    const lng = -122.4324;
    const url = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handleOpenMap}>
      <Image
        source={require("../../assets/map.png")}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

export default MapLinkScreen;

const styles = StyleSheet.create({
  image: {
    width: 375,
    height: 150,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 30,
  },
});
