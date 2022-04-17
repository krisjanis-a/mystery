import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./PlaylistsList.css";
import { setCurrentPlaylistId } from "../../store/CurrentPlaylist/CurrentPlaylist.action";
import { setPlaylists as savePlaylistsToRedux } from "../../store/Playlists/Playlists.action";
import { setDisplayPlaylistsMode } from "../../store/DisplayMode/DisplayMode.action";

const PlaylistsList = () => {
    const dispatch = useDispatch();
    const savedPlaylists = useSelector((state) => state.Playlists.playlists);
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = () => {
            fetch("/collections/playlists")
                .then((response) => response.json())
                .then((data) => {
                    setPlaylists(data);
                    saveFetchedPlaylists(data);
                });
        };

        const saveFetchedPlaylists = (data) => {
            dispatch(savePlaylistsToRedux(data));
        };

        if (savedPlaylists !== null) {
            // console.log("Loading playlists from redux");
            setPlaylists(savedPlaylists);
        }
        if (savedPlaylists === null) {
            // console.log("Fetching playlists from db");
            fetchPlaylists();
        }
    }, [savedPlaylists, dispatch]);

    const handleClickOnPlaylist = (playlistId) => {
        dispatch(setCurrentPlaylistId(playlistId));
        dispatch(setDisplayPlaylistsMode());
    };

    return (
        <div className="playlists-list">
            <h3>Your playlists</h3>
            <div className="list-items-container">
                <ul>
                    {playlists.length !== 0 ? (
                        playlists.map((playlist) => {
                            return (
                                <li
                                    className="list-item"
                                    key={playlist["name"]}
                                    onClick={() =>
                                        handleClickOnPlaylist(playlist["id"])
                                    }
                                >
                                    {playlist["name"]}
                                </li>
                            );
                        })
                    ) : (
                        <p>No playlists to display</p>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default PlaylistsList;
