import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import DrawerContent from '../components/DrawerContent';
import NavigationScreens from './NavigationScreens';
import { Colors, ApplicationStyles, verticalScale } from '../theme';

const Drawer = createDrawerNavigator();

const DrawerScreens = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8]
  });

  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, verticalScale(15)]
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      start={{ x: 0.0, y: 0.7 }}
      end={{ x: 0.4, y: 1.0 }}
      locations={[0, 0.9]}
      style={ApplicationStyles.appNavigationStyles.container}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor={Colors.transparent}
        drawerStyle={ApplicationStyles.appNavigationStyles.flexView}
        contentContainerStyle={ApplicationStyles.appNavigationStyles.flexView}
        drawerContentOptions={{
          activeBackgroundColor: Colors.transparent,
          activeTintColor: Colors.white,
          inactiveTintColor: Colors.white
        }}
        sceneContainerStyle={{ backgroundColor: Colors.transparent }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}
      >
        <Drawer.Screen name="Screens">
          {props => (
            <NavigationScreens {...props} customStyle={animatedStyle} />
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};
DrawerScreens.propTypes = {
  progress: Animated.Node
};

export default DrawerScreens;
