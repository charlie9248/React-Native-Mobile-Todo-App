import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About'
import Details from '../screens/ReviewDetails'
import Header from '../shared/Header';
import React from 'react';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home"   >
      <Screen name="Home" component={Home} options={{ title: 'Home' } }/>
      <Screen name="About" component={About} options={{ headerTitle : () => <Header/>}} />
      <Screen name="Details" component={Details} options={{ headerTitle : () => <Header/>}} />
    </Navigator>
  </NavigationContainer>
);
