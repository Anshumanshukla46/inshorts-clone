import React from 'react'
import "./Navbar.css"
import HamburgerDrawer from "./HamburgerDrawer"


function Navbar({ setCategory }) {
    return (
        <div className='nav'>

            <div className="icon">
                <HamburgerDrawer setCategory={setCategory} />
            </div>

            <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="inshorts-logo" height="80%" />


        </div>
    )
}

export default Navbar
