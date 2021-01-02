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
      <View style={[styles.body]}>
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
            {/* <Text.BookText customstyle={styles.pager}>5/6</Text.BookText> */}
          </View>
          <Text.HeavyText customstyle={[styles.textMargin, styles.headText]}>
            Take a Selfie
          </Text.HeavyText>
          <Text.RomanText customstyle={[styles.textMargin, styles.subText]}>
            Take a clear photo of your face. We need this to verify your identity. You can always change this photo later.
          </Text.RomanText>
          
          <View style={{alignItems: 'center', marginTop: RF(30), borderWidth: 10, borderColor: Colors.inputBack, alignSelf: 'center', justifyContent:"center", height: RF(200), width: RF(200), borderRadius: RF(100)}}>
              <FontAwesome name="camera" color={Colors.accent} size={40} />
              <Text.BookText customstyle={{marginTop: RF(10)}}>Take Photo</Text.BookText>
          </View>

<View style={{justifyContent: 'center', flexDirection: 'row', marginTop: RF(40)}}>
          <View style={{alignItems: "center", marginRight: RF(40)}}>
              <View style={styles.correct} />
              <Text.BookText>RIGHT</Text.BookText>
          </View>
          <View style={{alignItems: "center"}}>
              <View style={[styles.correct, {borderColor: 'tomato'}]} />
              <Text.BookText>WRONG</Text.BookText>
          </View>
      </View>    
        </KeyboardAvoidingView>
      </View>
      <Text.BookText customstyle={[styles.center, styles.bottom, {fontSize: RF(12)}]}>By completing this sign-up, you agree to our<Text.BookText customstyle={[styles.privacy, {fontSize: RF(12)}]}> Terms & Conditions</Text.BookText></Text.BookText>
      <View style={{flexDirection: 'row', paddingHorizontal: RF(20), justifyContent: 'space-between', marginTop: RF(20)}}>
          <Button buttonStyle={{flex: 1, marginRight: RF(10), backgroundColor: Colors.inputBack}}>Try Again</Button>
          <Button onPress={() => navigation.navigate("SuccessPage")} buttonStyle={{flex: 1}}>Looks Good</Button>
      </View>
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
  center: {
    textAlign: 'center',
  },
  privacy: {
    color: Colors.accent,
  },
  correct: {
      height: 70,
      width: 70,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: Colors.white,
      marginBottom: RF(10)
  }
});
