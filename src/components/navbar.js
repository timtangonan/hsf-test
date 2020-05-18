import React from "react"

import "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            <navbar className="navbar">
                <h1 className="company-logo"><span>b</span>anx</h1>
                <ul className="nav-menu">
                    <li className="nav-item">design</li>
                    <li className="nav-item">web design</li>
                    <li className="nav-item">graphic design</li>
                    <li className="nav-item">print design</li>
                    <li className="nav-item">video design</li>
                </ul>
            </navbar>
        </div>
    )
}

export default Navbar