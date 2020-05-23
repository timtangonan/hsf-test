import React from "react"

import "../styles/about.css"

const About = () => {
    return (
        <div className="container">
            <div className="about">
                <h3 className="about-text">What makes us so awesome</h3>
                <div className="awesome-list">
                    <div>
                        <p className="about-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                        <button>View More</button>
                    </div>
                    <div>
                        <p className="about-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                        <button>View More</button>
                    </div>
                    <div>
                        <p className="about-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eros ligula, lacinia quis euismod in, dignissim at neque. Aliquam quis consectetur magna.</p>
                        <button>View More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About