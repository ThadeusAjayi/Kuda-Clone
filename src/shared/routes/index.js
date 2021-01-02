import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Test from "../../Test";
import { Colors } from '../theme';
import { _navigator } from './NavigationService';
// import { Image } from 'react-native';
import RF from '../utils/RF';
import SplashScreen from 'react-native-splash-screen'
import { StatusBar, Platform, View } from 'react-native';
// import OnboardingStack from './OnboardingStack';
import AuthStack from './AuthStack';
import AppNavigation from './AppNavigation';

const Routes = createStackNavigator();
const Tab = createBottomTabNavigator();

  
export const Stack = () => {
  useEffect(() => {
    Platform.OS == "android" && StatusBar.setTranslucent(true);
    setTimeout(() => {
      SplashScreen.hide();
      Platform.OS == "android" && StatusBar.setBackgroundColor("transparent");
      StatusBar.setBarStyle("dark-content")
    }, 1000);
  }, []);
  return (
    <NavigationContainer ref={_navigator}>
      <Routes.Navigator headerMode={null} initialRouteName="Auth">
        <Routes.Screen 
          name="Test" 
          component={Test} 
        />
        <Routes.Screen 
          name="Auth"
          component={AuthStack}  
        />
        <Routes.Screen 
          name="App"
          component={AppNavigation}   
        />
      </Routes.Navigator>
    </NavigationContainer>
  )
}
