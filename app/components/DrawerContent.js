import React from 'react';
import { Image, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles/DrawerContentStyles';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, verticalScale } from '../theme';
import images from '../assets/images';
import { Navigations, Strings } from '../constants';

const DrawerContent = props => {
  function onPressNaigationItem(key) {
    const { navigation } = props;
    navigation.navigate(key);
  }
  const DrawerItemRender = (iconName, route) => {
    return (
      <DrawerItem
        label={route}
        labelStyle={styles.labelStyle}
        style={styles.drawerItem}
        icon={() => (
          <Icon name={iconName} color={Colors.white} size={verticalScale(16)} />
        )}
        onPress={() => onPressNaigationItem(route)}
      />
    );
  };
  return (
    <LinearGradient
      colors={[Colors.primary, Colors.secondary]}
      start={{ x: 0.0, y: 0.7 }}
      end={{ x: 0.7, y: 1.0 }}
      locations={[0, 0.9]}
      style={styles.flexView}
    >
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.container}
      >
        <StatusBar barStyle="dark-content" backgroundColor={Colors.primary} />

        <View style={styles.avatarView}>
          <Image source={images.avatar} style={styles.userImage} />
          <Text style={styles.userNameStyle}>Chetan Godiya</Text>
          <Text style={styles.userMailStyle}>
            chetan.g@simformsolutions.com
          </Text>
        </View>
        <View style={styles.optionsView}>
          {DrawerItemRender('home', Navigations.Home)}
          {DrawerItemRender('user', Navigations.Profile)}
        </View>
        <View style={styles.footerView}>
          <TouchableOpacity style={styles.signoutButtonContainer}>
            <Icon
              name="sign-out"
              color={Colors.white}
              size={verticalScale(16)}
            />
            <Text style={styles.logoutStyle}>{Strings.logout}</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </LinearGradient>
  );
};

DrawerContent.propTypes = {
  toggleDrawer: PropTypes.any
};

export default DrawerContent;
