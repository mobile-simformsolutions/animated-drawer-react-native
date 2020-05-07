/**
 * all home navigation screens are defined here ...
 */
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../modules/Home/HomeScreen';
import RegisterScreen from '../modules/Auth/RegisterScreen';
import { verticalScale, Colors, ApplicationStyles } from '../theme';
import { Navigations } from '../constants';

const HomeStack = createStackNavigator();

const HamburgerMenu = toggleDrawer => (
  <TouchableOpacity
    style={ApplicationStyles.navigationScreenStyles.barsButtonStyle}
    onPress={() => toggleDrawer()}
  >
    <Icon name="bars" size={verticalScale(22)} color={Colors.black} />
  </TouchableOpacity>
);

const NavigationScreens = ({ customStyle }) => {
  const navigation = useNavigation();
  const { toggleDrawer } = navigation;

  return (
    <Animated.View
      style={[
        customStyle,
        ApplicationStyles.navigationScreenStyles.drawerBackground
      ]}
    >
      <HomeStack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => HamburgerMenu(toggleDrawer)
        }}
      >
        <HomeStack.Screen name={Navigations.Home}>
          {props => <HomeScreen {...props} />}
        </HomeStack.Screen>
        <HomeStack.Screen name={Navigations.Profile}>
          {props => <RegisterScreen {...props} />}
        </HomeStack.Screen>
      </HomeStack.Navigator>
    </Animated.View>
  );
};

NavigationScreens.propTypes = {
  customStyle: Animated.Node
};

export default NavigationScreens;
