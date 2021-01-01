import React, {Component} from 'react';
import {Image, View, StyleSheet, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RF from '../../shared/utils/RF';
import * as Text from '../../components/AppText/index';
import * as Images from '../../assets/Images';
import {Colors} from '../../shared/theme';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default ({navigation}) => {
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={[styles.body]}>
        <View style={{flex: 1}}></View>
        <Text.HeavyText
          customstyle={[
            styles.welcome,
            styles.center
          ]}>{`Welcome to you\nFreedom.`}</Text.HeavyText>
        <Button onPress={() => navigation.navigate("Signup")} buttonStyle={{marginVertical: RF(40)}}>Start</Button>
        <Text.HeavyText customstyle={[styles.center, styles.bottom]}>Have an account?<TouchableWithoutFeedback onPress={() => navigation.navigate("Login")}><Text.HeavyText customstyle={styles.signIn}> Sign In</Text.HeavyText></TouchableWithoutFeedback></Text.HeavyText>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  body: {
    flex: 1,
    paddingHorizontal: RF(20),
  },
  welcome: {
    fontSize: RF(30),
  },
  signIn: {
      color: Colors.accent
  },
  center: {
      textAlign: 'center'
  },
  bottom: {
      marginBottom: RF(30)
  }
});
