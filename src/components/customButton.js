import React from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function MyButton(props) {
    const btnColor = props.color != undefined ? props.color : "blue"
  return (
      <TouchableOpacity onPress={props.onPressEvent}>
        <View 
        style={{...styles.buttonContainer,backgroundColor: props.color}}>
         <Text style={{fontSize:props.TextSize,color:props.TextColor}}>{props.Text}</Text>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    padding: 10,
    borderRadius: 50,
    // width: 70,
    // height: 50,
    // alignItems: "center",
    // justifyContent: "center",
  },
  buttonText: {
      color: "white",
      fontSize: 20,
  }
}); 