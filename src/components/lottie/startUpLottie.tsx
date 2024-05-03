import React from "react";
import LottieView from "lottie-react-native";

import { StartUpLottieStyles } from "./startUpLottieStyles";

export default function StartUpLottie() {
  return (
    <LottieView
      source={require("../lottie/startUpLottieStyles")}
      style={StartUpLottieStyles.lottie}
      autoPlay
      loop
    />
  );
}