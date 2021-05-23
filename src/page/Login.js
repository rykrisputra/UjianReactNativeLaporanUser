import React, { Component } from "react";
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { UserAction } from "../redux/Action";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleLogin() {
    axios
      .get(`http://192.168.0.103:3010/user/name/${this.props.dataName}`)
      .then((response) => {
        alert("Kamu berhasil Login Horeee " + response.data.name);
        this.props.UserAction("id", response.data.id);
        this.props.UserAction("name", response.data.name);
        this.props.UserAction("email", response.data.email);
        this.props.UserAction("phone", response.data.phone);
        this.props.UserAction("address", response.data.address);
        this.props.UserAction("isLogin", true);

        this.props.navigation.navigate("main menu");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <View>
        <Text> Name </Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={(value) => {
            this.props.UserAction("name", value);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleLogin();
          }}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataName: state.UserReducer.name,
});

const mapDispatchToProps = {
  UserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    width: 200,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "serif",
    fontWeight: "bold",
    paddingTop: 3,
    color: "white",
  },
});
