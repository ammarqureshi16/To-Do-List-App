import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MyButton from "./src/components/customButton";

export default function App() {
  const [fullText, setText] = useState("");
  const [getList, setList] = useState([]);
  const [editText, setEditText] = useState();

  const addText = () => {
    setList([...getList, { key: Math.random().toString(), data: fullText }]);
    setText("");
  };
  const removeItem = (itemkey) => {
    const list = getList.filter((item) => item.key != itemkey);
    setList(list);
  };
  const editItem = (item) => {
    setText(item.data);
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>To Do List</Text>
      <View style={styles.seacondChalid}>
        <View>
          <TextInput
            onChangeText={(text) => setText(text)}
            style={styles.input}
            value={fullText}
            placeholder="Enter your name"
          />
        </View>
        <View>
          <MyButton
            onPressEvent={addText}
            // Text={editItem === false ? "Add" : "Update"}
            Text="Add"
            backColor="black"
            TextSize={16}
            TextColor="white"
            disabled={fullText.length <= 0}
          />
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 26, color: "black" }}>{fullText}</Text>
        {getList.map(function (item, index) {
          return (
            <TouchableOpacity disabled={true} key={item.key}>
              <View style={styles.itemContainer}>
                <View style={{ width: 200 }}>
                  <Text style={{ fontSize: 22, color: "white" }}>
                    {index + 1} : {item.data}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    removeItem(item.key);
                  }}
                  style={styles.deletButton}
                >
                  <Text style={{ color: "white" }}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => editItem(item)}>
                  <Text style={styles.editedText}>Edit</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 70,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  seacondChalid: {
    flexDirection: "row",
  },
  heading: {
    color: "blue",
    fontSize: 25,
  },
  input: {
    borderColor: "black",
    fontSize: 18,
    height: 50,
    width: 280,
    paddingLeft: 10,
    borderBottomWidth: 2,
  },
  addText: {
    color: "white",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "orange",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    height: 50,
    width: 400,
    borderRadius: 10,
  },
  deletButton: {
    backgroundColor: "red",
    height: 30,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  editButton: {
    backgroundColor: "green",
    height: 30,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  editedText: {
    color: "white",
  },
});
