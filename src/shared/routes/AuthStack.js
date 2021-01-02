import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {_navigator} from './NavigationService';
import * as Screens from '../../screens/authentication/index';

const Routes = createStackNavigator();

export default () => {
  return (
    <Routes.Navigator headerMode={null} initialRouteName="Start">
      <Routes.Screen name="Start" component={Screens.Start} />
      <Routes.Screen name="Login" component={Screens.Login} />
      <Routes.Screen name="Signup" component={Screens.SignUp} />
      <Routes.Screen name="SignUpTwo" component={Screens.SignUpTwo} />
      <Routes.Screen name="SignUpThree" component={Screens.SignUpThree} />
      <Routes.Screen name="SignUpFour" component={Screens.SignUpFour} />
      <Routes.Screen name="SignUpFourTwo" component={Screens.SignUpFourTwo} />
      <Routes.Screen name="SignUpFive" component={Screens.SignUpFive} />
      <Routes.Screen name="Selfie" component={Screens.Selfie} />
      <Routes.Screen name="SuccessPage" component={Screens.SuccessPage} />
    </Routes.Navigator>
  );
};
