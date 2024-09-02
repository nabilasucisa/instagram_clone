import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { forwardRef, useMemo, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { FontAwesome } from "@expo/vector-icons";

const CommentBottomSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["50%", "90%"], []);
  const emojis = ["❤️", "🙌", "🔥", "👏", "😢", "😍", "😲", "😂"];

  const [expanded, setExpanded] = useState(false);
  const charLimit = 92;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const getDisplayText = () => {
    if (expanded || FEED_DATA.caption.length <= charLimit) {
      return FEED_DATA.caption;
    }
    return FEED_DATA.caption.slice(0, charLimit);
  };

  return (
    <BottomSheetModal
      ref={ref}
      index={props.index}
      snapPoints={snapPoints}
      enableDismissOnClose={true}
      dismissOnOverlayPress={true}
    >
      <View
        style={{
          width: "100%",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              paddingBottom: 10,
              textAlign: "center",
              borderBottomColor: "#d3d3d3",
              borderBottomWidth: 0.2,
              width: "100%",
            }}
          >
            Comments
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderBottomWidth: 0.2,
            borderBottomColor: "#ddd",
          }}
        >
          <Image
            source={{ uri: FEED_DATA.imageUrl }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              marginRight: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              {FEED_DATA.username}{" "}
              <Text style={{ fontWeight: "300" }}>{getDisplayText()}</Text>
              {!expanded && FEED_DATA.caption.length > charLimit && (
                <Text style={{ color: "gray" }} onPress={toggleExpanded}>
                  ... more
                </Text>
              )}
            </Text>
          </View>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {commentsData.map((comment, id) => (
            <View
              key={id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
                width: "100%",
                paddingHorizontal: 10,
                paddingVertical: 5,
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={{ uri: comment.imageUrl }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                  }}
                />
                <View>
                  <Text style={{ fontWeight: "bold", color: "#000" }}>
                    {comment.name}
                  </Text>
                  <Text style={{ color: "#333" }}>{comment.comment}</Text>
                  <View style={{ flexDirection: "row", gap: 20 }}>
                    <Text style={{ color: "gray", fontSize: 12 }}>2w</Text>
                    <TouchableOpacity>
                      <Text style={{ color: "gray", fontSize: 12 }}>Reply</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={() => toggleLike(id)}>
                <FontAwesome name="heart-o" size={21} color="gray" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            borderTopWidth: 0.4,
            borderTopColor: "#ddd",
          }}
        >
          <View
            style={{
              gap: 15,
              flexDirection: "row",
              marginRight: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {emojis.map((comment, index) => (
              <TouchableOpacity>
                <Text style={{ fontSize: 30 }}>{emojis[index]}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            borderTopWidth: 0.4,
            borderTopColor: "#ddd",
          }}
        >
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
          <TextInput
            style={{
              flex: 1,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
            placeholder="Add a comment..."
          />
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
});

const commentsData = [
  {
    id: "1",
    name: "Nudros",
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
    comment: "gassss",
  },
  {
    id: "2",
    name: "Tomski",
    imageUrl:
      "https://ih1.redbubble.net/image.618880200.0955/flat,750x,075,f-pad,750x1000,f8f8f8.u6.jpg",
    comment: "tomi kadachiiiiii gass cari monster👾",
  },
  {
    id: "3",
    name: "Ichad",
    imageUrl:
      "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
    comment: "summary mas ichad summary",
  },
  {
    id: "4",
    name: "Levi",
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
    comment: "tak pukul ni tak pukul!!",
  },
  {
    id: "5",
    name: "Ipin",
    imageUrl:
      "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
    comment: "+2000 auraaa mantap",
  },
];

const FEED_DATA = {
  username: "Juan Dwiky",
  imageUrl:
    "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
  hasActiveStory: false,
  caption:
    "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
  postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
};

export default CommentBottomSheet;
