import React from 'react'
import FormColumn from './FormColumn'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SIGN_UP } from '../../../utils'
import cx from 'classnames'
import style from './Signup.module.sass'


const initialValues = {
    firstname: '',
    lastname: '',
    displayname: '',
    email: '',
    password: '',
    confirmpassword: '',
}

export default function Signup() {
    return (
        <Formik initialValues={initialValues} validationSchema={SIGN_UP}>
            {formikProps => {
                const { errors, touched } = formikProps;
                return (
                    <Form
                        className={style.loginForm}>
                        <div className={style.formRow}>
                            <FormColumn name="firstname"
                                type="text"
                                placeholder="First name" />
                            <FormColumn name="lastname"
                                type="text"
                                placeholder="Last name" />
                        </div>
                        <div className={style.formRow}>
                            <FormColumn name="displayname"
                                type="text"
                                placeholder="Display name" />
                            <FormColumn name="email"
                                type="text"
                                placeholder="Email" />
                        </div>
                        <div className={style.formRow}>
                            <FormColumn name="password"
                                type="password"
                                placeholder="Password" />
                            <FormColumn name="confirmpassword"
                                type="password"
                                placeholder="Confirm password" />
                        </div>
                    </Form>
                )
            }}
        </Formik>
    )
}
