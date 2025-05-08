import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "react-native-paper";

export const RenderItem = ({ item }: any) => {
  const [expand, setExpand] = useState(false);
  const comment = item.item;
  return (
    <View style={styles.mainContainer}>
      <Button style={{ width: 4 }} icon={"delete"} />
      <View style={styles.container}>
        <Text style={styles.title}>
          {comment.id} {comment.name}
        </Text>
        <Text style={styles.title}>{comment.email}</Text>
        {expand && <Text style={[styles.text]}>{comment.body}</Text>}
      </View>

      <Button
        icon={expand ? "arrow-up" : "arrow-down"}
        onPress={() => setExpand(!expand)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width: "98%",
    alignItems: "center",
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
    width: "70%",
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  text: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
