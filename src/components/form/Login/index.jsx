import React from 'react'
import style from './Login.module.sass'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { LOGIN } from '../../../utils'
import cx from 'classnames'
import Button from '../../Button'

const initialValues = {
    toggle: false,
    email: '',
    password: '',
}

export default function Login() {
    return (
        <>
            <Formik initialValues={initialValues} validationSchema={LOGIN}>
                {formikProps => {
                    const { errors, touched } = formikProps;
                    const validatorEmail = cx(style.loginInput, {
                        [style.isInvalids]: errors.email && touched.email,
                        [style.isValids]: !errors.email && touched.email,
                    })
                    const validatorPassword = cx(style.loginInput, {
                        [style.isInvalids]: errors.password && touched.password,
                        [style.isValids]: !errors.password && touched.password,
                    })

                    return (
                        <Form
                            className={style.loginForm}>
                            <Field
                                className={validatorEmail}
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
                                className={validatorPassword} />
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
                            <Button>Login</Button>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}
