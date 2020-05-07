import { Container, Content, Toast } from 'native-base';
import React, { createRef } from 'react';
import { View, Keyboard } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { CustomButton, CustomTextInput, ProfileImage } from '../../components';
import { Strings, Navigations } from '../../constants';
import Schema from '../../services/ValidationServices';
import { Formik } from 'formik';
import styles from './styles/RegisterScreenStyles';

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSource: ''
    };
  }

  inputRef = {
    name: createRef(),
    email: createRef(),
    password: createRef()
  };

  renderNameTextInput = ({
    handleChange,
    handleBlur,
    errors,
    touched,
    values
  }) => (
    <CustomTextInput
      ref={this.inputRef.name}
      autoCapitalize={'words'}
      style={styles.textInput}
      placeholder={Strings.namePlaceholder}
      value={values.name}
      error={touched.name && errors.name}
      onBlur={handleBlur('name')}
      onChangeText={handleChange('name')}
      onSubmitEditing={() => this.inputRef.email.current.focus()}
    />
  );

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
      onChangeText={handleChange('email')}
      onBlur={handleBlur('email')}
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

  openImagePicker = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.setState({ imageSource: image.path });
    });
  };

  userSignUp = () => {
    const { imageSource } = this.state;
    if (imageSource.length === 0) {
      Toast.show({
        text: Strings.noProfilePic,
        buttonText: Strings.ok,
        position: 'top',
        duration: 3000
      });
      return;
    }
    Keyboard.dismiss();
    const { navigate } = this.props.navigation;
    navigate(Navigations.App);
  };

  isFormFilled = values =>
    values.name.length || values.email.length || values.password.length;

  renderSignupButton = ({ values, isValid, handleSubmit }) => {
    const { imageSource } = this.state;
    const isFormFilled = this.isFormFilled(values);
    return (
      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={!isValid || !isFormFilled || !imageSource.length}
          title={Strings.register}
          onPress={handleSubmit}
        />
      </View>
    );
  };

  renderFormInputs = params => (
    <View style={styles.formInputs}>
      {this.renderNameTextInput(params)}
      {this.renderEmailTextInput(params)}
      {this.renderPasswordTextInput(params)}
      {this.renderSignupButton(params)}
    </View>
  );

  renderRegisterForm = () => (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Schema.register}
      onSubmit={this.userSignUp}
    >
      {({ ...params }) => this.renderFormInputs(params)}
    </Formik>
  );

  renderForm = () => {
    const { imageSource } = this.state;
    return (
      <View style={styles.formContainer}>
        <ProfileImage
          imageSource={imageSource}
          onPress={this.openImagePicker}
        />
        {this.renderRegisterForm()}
      </View>
    );
  };

  render() {
    return (
      <Container style={[styles.whiteContainerCenter]}>
        <Content
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.contentContainerStyle}
        >
          {this.renderForm()}
        </Content>
      </Container>
    );
  }
}

export default RegisterScreen;
