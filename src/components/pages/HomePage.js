import React from 'react'
import { Link } from 'react-router-dom'

import BackgroundImage from '../../assets/images/bg.jpg'

export default function HomePage() {
    return (
        <header style={ HeaderStyle }>

        <div className="text-center">
            <h1 className="main-title text-center">Welcome to</h1>
            <p className="main-para text-center">First React Project</p>

            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
        </header>

    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}