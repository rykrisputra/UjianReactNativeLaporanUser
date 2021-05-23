import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LaporanAction } from "../redux/Action";
import { connect } from "react-redux";
import axios from "axios";

class Laporan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: "Perampokan",
    };
  }

  handleInputData() {
    axios
      .post("http://192.168.0.103:3010/laporan/lapor/", this.props.dataLapor)
      .then((response) => {
        alert(JSON.stringify(response.data));
        this.props.navigation.navigate("home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}> Name </Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(value) => {
            this.props.LaporanAction("name", value);
          }}
        />

        <Text style={styles.text}> Kejadian </Text>
        <Picker
          selectedValue={this.state.type}
          onValueChange={(value) => {
            this.setState({ type: value });
          }}
        >
          <Picker.Item label="Perampokan" value="Perampokan" />
          <Picker.Item label="Pemerkosaan" value="Pemerkosaan" />
          <Picker.Item label="Pembunuhan" value="Pembunuhan" />
          <Picker.Item label="Kecelakaan" value="Kecelakaan" />
          <Picker.Item label="Bencana" value="Bencana" />
        </Picker>

        <Text style={styles.text}> Alamat </Text>
        <TextInput
          style={styles.input}
          placeholder="Alamat"
          onChangeText={(value) => {
            this.props.LaporanAction("alamat", value);
          }}
        />
        <Text style={styles.text}> Keterangan </Text>
        <TextInput
          style={styles.input}
          placeholder="Keterangan"
          onChangeText={(value) => {
            this.props.LaporanAction("keterangan", value);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleInputData();
          }}
        >
          <Text style={styles.textBtn}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataLapor: state.LaporanReducer,
});

const mapDispatchToProps = {
  LaporanAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Laporan);

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
  },
  text: {
    textAlign: "center",
    fontFamily: "serif",
    fontWeight: "bold",
    paddingTop: 3,
    color: "black",
  },
  textBtn: {
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
});
