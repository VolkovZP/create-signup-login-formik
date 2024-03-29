import * as yup from 'yup';

export const EMAIL_SCHEMA = yup
  .string()
  .email()
  .required();

export const NAME_SCHEMA = yup
  .string()
  .matches(/^[A-Z][a-z]{0,1477}$/, 'Имя должно начинаться с большой буквы')
  .required();

export const PASSWORD_SCHEMA = yup
  .string()
  .matches(
    /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-])/,
    'Password must contain upper and lower latin characters, numbers and symbols'
  )
  .matches(/^.{8,}$/, 'Password must contain at least 8 characters')
  .required();

const CONFIRM_PASSWORD = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match');

export const LOGIN = yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});

export const SIGN_UP = yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  confirmpassword: CONFIRM_PASSWORD,
  firstname: NAME_SCHEMA,
  lastname: NAME_SCHEMA,
  displayname: NAME_SCHEMA,
});
