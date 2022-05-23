import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreatingCollection } from "../../store/CreatingCollection/CreatingCollection.action";
import { showCreator } from "../../store/Creator/Creator.action";
import { addSongsNewCollection } from "../../store/NewCollection/NewCollection.action";
import "./Header.css";

const Header = () => {
    const { displayCollectionsMode, displayPlaylistsMode } = useSelector(
        (state) => state.DisplayMode
    );

    return (
        <div className="header">
            {displayPlaylistsMode && <HeaderPlaylist />}
            {displayCollectionsMode && <HeaderCollection />}
        </div>
    );
};

export default Header;

const HeaderPlaylist = () => {
    const dispatch = useDispatch();
    const { currentPlaylist } = useSelector((state) => state.CurrentPlaylist);

    const currentTracks = useSelector(
        (state) => state.CurrentPlaylist.currentPlaylist.tracks
    );

    const handleCreateCollection = () => {
        dispatch(setCreatingCollection(true));
        dispatch(showCreator());
        dispatch(addSongsNewCollection(currentTracks.items));
    };

    return (
        <div className="header_playlist">
            {Object.keys(currentPlaylist).length !== 0 ? (
                <>
                    <div className="header_left">
                        <div className="image_container">
                            <img
                                className="image"
                                src={currentPlaylist["images"][0]["url"]}
                                alt=""
                            />
                        </div>
                        <div className="info_container">
                            <h2>{currentPlaylist["name"]}</h2>
                            <h4>
                                Created by&nbsp;
                                {currentPlaylist["owner"]["display_name"]
                                    ? currentPlaylist["owner"]["display_name"]
                                    : currentPlaylist["owner"]["id"]}
                            </h4>
                            <p>
                                {currentPlaylist["description"].length !== 0
                                    ? currentPlaylist["description"]
                                    : "No description available"}
                            </p>
                        </div>
                    </div>
                    <div className="header_right">
                        <div className="buttons_container">
                            <button
                                className="button_main"
                                onClick={() => handleCreateCollection()}
                            >
                                Create Collection
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <Alert text={"Select a playlist or collection"} />
            )}
        </div>
    );
};

const HeaderCollection = () => {
    const { currentCollection } = useSelector(
        (state) => state.CurrentCollection
    );

    console.log(currentCollection);

    return (
        <div className="header_collection">
            {Object.keys(currentCollection).length !== 0 ? (
                <>
                    <div className="image-container">
                        <img
                            className="image"
                            // src={currentCollection["image"]}
                            alt=""
                        />
                    </div>
                    <div className="info-container">
                        <h2>{currentCollection.name}</h2>
                        <h4>
                            Created by&nbsp;
                            {currentCollection["creator_username"]}
                        </h4>
                        <p>
                            {/* {currentCollection["description"].length !== 0
                                ? currentCollection["description"]
                                : "No description available"} */}
                        </p>
                    </div>
                </>
            ) : (
                <Alert text={"Select a playlist or collection"} />
            )}
        </div>
    );
};

const Alert = ({ text }) => {
    return (
        <>
            <h4>{text}</h4>
        </>
    );
};
