import React from 'react';
import {Image, KeyboardAvoidingView, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SafeAreaView from 'react-native-safe-area-view';
import * as Text from '../../components/AppText/index';
import Button from '../../components/Button';
import Input from '../../components/Input';
import RF from '../../shared/utils/RF';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import * as Actions from '../../shared/store/actions/actions';

class ForgotPassword extends React.Component {
  state = {
    email: '',
  };

  _forgotPassword = () => {
    let email = this.state;
    // TODO perform validation
    this.props.forgotPassword(email);
  }

  render() {
    const {
      email,
    } = this.state;
    return (
      <SafeAreaView
        style={{backgroundColor: '#F9FAFB', flex: 1}}
        forceInset={{bottom: 'never'}}>
        <KeyboardAvoidingView behavior={'height'}>
          <View style={{paddingHorizontal: RF(20), marginTop: RF(50)}}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.goBack()} style={{paddingVertical: 4}}>
                  <AntDesign name="arrowleft" size={RF(24)} color={"#200E32"} />
              </TouchableOpacity>
            <Text.MediumText
              customstyle={{fontSize: RF(24), marginTop: RF(115)}}>
              {`Forgot Password`}
            </Text.MediumText>

            <Text.RomanText customstyle={{fontSize: RF(16), marginTop: RF(10)}}>
            {'Please input your email to get a link to\nreset your password.'}
            </Text.RomanText>

            <View style={{marginTop: RF(20)}}>
              <Input
                placeHolder="yourmail@mail.com"
                value={email}
                // errorMessage={this.state.email.length < 3 ? 'Invalid name' : ''}
                rightButtonAction={null}
                onChangeText={(text) => this.setState({email: text})}
              />


              <Button onPress={this._forgotPassword} buttonStyle={{marginTop: RF(115)}}>Send Link</Button>
              
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  forgotPassword: (payload) => dispatch(Actions.forgotPassword(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);