import axios from "axios";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import logo from "../../assets/hacker.png";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(JSON.stringify(this.props));
  }
  getData = () => {
    axios.get("");
  };

  render() {
    return (
      <View>
        {this.props.dataRegis.isLogin ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.push("home");
            }}
          >
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.body}>
            <View style={styles.container}>
              <Image source={logo} style={{ width: 100, height: 100 }} />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("login");
              }}
            >
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate("registrasi");
              }}
            >
              <Text style={styles.text}>Registrasi</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  dataRegis: state.UserReducer,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  button: {
    width: 200,
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
    marginBottom: 10,
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
});
