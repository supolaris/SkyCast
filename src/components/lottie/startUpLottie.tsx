import React, { useState, useRef } from 'react';
import LottieView from 'lottie-react-native';
import { StartUpLottieStyles } from './startUpLottieStyles';
import { View } from 'react-native';

export default function StartUpLottie() {

  return (

    <LottieView
      autoPlay
      loop
      style={StartUpLottieStyles.lottie}
      source={require('../../assets/lottileFiles/startUpLottie.json')}
    />

  );
}
