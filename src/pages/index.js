import React from "react"

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Works from "../components/works"
import About from "../components/about"
import Footer from "../components/footer"

import "../styles/index.css"

export default () => {
    return(
        <div className="main">

            <div className="nav-hero">
                <Navbar />
                <Hero />
            </div>
            <Works />
            <About />
            <Footer />
        </div>
    )
}