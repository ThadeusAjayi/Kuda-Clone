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
  const [gender, setGender] = useState(1);
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
            <Text.BookText customstyle={styles.pager}>4/6</Text.BookText>
          </View>
          <Text.HeavyText customstyle={[styles.textMargin, styles.headText]}>
            A Bit More About You
          </Text.HeavyText>
          <Text.RomanText customstyle={[styles.textMargin, styles.subText]}>
            We'll love to know you better.
          </Text.RomanText>
<View style={{justifyContent: 'space-around', flexDirection: 'row', marginTop: RF(20)}}>
          <TouchableWithoutFeedback onPress={() => setGender(1)}>
            <View style={{alignItems: 'center'}}>
              <View style={[styles.gender, gender == 2 && {backgroundColor: Colors.inputBack}]} />
              <Text.HeavyText>Male</Text.HeavyText>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setGender(2)}>
            <View style={{alignItems: 'center'}}>
              <View style={[styles.gender, gender == 1 && {backgroundColor: Colors.inputBack}]} />
              <Text.HeavyText>Female</Text.HeavyText>
            </View>
          </TouchableWithoutFeedback>
          </View>

          <View style={{backgroundColor: Colors.inputBack, borderRadius: RF(4), padding: RF(15), alignItems: 'center', marginTop: RF(20)}}>
            <Text.BookText customstyle={{fontSize: RF(20)}}>Date Of Birth</Text.BookText>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Button onPress={() => navigation.navigate("SignUpFourTwo")} buttonStyle={styles.button}>Continue</Button>
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
  gender: {
    backgroundColor: Colors.accent, height: RF(80), width: RF(80), borderRadius: RF(40),
    marginBottom: RF(10)
  },
  button: {
    width: "90%",
    alignSelf: 'center'
  }
});
