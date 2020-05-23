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
                    <p className="works-intro-text">check out</p>
                    <h2>our worx</h2>
                </div>
                <div className="work-list">
                    <div className="work-category">
                        <div className="img-container">
                            <img src={desireImage} alt="desire"/>
                        </div>
                        <h3>Desire</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                    </div>
                    <div className="work-category">
                        <div className="img-container">
                            <img src={aspirationImage} alt="aspiration"/>
                        </div>
                        <h3>Aspiration</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                    </div>
                    <div className="work-category">
                        <div className="img-container">
                            <img src={designImage} alt="design"/>
                        </div>
                        <h3>Design</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                    </div>
                    <div className="work-category">
                        <div className="img-container">
                            <img src={lustImage} alt="lust"/>
                        </div>
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