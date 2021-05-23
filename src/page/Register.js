import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { LaporanAction, UserAction } from "../redux/Action";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  handleInputData() {
    axios
      .post("http://192.168.0.103:3010/user/register/", this.props.dataRegis)
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
        <Text> Name </Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={(value) => {
            this.props.UserAction("name", value);
          }}
        />
        <Text> Email </Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={(value) => {
            this.props.UserAction("email", value);
          }}
        />
        <Text> Phone </Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={(value) => {
            this.props.UserAction("phone", value);
          }}
        />
        <Text> Address </Text>
        <TextInput
          style={styles.input}
          placeholder="useless placeholder"
          onChangeText={(value) => {
            this.props.UserAction("address", value);
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleInputData();
          }}
        >
          <Text style={styles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataRegis: state.UserReducer,
});

const mapDispatchToProps = {
  UserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    padding: 20,
  },
  text: {
    textAlign: "center",
    borderWidth: 5,
  },
});
