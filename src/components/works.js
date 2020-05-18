import React from "react"

import CTAButtons from "./ctabuttons"

import desireImage from "../assets/1.png"
import aspirationImage from "../assets/2.png"
import designImage from "../assets/3.png"
import lustImage from "../assets/4.png"

const Works = () => {
    return (
        <section>
            <div>
                <p>check out</p>
                <h2>our worx</h2>
            </div>
            <div>
                <div className="work-category">
                    <img src={desireImage}/>
                    <h3>desire</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                </div>
                <div className="work-category">
                    <img src={aspirationImage}/>
                    <h3>aspiration</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                </div>
                <div className="work-category">
                    <img src={designImage}/>
                    <h3>design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                </div>
                <div className="work-category">
                    <img src={lustImage}/>
                    <h3>Lust</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                </div>
            </div>
            <CTAButtons />
        </section>
    )
}

export default Works