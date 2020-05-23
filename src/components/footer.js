import React from "react"

import "../styles/footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div>
                        <h3 className="footer-title">What makes us so awesome</h3>
                        <p className="footer-text">Nulla ut eleifend diam. In feugiat, lacus vitae porttitor lacinia, metus lectus interdum elit, at consectetur orci dolor et metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilla Curae. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                    </div>
                    <div className="footer-contact">
                        <h3 className="footer-title">Contact Us</h3>
                        <p className="footer-text">Nulla ut eleifend diam. In feugiat, lacus vitae porttitor lacinia, metus lectus interdum elit, at</p>
                    </div>
                </div>
                <div>
                    <h5 className="footer-text copyright">Copyright {new Date().getFullYear()} - By BlazRobar</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer