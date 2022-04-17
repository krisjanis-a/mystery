import React from "react";
import Header from "./components/Header/Header";
import SongList from "./components/SongList/SongList";

const Viewer = () => {
    return (
        <div className="viewer">
            <div className="header-songlist-container">
                <Header />
                <SongList />
            </div>
        </div>
    );
};

export default Viewer;
