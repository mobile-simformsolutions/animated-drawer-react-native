import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Fonts,
  Colors,
  moderateScale,
  verticalScale
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.form,
  alignCenter: {
    alignItems: 'center'
  },
  titleText: {
    fontSize: moderateScale(25),
    fontFamily: Fonts.type.bold,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: Colors.primary
  },
  redBorder: {
    borderColor: Colors.red
  },
  buttonContainer: {
    marginTop: verticalScale(30)
  },
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'center'
  }
});

export default styles;
