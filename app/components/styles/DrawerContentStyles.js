import { StyleSheet } from 'react-native';
import colors from '../../theme/Colors';
import { verticalScale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarView: {},
  optionsView: { flex: 1, justifyContent: 'center' },
  drawerItem: { marginLeft: 0 },
  footerView: { flex: 0.2 },
  labelStyle: { color: colors.white, fontSize: verticalScale(20) },
  flexView: { flex: 1, padding: verticalScale(30) },
  userImage: {
    height: verticalScale(70),
    width: verticalScale(70),
    borderRadius: verticalScale(5)
  },
  userNameStyle: {
    fontSize: verticalScale(16),
    color: colors.white,
    marginVertical: verticalScale(5)
  },
  userMailStyle: {
    fontSize: verticalScale(11),
    color: colors.neutral,
    fontWeight: 'bold'
  },
  signoutButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: verticalScale(10)
  },
  logoutStyle: {
    marginLeft: verticalScale(5),
    color: colors.white,
    fontSize: verticalScale(16)
  }
});

export default styles;
