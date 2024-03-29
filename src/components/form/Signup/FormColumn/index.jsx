import React, { useContext } from 'react';
import { Field, ErrorMessage } from 'formik';
import style from './FormColumn.module.sass';
import cx from 'classnames';

function FormColumn ({ name, type, placeholder }) {
  return (
    <div className={style.flexColumn}>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={style.loginInput}
      />
      <ErrorMessage className={style.error} name={name} component='span' />
    </div>
  );
}

export default FormColumn;
