import React from 'react'
import style from './Header.module.sass'
export default function Header() {
    return (
        <div className={style.container}>
            <div className={style.containerImg}>
                <a className={style.headerLink} href="https://formik.org/docs/api/field"><img src='https://www.squadhelp.com/img/logo.png' alt="" /></a>
            </div>
            <div className={style.containerBtn}>
                <button className={style.btn}>Signup</button>
            </div>
        </div>

    )
}
