// FeedActions.js
import React, { useState } from "react";
import { FontAwesome6, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import ReusableHeader from "../ReusableHeader";
import { useCallback, useMemo, useRef } from "react";
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";

const LeftSideComponent = (props) => {
  const [isLiked, setIsLiked] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <TouchableOpacity onPress={toggleLike}>
        <FontAwesome
          name={isLiked ? "heart" : "heart-o"}
          size={21}
          color={isLiked ? "red" : "black"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.onCommentPressed}>
        <FontAwesome6
          name="comment"
          size={20}
          color="black"
          onPress={props.onCommentPressed}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome6 name="paper-plane" size={20} color="black" />
      </TouchableOpacity>
    </>
  );
};

const RightSideComponent = (props) => {
  return (
    <TouchableOpacity>
      <FontAwesome6 name="bookmark" size={20} color="black" />
    </TouchableOpacity>
  );
};

const FeedActions = (props) => {
  const [isCommentSheetVisible, setCommentSheetVisible] = useState(false);

  const handleCommentPress = () => {
    setCommentSheetVisible(true);
  };

  const handleCommentSheetDismiss = () => {
    setCommentSheetVisible(false);
  };

  return (
    <>
      <ReusableHeader
        paddingVertical={10}
        leftSideComponent={
          <LeftSideComponent onCommentPressed={props.onCommentPressed} />
        }
        rightSideComponent={<RightSideComponent {...props} />}
      />
    </>
  );
};

export default FeedActions;
