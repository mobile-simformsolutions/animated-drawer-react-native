import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../modules/Auth/LoginScreen';
import { Navigations, Strings } from '../constants';
import RegisterScreen from '../modules/Auth/RegisterScreen';
import DrawerScreens from './DrawerScreens';

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name={Navigations.Login}
      component={LoginScreen}
      options={{ title: Strings.login }}
    />
    <AuthStack.Screen
      name={Navigations.Registration}
      component={RegisterScreen}
      options={{ title: Strings.signup }}
    />
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
function AppNavigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode="none">
        <RootStack.Screen name={Navigations.Auth} component={AuthStackScreen} />
        <RootStack.Screen name={Navigations.App} component={DrawerScreens} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
