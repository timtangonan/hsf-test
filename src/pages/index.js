import React from "react"

import Navbar from "../components/navbar"
import Hero from "../components/hero"
import Works from "../components/works"
import About from "../components/about"
import Footer from "../components/footer"

export default () => {
    return(
        <div className="main">
            <div className="container">
                <Navbar />
                <Hero />
                <Works />
                <About />
                <Footer />
            </div>
        </div>
    )
}