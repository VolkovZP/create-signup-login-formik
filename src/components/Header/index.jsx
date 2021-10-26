import React, { useState } from 'react'
import style from './Header.module.sass'
import { Link } from "react-router-dom"
export default function Header() {
    const [swithing, setSwithing] = useState(false)

    const handleBtn = () => {
        setSwithing(!swithing)
    }
    return (
        <div className={style.container}>
            <div className={style.containerImg}>
                <a className={style.headerLink} href="/"><img src='https://www.squadhelp.com/img/logo.png' alt="" /></a>
            </div>
            <div className={style.containerLink} onClick={handleBtn}>
                {swithing ? <Link to="/login" className={style.link}>Login</Link> : <Link to="/signup" className={style.link}>SignUp</Link >}
            </div>
        </div>

    )
}
