import React from 'react';
import { StatusBar, View } from 'react-native';
import AppNavigation from '../navigation/AppNavigation';
import { ApplicationStyles } from '../theme';
import { Root } from 'native-base';

const RootContainer = () => {
  return (
    <Root>
      <View style={[ApplicationStyles.screen.mainContainer]}>
        <StatusBar barStyle="dark-content" />
        <AppNavigation />
      </View>
    </Root>
  );
};

export default RootContainer;
