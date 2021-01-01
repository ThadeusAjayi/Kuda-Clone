import React from 'react';
import {Image, KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import * as Text from '../../components/AppText/index';
import Button from '../../components/Button';
import Input from '../../components/Input';
import {Colors} from '../../shared/theme';
import RF from '../../shared/utils/RF';
import * as Images from '../../assets/Images';
import {Card} from 'react-native-paper';

export default class ResetPassword extends React.Component {
  state = {
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    password: '',
    showPassword: false,
  };

  render() {
    const {
      lastName,
      firstName,
      email,
      phone,
      password,
      showPassword,
    } = this.state;
    return (
      <SafeAreaView
        style={{backgroundColor: '#F9FAFB', flex: 1}}
        forceInset={{bottom: 'never'}}>
        <KeyboardAvoidingView behavior={'height'}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: RF(20)}}
            style={{paddingHorizontal: RF(20)}}>
            <Text.MediumText
              customstyle={{fontSize: RF(24), marginTop: RF(120), textAlign: 'center'}}>
              {`Reset Password`}
            </Text.MediumText>
            <Text.RomanText
              customstyle={{fontSize: RF(16), marginTop: RF(15), textAlign: 'center'}}>
              {`Input new password details`}
            </Text.RomanText>

            <View style={{marginTop: RF(60)}}>
              <Input
                placeHolder="New Password"
                value={password}
                secureTextEntry={!showPassword}
                rightIcon={
                  <View
                    style={{height: 10, width: 10, backgroundColor: 'orange'}}
                  />
                }
                // errorMessage={this.state.password.length < 3 ? 'Invalid name' : ''}
                rightButtonAction={() =>
                  this.setState((prev) => ({showPassword: !prev.showPassword}))
                }
                onChangeText={(text) => this.setState({password: text})}
              />
              <Input
                placeHolder="Re-enter New Password"
                value={password}
                secureTextEntry={!showPassword}
                rightIcon={
                  <View
                    style={{height: 10, width: 10, backgroundColor: 'orange'}}
                  />
                }
                // errorMessage={this.state.password.length < 3 ? 'Invalid name' : ''}
                rightButtonAction={() =>
                  this.setState((prev) => ({showPassword: !prev.showPassword}))
                }
                onChangeText={(text) => this.setState({password: text})}
              />

              <Button buttonStyle={{marginTop: RF(40)}}>Reset</Button>
              <Button textStyle={{color: Colors.primary}} buttonStyle={{marginTop: RF(20), backgroundColor: 'white'}}>Cancel</Button>
              
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
