import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import RF from '../../shared/utils/RF';
import * as Text from '../../components/AppText/index';
import * as Images from '../../assets/Images';
import {Colors} from '../../shared/theme';
import Button from '../../components/Button';
import Input from '../../components/Input';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  return (
    <SafeAreaView style={[styles.background]}>
      <ScrollView style={[styles.body]}>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'height' : 'padding'}>
          <View style={styles.head}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}>
              <MaterialIcons
                name="keyboard-arrow-left"
                color={Colors.white}
                size={40}
                style={{left: -20}}
              />
            </TouchableOpacity>
            <Text.BookText customstyle={styles.pager}>1/6</Text.BookText>
          </View>
          <Text.HeavyText customstyle={[styles.textMargin, styles.headText]}>Start</Text.HeavyText>
          <Text.RomanText customstyle={[styles.textMargin]}>Open a Kuda account with a few details.</Text.RomanText>
          <Text.RomanText customstyle={[styles.textMargin]}>Your password must have at least 8 characters including letters and a number.</Text.RomanText>
          <Input placeHolder="Email Address" />
          <Input
            placeHolder="Enter Password"
            secureTextEntry={!showPassword}
            rightButtonAction={() => setShowPassword(!showPassword)}
            rightIcon={
              <Ionicons
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                color={Colors.white}
                size={25}
              />
            }
          />
          <Input
            placeHolder="Re-Enter Password"
            secureTextEntry={!showPassword2}
            rightButtonAction={() => setShowPassword2(!showPassword2)}
            rightIcon={
              <Ionicons
                name={showPassword2 ? 'eye-outline' : 'eye-off-outline'}
                color={Colors.white}
                size={25}
              />
            }
          />
          <Input
            placeHolder="Referral Code (Optional)"
          />

          <Text.BookText customstyle={[styles.center, styles.bottom]}>For information on what we do with your data, please read our<Text.BookText customstyle={styles.privacy}> Sign In</Text.BookText></Text.BookText>
      
        </KeyboardAvoidingView>
      </ScrollView>
          <Button onPress={() => navigation.navigate("SignUpThree")} buttonStyle={styles.button}>Continue</Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RF(20),
    borderBottomColor: '#9e9e9e',
    paddingBottom: RF(10),
    borderBottomWidth: 0.3,
    alignItems: 'center',
  },
  body: {
    flex: 1,
    paddingHorizontal: RF(20),
  },
  pager: {
    color: Colors.white,
  },
  headText: {
    marginTop: RF(40),
    fontSize: RF(18)
  },
  textMargin: {
    marginBottom: RF(10),
  },
  center: {
    textAlign: 'center'
  },
  privacy: {
    color: Colors.accent
  },
  bottom: {
    marginTop: RF(30)
  },
  button: {
    marginTop: RF(150),
    alignSelf: 'center',
    width: "90%"
  },
});
