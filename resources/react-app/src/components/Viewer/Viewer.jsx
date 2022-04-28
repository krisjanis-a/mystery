import React, { useEffect, useState } from "react";
import "./Viewer.css";
import Header from "../Header/Header";
import SongList from "../SongList/SongList";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist } from "../../store/CurrentPlaylist/CurrentPlaylist.action";

const Viewer = () => {
    const dispatch = useDispatch();
    const { currentPlaylistId } = useSelector((state) => state.CurrentPlaylist);

    useEffect(() => {
        const fetchPlaylist = (currentPlaylistId) => {
            fetch("/collections/playlist/" + currentPlaylistId)
                .then((response) => response.json())
                .then((data) => dispatch(setCurrentPlaylist(data)));
        };

        if (currentPlaylistId !== null) {
            fetchPlaylist(currentPlaylistId);
        }
    }, [currentPlaylistId, dispatch]);

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
