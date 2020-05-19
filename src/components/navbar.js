import React from "react"

import "../styles/navbar.css"

const Navbar = () => {
    return (
        <div className="container">
            <navbar className="navbar">
                <h1 className="company-logo"><span>b</span>anx</h1>
                <ul className="nav-menu">
                    <li className="nav-item"><a href="#">design</a></li>
                    <li className="nav-item"><a href="#">web design</a></li>
                    <li className="nav-item"><a href="#">graphic design</a></li>
                    <li className="nav-item"><a href="#">print design</a></li>
                    <li className="nav-item"><a href="#">video design</a></li>
                </ul>
            </navbar>
        </div>
    )
}

export default Navbar