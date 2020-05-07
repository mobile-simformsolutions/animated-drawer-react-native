import { Formik } from 'formik';
import { Container, Content } from 'native-base';
import React, { createRef } from 'react';
import { Keyboard, StatusBar, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CustomButton, CustomTextInput } from '../../components';
import { Strings, Navigations } from '../../constants';
import Schema from '../../services/ValidationServices';
import { Colors } from '../../theme';
import styles from './styles/LoginScreenStyle';

class LoginScreen extends React.Component {
  inputRef = {
    email: createRef(),
    password: createRef()
  };

  renderEmailTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values
  }) => (
    <CustomTextInput
      ref={this.inputRef.email}
      autoCapitalize={'none'}
      keyboardType={'email-address'}
      style={styles.textInput}
      placeholder={Strings.emailPlaceholder}
      value={values.email}
      error={touched.email && errors.email}
      onBlur={handleBlur('email')}
      onChangeText={handleChange('email')}
      onSubmitEditing={() => this.inputRef.password.current.focus()}
    />
  );

  renderPasswordTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    handleSubmit
  }) => (
    <CustomTextInput
      secureTextEntry
      ref={this.inputRef.password}
      style={styles.textInput}
      placeholder={Strings.passwordPlaceholder}
      value={values.password}
      error={touched.password && errors.password}
      returnKeyType={'done'}
      onSubmitEditing={handleSubmit}
      onBlur={handleBlur('password')}
      onChangeText={handleChange('password')}
    />
  );

  userLogin = () => {
    Keyboard.dismiss();
    const { navigation } = this.props;
    navigation.navigate(Navigations.App);
  };

  renderLoginButton = ({ values, isValid, handleSubmit }) => {
    const isFormFilled = values.email.length || values.password.length;
    return (
      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={!isValid || !isFormFilled}
          title={Strings.login}
          onPress={handleSubmit}
        />
      </View>
    );
  };

  renderTitle = () => <Text style={styles.titleText}>{'Login'}</Text>;

  renderBottomView = () => {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.bottomView}>
        <Text>
          {Strings.member}
          <Text
            style={styles.signupText}
            onPress={() => navigate(Navigations.Registration)}
          >
            {Strings.signup}
          </Text>
        </Text>
      </View>
    );
  };

  renderLoginFormInputs = params => (
    <View style={styles.formInputs}>
      {this.renderEmailTextInput(params)}
      {this.renderPasswordTextInput(params)}
      {this.renderLoginButton(params)}
    </View>
  );

  renderLoginForm = () => (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Schema.login}
      onSubmit={this.userLogin}
    >
      {({ ...params }) => this.renderLoginFormInputs(params)}
    </Formik>
  );

  renderContent = () => (
    <View style={styles.formContainer}>
      {this.renderTitle()}
      {this.renderLoginForm()}
      {this.renderBottomView()}
    </View>
  );

  render() {
    return (
      <Container style={[styles.whiteContainerCenter]}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
        <Content
          showsVerticalScrollIndicator={false}
          enableAutoAutomaticScroll={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {this.renderContent()}
        </Content>
      </Container>
    );
  }
}

LoginScreen.propTypes = {};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);
