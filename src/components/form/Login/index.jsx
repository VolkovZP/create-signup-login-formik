import React from 'react'
import style from './Login.module.sass'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SIGN_IN_SCHEMA } from '../../../utils'
import cx from 'classnames'

const initialValues = {
    toggle: false,
    email: '',
    password: '',
}

export default function Login() {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <h1 className={style.title}>LOGIN TO YOUR ACCOUNT</h1>
                <h3 className={style.subtitle}></h3>
                <Formik initialValues={initialValues} validationSchema={SIGN_IN_SCHEMA}>
                    {formikProps => {
                        const { errors, touched } = formikProps;
                        const validator = cx(style.loginInput, {
                            [style.isInvalids]: errors.email && touched.email,
                            [style.isValids]: !errors.email && touched.email,
                        })
                        return (
                            <Form
                                className={style.loginForm}>
                                <Field
                                    className={validator}
                                    name='email'
                                    placeholder='Email address' />
                                <ErrorMessage
                                    className={style.inpError}
                                    name='email'
                                    component='span' />
                                <Field
                                    type='password'
                                    name='password'
                                    placeholder='password'
                                    className={validator} />
                                <ErrorMessage
                                    className={style.inpError}
                                    name='password'
                                    component='span' />
                                <div
                                    className={style.checkContainer}>
                                    <div className={style.checkWrapper}>
                                        <Field
                                            type="checkbox"
                                            name="toggle" />
                                        <label htmlFor="toggle">Remember me</label>
                                    </div>
                                    <a href="#">
                                        <span>Forgot Password</span>
                                    </a>
                                </div>
                                <button
                                    className={style.submitBtn}
                                    type='submit'>
                                    login
                                </button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    )
}
