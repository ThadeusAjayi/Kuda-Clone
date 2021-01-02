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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
            <Text.BookText customstyle={styles.pager}>5/6</Text.BookText>
          </View>
          <Text.HeavyText customstyle={[styles.textMargin, styles.headText]}>
            Where do you live?
          </Text.HeavyText>
          <Text.RomanText customstyle={[styles.textMargin, styles.subText]}>
            Please, use your actual house address, not a P.O. Box.
          </Text.RomanText>
          <Input placeHolder="Street Name" />
          <Input placeHolder="City" />
          <Input placeHolder="State" />
          <Input placeHolder="Nigeria" value={"Nigeria"} />
          
        </KeyboardAvoidingView>
      </ScrollView>
      <Button onPress={() => navigation.navigate('Selfie')} buttonStyle={styles.button}>Continue</Button>
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
    fontSize: RF(20),
  },
  textMargin: {
    marginBottom: RF(10),
  },
  center: {
    textAlign: 'center',
  },
  privacy: {
    color: Colors.accent,
  },
  bottom: {
    marginTop: RF(30),
  },
  button: {
    marginTop: RF(150),
    // marginHorizontal: RF(20),
    width: '90%',
    alignSelf: 'center',
  },
  subText: {
    fontSize: RF(14),
  },
  whyContainer: {
    padding: RF(15),
    backgroundColor: Colors.inputBack,
    borderRadius: RF(4),
    marginTop: RF(10),
  },
  why: {
    flex: 1,
    paddingHorizontal: RF(20),
  },
});
