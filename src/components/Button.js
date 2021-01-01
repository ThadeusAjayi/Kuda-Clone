import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from '../shared/theme'
import RF from "../shared/utils/RF";
import * as Text from './AppText';

export default ({
    textStyle = {},
    children = "ENTER BUTTON TEXT",
    buttonStyle = {},
    onPress = () => alert("No action passed")
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={[styles.defaultStyles, buttonStyle]}>
        <Text.HeavyText customstyle={[styles.textStyle, textStyle]}>{children}</Text.HeavyText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    backgroundColor: Colors.primary,
    width: '100%',
    borderRadius: RF(4),
    paddingVertical: RF(15),
    // marginHorizontal: RF(20),
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  textStyle: {
      color: Colors.white,
      fontSize: RF(16),
      alignSelf: 'center',
      textAlign: 'center',
      fontFamily:'Avenir-Heavy'
  }
});
