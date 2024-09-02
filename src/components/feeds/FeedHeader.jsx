import { Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import ReusableStoryAvatar from "../ReuseableStoryAvatar";
import ReusableHeader from "../ReusableHeader";

const LeftSideComponent = (props) => {
  return (
    <>
      <ReusableStoryAvatar size={30} imageUrl={props.item.imageUrl} />
      <Text style={{ fontWeight: "bold" }}>{props.item.username}</Text>
    </>
  );
};

const RightSideComponent = (props) => {
  return <FontAwesome6 name="ellipsis-vertical" size={16} color="black" />;
};

const FeedHeader = (props) => {
  return (
    <ReusableHeader
      leftSideComponent={<LeftSideComponent {...props} />}
      rightSideComponent={RightSideComponent(props)} // sama saja dengan diatas
    />
  );
};

export default FeedHeader;
