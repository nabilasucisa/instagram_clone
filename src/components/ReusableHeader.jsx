import { View } from "react-native";

const ReusableHeader = (props) => {
  const LeftSideComponent = props.leftSideComponent;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: props.backgroundColor || "white",
        alignItems: "center",
        paddingVertical: props.paddingVertical || 0,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        {props.leftSideComponent}
      </View>
      {/* jika props.leftSideComponent adalah blueprint atau component bukan element jadi */}
      {/* {props.leftSideComponent()} */}
      {/* <LeftSideComponent /> */}
      {/* <props.leftSideComponent /> */}
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        {props.rightSideComponent}
      </View>
    </View>
  );
};

export default ReusableHeader;
