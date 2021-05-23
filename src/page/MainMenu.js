import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tombol from "../../assets/exclamation.png";

class MainMenu extends Component {
  render() {
    return (
      <View style={{ marginTop: 150 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("laporan");
            }}
          >
            <Text style={styles.text}>Laporan</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("history");
            }}
          >
            <Text style={styles.text}>History Laporan</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("map");
            }}
          >
            <Text style={styles.text}>Map Kejadian</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate("signout");
            }}
          >
            <Text style={styles.text}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.warning}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("laporan");
            }}
          >
            <Image source={tombol} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MainMenu;

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 15,
  },
  text: {
    textAlign: "center",
    fontFamily: "serif",
    fontWeight: "bold",
    paddingTop: 3,
    color: "white",
  },
  container: {
    flex: 1,
    marginTop: 5,
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 70,
  },
  body: {
    padding: 15,
    alignItems: "center",
    marginTop: 90,
  },
  warning: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: 120,
    height: 100,
  },
});
