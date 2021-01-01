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
import { validateEmail, validatePhone } from '../../shared/utils/ValidateEmail';
import * as Actions from '../../shared/store/actions/actions';
import {connect} from 'react-redux';

class SignUp extends React.Component {
  state = {
    lastName: 'Thad',
    firstName: 'Ain',
    email: 'adehtorlah@gmail.com',
    phone: '08025073779',
    password: '12345678',
    showPassword: false,
  };

  _register = () => {
    let val = this.state;
    delete val.showPassword;
    // TODO perform validation
    this.props.signUp(val);
  }

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
              customstyle={{fontSize: RF(24), marginTop: RF(40)}}>
              Welcome
            </Text.MediumText>
            <Text.MediumText customstyle={{fontSize: RF(24)}}>
              to{' '}
              <Text.HeavyText customstyle={{fontSize: RF(24)}}>
                Tokenfy.
              </Text.HeavyText>
            </Text.MediumText>

            <View style={{marginTop: RF(20)}}>
              <Input
                placeHolder="Last name"
                value={lastName}
                // errorMessage={this.state.lastName.length < 3 ? 'Invalid name' : ''}
                rightButtonAction={null}
                onChangeText={(text) => this.setState({lastName: text})}
              />
              <Input
                placeHolder="First name"
                value={firstName}
                // errorMessage={this.state.firstName.length < 3 ? 'Invalid name' : ''}
                rightButtonAction={null}
                onChangeText={(text) => this.setState({firstName: text})}
              />
              <Input
                placeHolder="Email"
                value={email}
                errorMessage={email.length > 3 && !validateEmail(email) ? 'Invalid email' : ""}
                rightButtonAction={null}
                onChangeText={(text) => this.setState({email: text})}
              />
              <Input
                placeHolder="Phone Number"
                value={phone}
                errorMessage={!validatePhone(phone) ? 'Invalid phone' : ""}
                rightButtonAction={null}
                onChangeText={(text) => this.setState({phone: text})}
              />
              <Input
                placeHolder="Password"
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

              <Button buttonStyle={{marginTop: RF(40)}} onPress={() => this._register()}>Sign Up</Button>

              <Text.RomanText
                customstyle={{
                  textAlign: 'center',
                  color: Colors.primary60,
                  marginTop: RF(40),
                  fontSize: RF(14),
                }}>
                Or sign up with
              </Text.RomanText>

              <View
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                  marginTop: RF(20),
                }}>
                <Card
                onPress={() => {}}
                  style={{
                    padding: RF(8),
                    borderRadius: RF(20),
                    marginRight: RF(20),
                  }}>
                  <Image
                    source={Images.Google}
                    style={{width: 24, height: 24, resizeMode: 'contain'}}
                  />
                </Card>

                <Card
                onPress={() => {}}
                  style={{
                    padding: RF(8),
                    borderRadius: RF(20)
                  }}>
                  <Image
                    source={Images.Fb}
                    style={{width: 24, height: 24, resizeMode: 'contain'}}
                  />
                </Card>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginTop: RF(40),
                }}>
                <Text.RomanText customstyle={{fontSize: RF(14)}}>Already have an account? </Text.RomanText>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                  <Text.MediumText customstyle={{color: Colors.primary, fontSize: RF(14)}}>Sign in.</Text.MediumText>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  user: state.appReducer.user
});

const mapDispatchToProps = dispatch => ({
  signUp: (payload) => dispatch(Actions.register(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);