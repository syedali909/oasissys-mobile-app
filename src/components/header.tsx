import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const HeaderTitle = (props: any) => {
  return (
    <View style={styles.containerr}>
      <Image
        style={styles.image}
        source={{
          uri: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-user-color-icon.png",
        }}
      />
      <Text> {props.name}</Text>
    </View>
  );
};

export default HeaderTitle;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 30,
    resizeMode: "contain",
  },
  containerr: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 48,
    width: "100%",
  },
});
