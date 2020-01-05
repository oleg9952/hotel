import React, { useState } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleAdmin } from '../../store/actions/adminActions'
import style from './Admin.module.css'

import UserInfo from './UserInfo/UserInfo'
import Dashboard from './Dashboard/Dashboard'

const Admin = () => {
    const [ toggleNav, setToggleNav ] = useState(false)
    const dispatch = useDispatch()

    // ---- NAV MARKERS ----
    const [ activeNavItem, setActiveNavItem ] = useState('info')

    const handleLinkMarker = e => {
        switch(e.target.innerText) {
            case 'User Info':
                setActiveNavItem('info')
                return
            case 'Dashboard':
                setActiveNavItem('dash')
                return
            case 'Favorites':
                setActiveNavItem('fav')
                return
            default:
                setActiveNavItem('info')
                return
        }
    }

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
                    <div className={style.nav_header}>
                        <div className={style.profile_img} />
                        <p className={style.user_name}>Alex Brand</p>
                        <p className={style.user_email}>alex.brand@gmail.com</p>
                    </div>
                    {/* ------- USER NAV ------- */}
                    <ul className={style.nav_holder}>
                        <li onClick={handleLinkMarker}>
                            <i className="fas fa-hotel"></i>
                            <Link to="/" onClick={() => dispatch(toggleAdmin())}>
                                Home
                            </Link>
                        </li>
                        <li onClick={handleLinkMarker}
                            className={`${activeNavItem === 'info' ? style.active : ''}`}
                        >
                            <i className="fas fa-user"></i>
                            <Link to="/admin/user">
                                User Info
                            </Link>
                        </li>
                        <li onClick={handleLinkMarker}
                            className={`${activeNavItem === 'dash' ? style.active : ''}`}
                        >
                            <i className="fas fa-tachometer-alt"></i>
                            <Link to="/admin/dashboard">
                                Dashboard
                            </Link>
                        </li>
                        <li onClick={handleLinkMarker}
                            className={`${activeNavItem === 'fav' ? style.active : ''}`}
                        >
                            <i className="far fa-heart"></i>
                            <Link to="/admin/favorites">
                                Favorites
                            </Link>
                        </li>
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
                        <Route exact path="/admin/user" component={UserInfo} />
                        <Route exact path="/admin/dashboard" component={Dashboard} />
                        <Route exact path="/admin/favorites">
                            <h1>Favorites</h1>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Admin
