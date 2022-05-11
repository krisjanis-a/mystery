import React, { useEffect, useState } from "react";
import "./Viewer.css";
import Header from "../Header/Header";
import SongList from "../SongList/SongList";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist } from "../../store/CurrentPlaylist/CurrentPlaylist.action";
import { setCurrentCollection } from "../../store/CurrentCollection/CurrentCollection.action";

const Viewer = () => {
    const dispatch = useDispatch();
    const { currentPlaylistId } = useSelector((state) => state.CurrentPlaylist);
    const { currentCollectionId } = useSelector(
        (state) => state.CurrentCollection
    );

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

    useEffect(() => {
        const fetchCollection = (currentCollectionId) => {
            fetch("/collections/collection/fetch/" + currentCollectionId)
                .then((response) => response.json())
                .then((data) => dispatch(setCurrentCollection(data)));
        };

        if (currentCollectionId !== null) {
            fetchCollection(currentCollectionId);
        }
    }, [currentCollectionId, dispatch]);

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
