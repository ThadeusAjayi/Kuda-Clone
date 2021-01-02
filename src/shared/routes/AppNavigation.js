import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {Colors} from '../theme';
import * as AppScreens from '../../screens/home/index';
import Feather from 'react-native-vector-icons/Feather';

//Mark:- Create Tab
const Tab = createBottomTabNavigator();
const theBottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior={'initialRoute'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return <Feather name="home" color={focused ? Colors.white : "grey"} size={25}/>
          } else if (route.name === 'Payment') {
            return <Feather name="send" color={focused ? Colors.white : "grey"} size={25}/>
          } else if (route.name === 'Budget') {
            return <Feather name="clock" color={focused ? Colors.white : "grey"} size={25}/>
          } else if (route.name === 'Cards') {
            return <Feather name="credit-card" color={focused ? Colors.white : "grey"} size={25}/>
          } else if (route.name === 'More') {
            return <Feather name="menu" color={focused ? Colors.white : "grey"} size={25}/>
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#fff',
        style: {
          backgroundColor: Colors.inputBack
        }
      }}>
      <Tab.Screen name="Home" component={AppScreens.Home} />
      <Tab.Screen name="Payment" component={AppScreens.Home} />
      <Tab.Screen
        name="Budget"
        component={AppScreens.Home}
      />
      <Tab.Screen name="Cards" component={AppScreens.Home} />
      <Tab.Screen name="More" component={AppScreens.Home} />
    </Tab.Navigator>
  );
};

const AppStack = createStackNavigator();

export default () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Home" component={theBottomNav} />
    </AppStack.Navigator>
  );
};
