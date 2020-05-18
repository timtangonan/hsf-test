import React from "react"

import CTAButtons from "./ctabuttons"

import "../styles/hero.css"

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="hero">
                    <div>
                        <p className="hero-intro">we are</p>
                        <h1 className="hero-brand">studio banx</h1>
                        <p>a creative web & print digital agency built on method and creative juices</p>
                    </div>
                    <CTAButtons />
                </div>
            </div>
        </section>
    )
}

export default Hero