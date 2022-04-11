import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./PlaylistsList.css";
import { setCurrentPlaylist } from "../../store/CurrentPlaylist/CurrentPlaylist.action";

const PlaylistsList = () => {
    const dispatch = useDispatch();
    const [playlists, setPlaylists] = useState([]);

    const fetchPlaylists = () => {
        // const playlists = fetch("/collections/playlists")
        fetch("/collections/playlists")
            .then((response) => response.json())
            .then((data) => setPlaylists(data));

        // return playlists;
    };

    useEffect(() => {
        fetchPlaylists();
    }, []);

    const handleSetCurrentPlaylist = (playlistId) => {
        dispatch(setCurrentPlaylist(playlistId));
    };

    // useEffect(() => {
    //     console.log(playlists);
    // }, [playlists]);

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
                                        handleSetCurrentPlaylist(playlist["id"])
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
