import { Container } from 'native-base';
import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styles from './styles/HomeScreenStyle';
import { Colors } from '../../theme';

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
      <View style={styles.whiteContainerCenter}>
        <Text>Home</Text>
      </View>
    </Container>
  );
};

export default HomeScreen;
