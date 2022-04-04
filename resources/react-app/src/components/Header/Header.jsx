import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="image-container">
                <img
                    className="image"
                    src="https://unsplash.it/500/500"
                    alt=""
                />
            </div>
            <div className="info-container">
                <h2>Collection name</h2>
                <p>
                    Description. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Exercitationem, voluptatum aspernatur
                    quisquam nostrum, magni velit iusto magnam, error hic eaque
                    labore.
                </p>
            </div>
        </div>
    );
};

export default Header;
