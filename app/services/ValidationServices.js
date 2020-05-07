import * as Yup from 'yup';
import { Strings } from '../constants';

const PASSWORD_REGEX = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*./-]).{8,}$/;

const schema = {
  login: Yup.object({
    email: Yup.string()
      .email(Strings.invalidEmail)
      .required(Strings.emptyEmail),
    password: Yup.string().required(Strings.emptyPassword)
  }),
  register: Yup.object({
    name: Yup.string()
      .max(15, Strings.inValidName)
      .required(Strings.emptyName),
    email: Yup.string()
      .email(Strings.invalidEmail)
      .required(Strings.emptyEmail),
    password: Yup.string()
      .matches(PASSWORD_REGEX, Strings.invalidPassword)
      .required(Strings.emptyPassword)
  })
};

export default schema;
