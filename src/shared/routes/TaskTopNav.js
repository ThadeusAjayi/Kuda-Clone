import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    saved: state.savedTasks,
    history: state.history
})

const SavedTasks = connect(mapStateToProps, {})(({saved}) => {
    return <View />
})

const History = connect(mapStateToProps, {})(({history}) => {
    return <View />
})

const Tab = createMaterialTopTabNavigator();
export default MyTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // scrollEnabled: true,
        allowFontScaling: true,
        upperCaseLabel: false,
        // Switch a different font for active and inactive
        // labelStyle: {fontSize: Assets.fontSize.Xsmall, fontFamily: Assets.fontTypes.SequelBold, textTransform: 'none'},
        // tabStyle: { width: "auto" },
        // indicatorStyle: { backgroundColor: Assets.colors.AccentColor, alignSelf: 'center' }
      }}
      backBehavior={"initialRoute"}
      keyboardDismissMode={"on-drag"}
      initialRouteName="Top News"
      lazy={true}
      lazyPreloadDistance={5}
    >
      <Tab.Screen
        name={"Saved Tasks"}
        component={SavedTasks}
      />
      <Tab.Screen
        name={"Task History"}
        component={History}
      />
    </Tab.Navigator>
  );
}