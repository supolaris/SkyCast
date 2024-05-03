import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { PrimaryButtonStyles } from './primaryButtonStyles';


const PrimaryButton = (props: any) => {
  return (
    <View style={PrimaryButtonStyles.conatiner}>
      <Pressable 
      onPress={props.onPress}
      style={PrimaryButtonStyles.pressable}>
        <Text style={PrimaryButtonStyles.pressableText}>{props.buttonText}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton