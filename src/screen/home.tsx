import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { useAppStore } from "../stores";

const Home = () => {
  const { userInfo } = useAppStore();
  const { fetchUser } = useAppStore();

  const title = "User Name :-";
  const details = userInfo?.username;
  return (
    <ScrollView
      style={{ backgroundColor: "skyblue" }}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => fetchUser()} />
      }
    >
      <View style={styles.container}>{Title(title, details)}</View>
      <View style={styles.container}>
        {Title("Email  :-", userInfo?.email)}
      </View>
      <View style={styles.container}>
        {Title(
          "Address  :-",
          userInfo?.address?.suite + "" + userInfo?.address?.street
        )}
      </View>
      <View style={styles.container}>
        {Title("City  :-", userInfo?.address?.city)}
      </View>
      <View style={styles.container}>
        {Title("Zipcode  :-", userInfo?.address?.zipcode)}
      </View>
      <View style={styles.container}>
        {Title("Phone-Number  :-", userInfo?.phone)}
      </View>
      <View style={styles.container}>
        {Title("Company  :-", userInfo?.company?.name)}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  textView: {
    width: "85%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  container: {
    backgroundColor: "white",
    marginTop: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
function Title(title: string, details: any) {
  return (
    <View style={styles.textView}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{details}</Text>
    </View>
  );
}
