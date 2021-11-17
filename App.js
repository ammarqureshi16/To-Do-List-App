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

  const addText = () => {
    setList([...getList, { key: Math.random().toString(), data: fullText }]);
    setText("");
  };

  const removeItem = (itemkey) => {
    const list = getList.filter((item) => item.key != itemkey);
    setList(list);
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
           Text="Add"
           color="black"
           TextSize={16}
           TextColor="white"
           />
          </View>
      </View>
      <View>
        <Text style={{ fontSize: 26, color: "black" }}>{fullText}</Text>
        {getList.map(function (item, index) {
          return (
              <TouchableOpacity
                key={item.key}
                onPress={() => {
                  removeItem(item.key);
                }}
              >
                <View style={styles.itemContainer}>
                  <Text style={{ fontSize: 22, color: "white" }}>
                    {index + 1}#: {item.data}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      removeItem(item.key);
                    }}
                    style={styles.deletButton}
                  >
                    <Text style={{ color: "white" }}>Delete</Text>
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
    fontSize: 15,
    height: 50,
    width: 300,
    paddingLeft: 10,
    borderBottomWidth: 2,
  },
  
  addText: {
    color: "white",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "orange",
    height: 50,
    width: 300,
    borderRadius: 10,
  },
  deletButton: {
    backgroundColor: "red",
    height: 30,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});

//   const [list, setList] = useState([]);

//   const [fullName, setName] = useState("");
//   const [update, setUpdate] = useState(false);
//   const [add, setAdd] = useState(true);
//   const [editedindex, setEditedindex] = useState("");

//   const val = (enteredText) => {
//     const name = enteredText.nativeEvent.text;
//     setName(name);
//     console.log(fullName);
//   };

//   const aadd = () => {
//     const newList = [...list];
//     newList.push(fullName);
//     setList(newList);
//   };

//   const deleteItem = function (index) {
//     const newList = [...list];
//     newList.splice(index, 1);
//     setList(newList);
//   };

//   const editItem = function (index) {
//     setAdd(false);
//     const newList = [...list];
//     setName(fullName);

//     // console.log(index)
//     // const newEdited = [...editedindex]
//     setEditedindex(index);
//     console.log(editedindex);
//     const edit = newList[index];
//     setName(edit);
//     setUpdate(true);
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View >
//           <TextInput onChange={val} placeholder=" Enter Name" />
//           <TouchableOpacity onPress={aadd}>
//             <Text >
//               ADD
//             </Text>
//           </TouchableOpacity>
//           <View style={{ marginTop: 30 }}>
//             {list.map(function (item, index) {
//               return (
//                 <Text style={{ fontSize: 20 }}>
//                   {item}
//                   <TouchableOpacity onPress={() => deleteItem(index)}>
//                     <Text>Delete</Text>
//                   </TouchableOpacity>
//                   <TouchableOpacity onPress={() => editItem(index)}>
//                     <Text>Edit</Text>
//                   </TouchableOpacity>
//                 </Text>
//               );
//             })}
//           </View>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// }
