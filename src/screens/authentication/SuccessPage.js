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
  Dimensions,
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
import NavigationService from '../../shared/routes/NavigationService';

export default ({navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={[styles.body]}>
          <Text.HeavyText customstyle={{fontSize: RF(35)}}>You're in!</Text.HeavyText>
          <Text.MediumText customstyle={{fontSize: RF(14)}}>Start using your brand-new Kuda account right away!</Text.MediumText>
        </View>
      <Button onPress={() => NavigationService.reset("Login")} buttonStyle={styles.button}>Explore Now</Button>
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
    alignItems:'center',
    paddingTop: Dimensions.get("window").height /3.5
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
