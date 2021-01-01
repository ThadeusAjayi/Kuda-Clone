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
      {/* <Routes.Screen name="Signup" component={Screens.SignUp} />
      <Routes.Screen name="ForgotPassword" component={Screens.ForgotPassword} />
      <Routes.Screen name="ResetPassword" component={Screens.ResetPassword} /> */}
      {/* <Routes.Screen 
          name="ResetPassword" 
          component={Screens.ResetPassword} 
        />
        <Routes.Screen 
          name="Success" 
          component={Screens.Success} 
        />
        <Routes.Screen 
          name="VerifyEmail" 
          component={Screens.VerifyEmail} 
        />
        <Routes.Screen 
          name="ReceiveNotification" 
          component={Screens.ReceiveNotification} 
        />
        <Routes.Screen 
          name="ChangePassword" 
          component={Screens.ChangePassword} 
        />
        <Routes.Screen 
          name="ChangePasswordSuccess" 
          component={Screens.ChangePasswordSuccess} 
        /> */}
    </Routes.Navigator>
  );
};
