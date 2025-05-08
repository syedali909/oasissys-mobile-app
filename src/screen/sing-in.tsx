import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import userStore from "../stores/user-store";
import { useAppStore } from "../stores";
import { useAuth } from "../provider/auth-provider";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isUserLogin, setIsUserLogin } = useAuth();
  const onLoginPress = () => {
    if (email === "" || password === "") alert("please fill all fields");
    else setIsUserLogin(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Welcome To Oasissys Mobile App</Text>
      <Text style={styles.headerText}>Please Login</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        icon={"login"}
        onPress={onLoginPress}
        mode="contained"
        style={styles.button}
      >
        Login
      </Button>
    </View>
  );
};

export default SingIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    marginTop: 25,
    width: "90%",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#4682B4",
    paddingVertical: 15,
    borderRadius: 7,
    width: "90%",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
    textAlign: "center",
  },
});
