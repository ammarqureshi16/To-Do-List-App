import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function MyButton(props) {
  // if (props.disabled) {
  //     const backColor = "red"
  // } else {
  //     const backColor = props.color != undefined ? props.color : "blue"
  // }
  return (
    <TouchableOpacity onPress={props.onPressEvent} disabled={props.disabled}>
      <View
        style={{ ...styles.buttonContainer, backgroundColor: props.backColor }}
      >
        <Text style={{ fontSize: props.TextSize, color: props.TextColor }}>
          {props.Text}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 22,
  },
});
