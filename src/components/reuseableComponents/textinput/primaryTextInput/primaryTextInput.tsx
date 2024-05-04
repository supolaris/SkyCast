import React, { useState } from 'react';
import { View, Text, TextInput, TouchableWithoutFeedback,Keyboard } from 'react-native';

import { primaryTextInputStyles } from './primaryTextInputStyles';

import SearchIcon from 'react-native-vector-icons/EvilIcons'



const PrimaryTextInput = (props: any) => {

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
    <View style={primaryTextInputStyles.conatiner}>
      <SearchIcon
        style={primaryTextInputStyles.icon}
        name='search'
        color='white'
        size={30}
      />
      <TextInput
        style={primaryTextInputStyles.textInput}
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={props.placeholderTextColor}
      />
    </View>
    </TouchableWithoutFeedback>
  )
}

export default PrimaryTextInput;