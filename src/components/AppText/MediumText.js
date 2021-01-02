import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors } from '../../shared/theme'
import RF from "../../shared/utils/RF";

export default props => {
  return (
    <Text style={[styles.defaultStyles, props.customstyle]} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyles: {
    fontFamily: "Avenir-Medium",
    fontSize: RF(16),
    color: Colors.white
  }
});
