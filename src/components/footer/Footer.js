import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Inshorts clone made by {" "}
                <a href="https://www.linkedin.com/in/anshuman-shukla-0a0a591ba/" target="__blank">
                    Anshuman Shukla
                </a>
            </span>

            <hr style={{ width: "90%" }} />

            <div className="iconContainer">

                <a href="https://www.linkedin.com/in/anshuman-shukla-0a0a591ba/" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>

                <a href="https://github.com/Anshumanshukla46" target="__blank">
                    <i class="fa-brands fa-github"></i>
                </a>

            </div>
        </div>
    );
};

export default Footer;