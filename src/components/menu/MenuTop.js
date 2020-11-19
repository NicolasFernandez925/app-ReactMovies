import React from 'react'
import {Menu} from 'antd'
import { Link } from 'react-router-dom'

import './menu.scss'

export const MenuTop = () => {
    return (

        <div className="menu-top">
            <div className="menu-top__logo">
                <Link to="/">
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" 
                        alt="icon-react"
                        className="header__icon-img"
                    />   
                </Link>
            </div>
            <Menu
                theme="dark"
                mode = "horizontal"
                overflowedIndicator = {<i className="fas fa-bars"></i>}
                style ={{lineHeigth : "64px", marginLeft: "20px"}}
            >
                <Menu.Item key="1">
                        <Link to = "/">Inicio</Link>
                </Menu.Item>
                <Menu.Item key="2">
                        <Link to = "/new-movies">Ultimos lanzamientos</Link>
                </Menu.Item>
                <Menu.Item key="3">
                        <Link to = "/popular">Populares</Link> 
                </Menu.Item>
                <Menu.Item key="4">
                        <Link to = "/search">Buscador</Link>
                </Menu.Item>

            </Menu>

        </div>
    )
}
