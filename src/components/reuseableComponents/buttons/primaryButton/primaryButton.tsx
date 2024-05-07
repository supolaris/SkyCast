import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { PrimaryButtonStyles } from './primaryButtonStyles';

import RightIcon from 'react-native-vector-icons/AntDesign';


const PrimaryButton = (props: any) => {
  return (
    <View style={PrimaryButtonStyles.conatiner}>
      <Pressable
        onPress={props.onPress}
        style={PrimaryButtonStyles.pressable}>
        <View style={{ flexDirection: 'row', justifyContent: "center" }}>

          <Text style={PrimaryButtonStyles.pressableText}>{props.buttonText}</Text>
          <View style={{ justifyContent: 'center', paddingLeft: 10, paddingTop: 2 }}>
            <RightIcon
              name='arrowright'
              size={25}
              color='white'
            />
          </View>

        </View>

      </Pressable>
    </View>
  )
}

export default PrimaryButton