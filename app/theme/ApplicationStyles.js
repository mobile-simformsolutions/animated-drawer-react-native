import {
  Colors,
  Metrics,
  // Fonts,
  verticalScale,
  // moderateScale,
  scale
} from './';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    },
    normalFooterStyle: {
      backgroundColor: Colors.transparent,
      borderTopWidth: 0,
      elevation: 0,
      marginBottom: verticalScale(20)
    },
    whiteContainer: {
      flex: 1,
      backgroundColor: Colors.white
    },
    whiteContainerCenter: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center'
    },
    noBorderStyle: {
      borderBottomWidth: Metrics.zero
    },
    topBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius,
      borderTopRightRadius: Metrics.textFieldRadius
    },
    bottomBorderRadius: {
      borderBottomLeftRadius: Metrics.textFieldRadius,
      borderBottomRightRadius: Metrics.textFieldRadius
    },
    topLeftBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius
    },
    topRightBorderRadius: {
      borderTopRightRadius: Metrics.textFieldRadius
    }
  },
  form: {
    textInput: {
      height: verticalScale(45),
      width: scale(300),
      borderRadius: scale(5),
      borderWidth: scale(1),
      borderColor: Colors.secondary,
      paddingLeft: scale(10)
    },
    formContainer: {
      alignItems: 'center',
      padding: scale(10)
    },
    formInputs: {
      marginTop: verticalScale(20),
      alignItems: 'center'
    }
  },
  navigationScreenStyles: {
    barsButtonStyle: {
      padding: verticalScale(15),
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    drawerBackground: {
      flex: 1,
      backgroundColor: Colors.lightSkyBlue,
      overflow: 'hidden'
    }
  },
  appNavigationStyles: {
    container: { backgroundColor: Colors.lightSkyBlue, flex: 1, elevation: 5 },
    flexView: { flex: 1, backgroundColor: Colors.transparent }
  }
};

export default ApplicationStyles;
