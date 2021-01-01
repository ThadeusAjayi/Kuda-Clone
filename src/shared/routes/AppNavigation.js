import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import {Colors} from '../theme';
import * as Icons from '../../assets/Images';
import * as AppScreens from '../../screens/home/index';
import {View} from 'react-native-animatable';
import Test from '../../Test';
import RF from '../utils/RF';

const ProfileNav = createStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileNav.Navigator headerMode="none">
      <ProfileNav.Screen name="Profile" component={AppScreens.Profile} />
      <ProfileNav.Screen
        name="EditProfile"
        component={AppScreens.EditProfile}
      />
      <ProfileNav.Screen name="Settings" component={AppScreens.Settings} />
    </ProfileNav.Navigator>
  );
};

//Mark:- Create Tab
const Tab = createBottomTabNavigator();
const theBottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior={'initialRoute'}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? Icons.HomeActive : Icons.HomeInactive;
          } else if (route.name === 'Explore') {
            iconName = focused ? Icons.ExploreActive : Icons.ExploreInactive;
          } else if (route.name === 'QR') {
            iconName = Icons.QrButton;
          } else if (route.name === 'Coupons') {
            iconName = focused ? Icons.CouponActive : Icons.CouponInactive;
          } else if (route.name === 'Profile') {
            iconName = focused ? Icons.ProfileActive : Icons.ProfileInactive;
          }

          return (
            <Image
              source={iconName}
              style={{
                width: RF(26),
                height: RF(26),
                alignSelf: 'center',
                resizeMode: 'contain',
              }}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#fff',
      }}>
      <Tab.Screen name="Home" component={AppScreens.Dashboard} />
      <Tab.Screen name="Explore" component={AppScreens.Explore} />
      <Tab.Screen
        name="QR"
        options={({route}) => ({
          tabBarIcon: ({color, size}) => {
            return (
              <Image
                source={Icons.QrButton}
                style={{
                  width: 60,
                  height: 60,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                  top: -20,
                }}
              />
            );
          },
        })}
        component={AppScreens.QR}
      />
      <Tab.Screen name="Coupons" component={AppScreens.Coupons} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const AppStack = createStackNavigator();

export default () => {
  return (
    <AppStack.Navigator headerMode="none">
      <AppStack.Screen name="Home" component={theBottomNav} />
      <AppStack.Screen name="ExploreSearch" component={AppScreens.ExploreSearch} />
      <AppStack.Screen name="Category" component={AppScreens.Category} />
      <AppStack.Screen name="DealDetails" component={AppScreens.DealDetails} />
    </AppStack.Navigator>
  );
};
