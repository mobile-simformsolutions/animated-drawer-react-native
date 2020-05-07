import { StyleSheet } from 'react-native';
import { Colors, scale } from '../../theme';

const styles = StyleSheet.create({
  profilePicContainer: {
    height: scale(120),
    width: scale(120),
    borderRadius: scale(120) / 2,
    borderWidth: 1,
    borderColor: Colors.primary
  },
  profilePic: {
    height: scale(118),
    width: scale(118),
    borderRadius: scale(118) / 2,
    resizeMode: 'cover'
  },
  profileEditContainer: {
    position: 'absolute',
    bottom: 0,
    right: -5,
    height: scale(40),
    width: scale(40),
    borderRadius: scale(40) / 2,
    borderWidth: 2,
    borderColor: Colors.white
  },
  profileEdit: {
    height: scale(37),
    width: scale(37),
    borderRadius: scale(37) / 2,
    resizeMode: 'contain'
  }
});

export default styles;
