import React, { useContext } from 'react';
import FormColumn from './FormColumn';
import { Formik, Form, Field } from 'formik';
import { SIGN_UP } from 'utils';
import style from './Signup.module.sass';
import Button from 'components/Button';

const initialValues = {
  firstname: '',
  lastname: '',
  displayname: '',
  email: '',
  password: '',
  confirmpassword: '',
};

export default function Signup () {
  return (
    <Formik initialValues={initialValues} validationSchema={SIGN_UP}>
      {formikProps => {
        return (
          <Form className={style.loginForm}>
            <div className={style.formRow}>
              <FormColumn
                name='firstname'
                type='text'
                placeholder='First name'
              />
              <FormColumn name='lastname' type='text' placeholder='Last name' />
            </div>
            <div className={style.formRow}>
              <FormColumn
                name='displayname'
                type='text'
                placeholder='Display name'
              />
              <FormColumn name='email' type='text' placeholder='Email' />
            </div>
            <div className={style.formRow}>
              <FormColumn
                name='password'
                type='password'
                placeholder='Password'
              />
              <FormColumn
                name='confirmpassword'
                type='password'
                placeholder='Confirm password'
              />
            </div>
            <div className={style.formRow}>
              <div
                role='group'
                aria-labelledby='my-radio-group'
                className={style.fieldContainer}
              >
                <label>
                  <h2>Join As a Buyer</h2>
                  <span>
                    I am looking for a Name, Logo or Tagline for my business,
                    brand or product.
                  </span>
                </label>
                <Field
                  type='radio'
                  name='picked'
                  value='buyer'
                  className={style.inp}
                />
              </div>
            </div>
            <div className={style.formRow}>
              <div
                role='group'
                aria-labelledby='my-radio-group'
                className={style.fieldContainer}
              >
                <label>
                  <h2>Join As a Creative or Marketplace Seller</h2>
                  <span>
                    I plan to submit name ideas, Logo designs or sell names in
                    Domain Marketplace.
                  </span>
                </label>
                <Field
                  type='radio'
                  name='picked'
                  value='seller'
                  className={style.inp}
                />
              </div>
            </div>
            <div className={style.formRow}>
              <Button>Create account</Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
