import PropTypes from 'prop-types';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Icons, Images } from '../theme';
import styles from './styles/ProfileImageStyles';

const ProfileImage = ({ onPress, imageSource }) => (
  <View>
    <View style={styles.profilePicContainer}>
      <Image
        style={styles.profilePic}
        source={imageSource ? { uri: imageSource } : Images.avatar}
      />
    </View>
    <TouchableOpacity
      style={styles.profileEditContainer}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image style={styles.profileEdit} source={Icons.edit} />
    </TouchableOpacity>
  </View>
);

ProfileImage.propTypes = {
  onPress: PropTypes.func,
  imageSource: PropTypes.string
};

export default ProfileImage;
