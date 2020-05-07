import PropTypes from 'prop-types';
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../theme';
import styles from './styles/CustomButtonStyles';

const CustomButton = ({ onPress, disabled, isLoading, style, title }) => (
  <TouchableOpacity
    activeOpacity={0.8}
    disabled={disabled || isLoading}
    style={[styles.buttonTouchable, disabled && styles.disabledButton, style]}
    onPress={onPress}
  >
    {isLoading ? (
      <ActivityIndicator size={'small'} color={Colors.white} />
    ) : (
      <Text style={styles.buttonText}>{title}</Text>
    )}
  </TouchableOpacity>
);

CustomButton.propTypes = {
  style: PropTypes.object,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  title: PropTypes.string
};

export default CustomButton;
