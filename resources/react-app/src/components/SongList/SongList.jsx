import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Song from "../Song/Song";
import "./SongList.css";

const SongList = () => {
    const [songs, setSongs] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    const { currentPlaylistId } = useSelector((state) => state.CurrentPlaylist);

    const fetchPlaylist = (currentPlaylistId) => {
        fetch("/collections/playlist/" + currentPlaylistId)
            .then((response) => response.json())
            .then((data) => setPlaylist(data));
    };

    useEffect(() => {
        if (currentPlaylistId !== null) {
            fetchPlaylist(currentPlaylistId);
        }
    }, [currentPlaylistId]);

    useEffect(() => {
        if (playlist.length !== 0) {
            setSongs(playlist["tracks"]["items"]);
        }
    }, [playlist]);

    return (
        <div className="song-list">
            <div className="song-list-table-wrapper">
                <div className="song-list-table-container">
                    <table className="song-list-table">
                        <thead className="table-head">
                            <tr>
                                <th className="song-position">#</th>
                                <th className="title">Title</th>
                                <th className="album">Album</th>
                                <th className="artist">Artist</th>
                                <th className="date-added">Date Added</th>
                                <th className="like-button"></th>
                                <th className="duration">Duration</th>
                                <th className="options-button"></th>
                                <th className="remove-button"></th>
                                <th className="drag-button"></th>
                            </tr>
                        </thead>

                        <tbody className="table-body">
                            {songs.length !== 0 && (
                                <>
                                    {songs.map((song, index) => {
                                        return (
                                            <Song
                                                song={song}
                                                index={index}
                                                key={song["track"]["id"]}
                                            />
                                        );
                                    })}
                                </>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="songs-empty-alert">
                {songs.length === 0 && <h3>Nothing to display</h3>}
            </div>
        </div>
    );
};

export default SongList;
