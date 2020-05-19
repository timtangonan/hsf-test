import React from "react"

import CTAButtons from "./ctabuttons"

import "../styles/hero.css"

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="hero">
                    <div className="hero-border">
                        <p className="hero-intro">we are</p>
                        <h1 className="hero-brand">studio banx</h1>
                        <p className="hero-text">a creative web & print digital agency built on method and creative juices</p>
                    </div>
                    <div className="hero-btn">
                        <CTAButtons />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero