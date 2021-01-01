import React, {Component} from 'react';
import {Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from './components/Button';
import Input from './components/Input';
import {Colors} from './shared/theme';
import RF from './shared/utils/RF';
import * as Images from './assets/Images';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

export default class Test extends Component {
  state = {
    firstName: '',
  };

  render() {
    return (
      <SafeAreaView style={{backgroundColor: "#000", flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: RF(20)}}>
            <Input
              placeHolder="Email Address"
              value={''}
              // errorMessage={this.state.firstName.length < 3 ? 'Invalid name' : ''}
              rightButtonAction={null}
              onChangeText={(text) => this.setState({firstName: text})}
            />

            <Button buttonStyle={{backgroundColor: Colors.primary}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
