import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Header.css";

const Header = () => {
    const [playlist, setPlaylist] = useState([]);

    const { currentPlaylist } = useSelector((state) => state.CurrentPlaylist);

    const fetchPlaylist = (currentPlaylist) => {
        fetch("/collections/playlist/" + currentPlaylist)
            .then((response) => response.json())
            .then((data) => setPlaylist(data));
    };

    const showInfo = () => {
        console.log(playlist);
    };

    useEffect(() => {
        if (currentPlaylist !== null) {
            fetchPlaylist(currentPlaylist);
        }
    }, [currentPlaylist]);

    return (
        <div className="header">
            {playlist.length !== 0 ? (
                <>
                    <div className="image-container">
                        <img
                            className="image"
                            src={playlist["images"][0]["url"]}
                            alt=""
                        />
                    </div>
                    <div className="info-container">
                        <h2>{playlist["name"]}</h2>
                        <h4>
                            Created by
                            {playlist["owner"]["display_name"]
                                ? playlist["owner"]["display_name"]
                                : playlist["owner"]["id"]}
                        </h4>
                        <p>
                            {playlist["description"].length !== 0
                                ? playlist["description"]
                                : "No description available"}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <h3>Select a playlist or collection</h3>
                </>
            )}
            <button onClick={() => showInfo()}>show info</button>
        </div>
    );
};

export default Header;
