import React from "react"

import CTAButtons from "./ctabuttons"

import desireImage from "../assets/1.png"
import aspirationImage from "../assets/2.png"
import designImage from "../assets/3.png"
import lustImage from "../assets/4.png"

import "../styles/works.css"

const Works = () => {
    return (
        <section className="works-main">
            <div className="container">
                <div className="works-intro">
                    <p>check out</p>
                    <h2>our worx</h2>
                </div>
                <div className="work-list">
                    <div className="work-category">
                        <img src={desireImage} alt="desire"/>
                        <h3>desire</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                    </div>
                    <div className="work-category">
                        <img src={aspirationImage} alt="aspiration"/>
                        <h3>aspiration</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                    </div>
                    <div className="work-category">
                        <img src={designImage} alt="design"/>
                        <h3>design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                    </div>
                    <div className="work-category">
                        <img src={lustImage} alt="lust"/>
                        <h3>Lust</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                    </div>
                </div>
                <CTAButtons />
            </div>
        </section>
    )
}

export default Works