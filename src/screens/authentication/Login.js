import React, {useState} from 'react';
import {
  Image,
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity
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
  return (
    <SafeAreaView style={[styles.background]}>
      <View style={styles.head}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}><MaterialIcons
          name="keyboard-arrow-left"
          color={Colors.white}
          size={40}
        /></TouchableOpacity>
        <AntDesign name="questioncircle" color={Colors.white} size={30} />
      </View>
      <ScrollView style={[styles.body]}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "height" : 'padding'}>
          <Image source={Images.KudaLogo} style={styles.logo} />
          <Text.HeavyText customstyle={styles.headText}>Hey There!</Text.HeavyText>
          <Input
            placeHolder="Email Address"
          />
          <Input
            placeHolder="Password"
            secureTextEntry={!showPassword}
            rightButtonAction={() => setShowPassword(!showPassword)}
            rightIcon={<Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} color={Colors.white} size={25} />}
          />
          <Button buttonStyle={styles.button}>Next</Button>

          <Text.HeavyText customstyle={{color: Colors.accent, textAlign: "center", }}>Change Password</Text.HeavyText>
        </KeyboardAvoidingView>
      </ScrollView>
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
    borderBottomColor: "#9e9e9e",
    paddingBottom: RF(10),
    borderBottomWidth: 0.3,
    alignItems: "center"
  },
  body: {
    flex: 1,
    paddingHorizontal: RF(20),
  },
  logo: {
    width: RF(50),
    height: RF(50),
    marginVertical: RF(40),
    marginBottom: RF(20),
    alignSelf: 'center'
  },
  headText: {
    fontSize: RF(30),
    textAlign: "center",
    marginBottom: RF(40)
  },
  button: {
    marginVertical: RF(40)
  }
});
