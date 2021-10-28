import React from 'react';
import style from './Button.module.sass';
export default function Button ({ children }) {
  return (
    <button type='submit' className={style.submitBtn}>
      {children}
    </button>
  );
}
