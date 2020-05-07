import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Icons, Colors } from '../theme';
import styles from './styles/CustomTextInputStyles';

const ErrorView = message => (
  <View style={styles.errorView}>
    <Image source={Icons.warning} style={styles.warningIcon} />
    <Text style={styles.alertText}>{message?.error}</Text>
  </View>
);

const CustomTextInput = (
  {
    style,
    error,
    placeholderTextColor = Colors.lightSkyBlue,
    blurOnSubmit = false,
    returnKeyType = 'next',
    ...otherProps
  },
  ref
) => (
  <View>
    <TextInput
      ref={ref}
      style={[styles.textInput, style, error && styles.redBorder]}
      placeholderTextColor={placeholderTextColor}
      blurOnSubmit={blurOnSubmit}
      returnKeyType={returnKeyType}
      {...otherProps}
    />
    {error && <ErrorView error={error} />}
  </View>
);

CustomTextInput.propTypes = {
  style: PropTypes.object,
  error: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  blurOnSubmit: PropTypes.bool,
  returnKeyType: PropTypes.string
};

export default forwardRef(CustomTextInput);
