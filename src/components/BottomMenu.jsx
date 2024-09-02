import React from "react";
import { View } from "tamagui";
import { MaterialIcons, Octicons, AntDesign } from "@expo/vector-icons";
import { Image, TouchableOpacity } from "react-native";

function BottomMenu() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",

        paddingVertical: 15,
      }}
    >
      <TouchableOpacity>
        <MaterialIcons name="home-filled" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Octicons name="search" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <AntDesign name="plussquareo" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Octicons name="video" size={30} color="black" />
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://i.pinimg.com/originals/97/2f/1b/972f1b8aca65479e3c401b800a4bd76a.jpg",
        }}
        style={{
          width: 30,
          height: 30,
          borderRadius: 15,
          marginRight: 10,
          marginLeft: 10,
        }}
      />
    </View>
  );
}

export default BottomMenu;
