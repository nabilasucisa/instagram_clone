import { LinearGradient } from "expo-linear-gradient";
import { Image, View } from "react-native";

const getStoryFrameWidth = (size) => (6 / 60) * size;

const ReusableStoryAvatar = (props) => {
  const storyFrameWidth = getStoryFrameWidth(props.size);

  return props.storyNotViewed ? (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["yellow", "darkviolet"]}
      style={{
        height: storyFrameWidth * 2 + props.size,
        width: storyFrameWidth * 2 + props.size,
        borderRadius: props.size + (storyFrameWidth * 2) / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: props.size + storyFrameWidth,
          width: props.size + storyFrameWidth,
          borderRadius: props.size + storyFrameWidth / 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          source={{ uri: props.imageUrl }}
          style={{
            height: props.size,
            width: props.size,
            borderRadius: props.size / 2,
          }}
        />
      </View>
    </LinearGradient>
  ) : (
    <LinearGradient
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      colors={["darkgray", "darkgray"]}
      style={{
        height: storyFrameWidth * 2 + props.size,
        width: storyFrameWidth * 2 + props.size,
        borderRadius: props.size + (storyFrameWidth * 2) / 2,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: props.size + storyFrameWidth,
          width: props.size + storyFrameWidth,
          borderRadius: props.size + storyFrameWidth / 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Image
          source={{ uri: props.imageUrl }}
          style={{
            height: props.size,
            width: props.size,
            borderRadius: props.size / 2,
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default ReusableStoryAvatar;
