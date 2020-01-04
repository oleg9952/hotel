import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleAdmin } from '../../store/actions/adminActions'
import style from './Admin.module.css'

const Admin = () => {
    const [ toggleNav, setToggleNav ] = useState(false)
    const dispatch = useDispatch()

    const handleNavToggle = () => setToggleNav(!toggleNav)

    return (
        <div className={style.admin}>
            <div className={style.admin_header}>
                <div 
                    className={`${style.nav_toggle} ${toggleNav ? style.active : ''}`}
                    onClick={handleNavToggle}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={style.log_out}>
                    <i className="fas fa-power-off"></i>
                </div>
            </div>
            <div className={`${style.admin_body} ${toggleNav ? style.active : ''}`}>
                <div className={style.nav}>
                    {/* ------- USER NAV ------- */}
                    <ul className={style.user_nav}>
                        <li>
                            <Link to="/" onClick={() => dispatch(toggleAdmin())}>
                                Home
                            </Link>
                        </li>
                        <li>Test</li>
                    </ul>
                    {/* ------- ADMIN NAV ------- */}
                    {/* <ul className={style.admin_nav}>
                        <li>
                            <Link to="/" onClick={() => dispatch(toggleAdmin())}>
                                Home
                            </Link>
                        </li>
                        <li>Test</li>
                    </ul> */}
                </div>
                <div className={style.content}>
                    <Switch>
                        <Route exact path="/admin/home">
                            <h1>home</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Admin
