import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { _navigator } from './NavigationService';
import * as OnboardingScreens from '../../screens/onboarding/index'

const Routes = createStackNavigator();
  
export default () => {
  return (
      <Routes.Navigator headerMode={null} initialRouteName="OnboardingOne">
        <Routes.Screen 
          name="OnboardingOne" 
          component={OnboardingScreens.OnboardingOne} 
        />
        <Routes.Screen 
          name="OnboardingTwo" 
          component={OnboardingScreens.OnboardingTwo} 
        />
        <Routes.Screen 
          name="OnboardingThree" 
          component={OnboardingScreens.OnboardingThree} 
        />
        <Routes.Screen 
          name="OnboardingFour" 
          component={OnboardingScreens.OnboardingFour} 
        />
      </Routes.Navigator>
  )
}
