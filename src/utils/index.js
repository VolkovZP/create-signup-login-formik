import * as yup from 'yup';

export const EMAIL_SCHEMA = yup
    .string()
    .email()
    .required();


export const PASSWORD_SCHEMA = yup
    .string()
    .matches(
        /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#?!@$^&*-])/,
        'Password must contain upper and lower latin characters, numbers and symbols'
    )
    .matches(/^.{8,}$/, 'Password must contain at least 8 characters')
    .required();

export const SIGN_IN_SCHEMA = yup.object({
    email: EMAIL_SCHEMA,
    password: PASSWORD_SCHEMA,
});