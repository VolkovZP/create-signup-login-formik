import React from 'react';
import style from './ContainerForm.module.sass';
export default function ContainerForm ({ children, titles, subtitles }) {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <h1 className={style.title}>{titles}</h1>
        <h3 className={style.subtitle}>{subtitles}</h3>
        {children}
      </div>
    </div>
  );
}
