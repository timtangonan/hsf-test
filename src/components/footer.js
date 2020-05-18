import React from "react"

const Footer = () => {
    return (
        <footer>
            <div>
                <div>
                    <h3>What makes us so awesome</h3>
                    <p>Nulla ut eleifend diam. In feugiat, lacus vitae porttitor lacinia, metus lectus interdum elit, at consectetur orci dolor et metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilla Curae. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>Nulla ut eleifend diam. In feugiat, lacus vitae porttitor lacinia, metus lectus interdum elit, at</p>
                </div>
            </div>
            <div>
                <h5>Copyright {new Date().getFullYear()} - By BlazRobar</h5>
            </div>
        </footer>
    )
}

export default Footer