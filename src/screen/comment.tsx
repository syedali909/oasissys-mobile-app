import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button, TextInput } from "react-native-paper";
import { RenderItem } from "../components/render-item";

const comment = () => {
  const [comment, setComment] = useState<any>();
  const [sort, setSort] = useState(null);
  const [filterEmail, setFilterEmail] = useState("");

  const fetchComments = useCallback(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setComment(await response.json());
  }, []);

  useEffect(() => {
    fetchComments();
  }, []);

  const onPickerValueChange = useCallback(
    (itemValue: null, itemIndex: number): void => {
      if (itemValue === "ascending") {
        comment.reverse();
      }
      setSort(itemValue);
    },
    []
  );
  const onEmailFilterPress = useCallback(() => {
    const email = comment?.filter((item: any) => {
      return item.email.includes(filterEmail);
    });
    setComment(email);
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => fetchComments()} />
      }
    >
      <View style={styles.filterContainer}>
        <View>
          <Text style={styles.title}>Sort By</Text>
          <Picker
            style={styles.picker}
            selectedValue={sort}
            onValueChange={onPickerValueChange}
          >
            <Picker.Item
              style={styles.pickerItem}
              label="Ascending"
              value="ascending"
            />
            <Picker.Item
              style={styles.pickerItem}
              label="Descending"
              value="descending"
            />
          </Picker>
        </View>
        <View style={styles.emailContainer}>
          <TextInput
            style={styles.input}
            mode="outlined"
            placeholder="Search by Email"
            value={filterEmail}
            onChangeText={(text) => setFilterEmail(text)}
          />
          <Button mode="outlined" onPress={onEmailFilterPress}>
            Ok
          </Button>
        </View>
      </View>
      <View style={styles.emailContainer}>
        <TextInput style={styles.input} mode="outlined" label="Add Comment" />
        <Button mode="outlined" onPress={onEmailFilterPress}>
          Ok
        </Button>
      </View>
      <FlatList
        data={comment}
        renderItem={(item) => <RenderItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

export default comment;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  pickerItem: {
    color: "#841584",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  emailContainer: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  picker: {
    width: 200,
    alignSelf: "center",
  },
  filterContainer: {
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  container: {
    flexGrow: 1,
    marginTop: 30,
  },
});
