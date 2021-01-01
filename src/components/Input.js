import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from '../shared/theme'
import RF from "../shared/utils/RF";
import { Input } from 'react-native-elements';


export default ({
    keyboardType="default",
    value = "",
    placeHolder = "",
    placeholderTextColor = Colors.primary,
    defaultStyles = {},
    inputStyle = {},
    inputContainerStyle = {},
    containerStyle = {},
    errorMessage = "",
    onChangeText = () => {},
    secureTextEntry = false,
    editable = true,
    multiline = false,
    focusable= true,
    leftIcon= null,
    rightIcon = null, //<View style={{width: 15, height: 15, backgroundColor: Colors.primaryGreen}} />, For testing
    rightButtonAction = () => alert("default action") // Pass null if not a button and has an icon
}) => {
    const [focus, setFocus] = useState(false);
    const [textValue, setValue] = useState(value);

  return (
    <Input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        renderErrorMessage={false}
        focusable={focusable}
        value={textValue}
        editable={editable}
        multiline={multiline}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeHolder}
        placeholderTextColor={"#757575"}
        style={[styles.defaultStyles, defaultStyles]}
        containerStyle={[styles.containerStyle, containerStyle]}
        inputStyle={[styles.inputStyle, inputStyle]}
        inputContainerStyle={[styles.inputContainerStyle, inputContainerStyle]}
        errorMessage={errorMessage}
        errorStyle={styles.errorStyle}
        onChangeText={(text) => {onChangeText(text); setValue(text);}}
        rightIcon={<TouchableOpacity activeOpacity={rightButtonAction ? 0.5 : 1} onPress={() => rightButtonAction ? rightButtonAction() : {}} >{rightIcon}</TouchableOpacity>}
        rightIconContainerStyle={styles.rightIconContainerStyle}
        leftIcon={leftIcon}
    />
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    borderRadius: RF(4),
    marginHorizontal: RF(20),
    fontFamily: "Avenir-Book"
  },
  containerStyle: {
      // flex: 1,
      paddingHorizontal: 0,
  },
  inputContainerStyle: {
    marginVertical: RF(10), // For testing
    borderRadius: RF(4),
    borderWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: '#2c2c2c'
  },
  inputStyle: {
      color: Colors.white,
      fontSize: RF(16),
      paddingVertical: RF(20),
      alignSelf: 'center',
      textAlign:'center'
      // fontFamily: "Muli-SemiBold"
  },
  errorStyle: {
    color: Colors.primaryOrange,
    top: RF(-5),
    fontSize: RF(12),
    // fontFamily: "Muli"
  },
  rightIconContainerStyle: {
      right: 10
  }
});
