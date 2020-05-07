import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  buttonTouchable: {
    height: verticalScale(45),
    width: scale(150),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20
  },
  disabledButton: {
    backgroundColor: Colors.rosyBrown
  },
  buttonText: {
    color: Colors.white,
    fontSize: Fonts.size.label,
    fontWeight: '500'
  }
});

export default styles;
