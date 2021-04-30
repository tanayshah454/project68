import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import instagram from './screens/insta'
import facebook from './screens/fb'

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}
const TabNavigator = createBottomTabNavigator({
 instagram: {screen: instagram},
 facebook: {screen: facebook},
},
);
const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
