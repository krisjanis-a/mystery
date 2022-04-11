import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Song from "../Song/Song";
import "./SongList.css";

const SongList = () => {
    const [songs, setSongs] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    const { currentPlaylist } = useSelector((state) => state.CurrentPlaylist);

    const fetchPlaylist = (currentPlaylist) => {
        fetch("/collections/playlist/" + currentPlaylist)
            .then((response) => response.json())
            .then((data) => setPlaylist(data));
    };

    useEffect(() => {
        if (currentPlaylist !== null) {
            fetchPlaylist(currentPlaylist);
        }
    }, [currentPlaylist]);

    useEffect(() => {
        if (playlist.length !== 0) {
            setSongs(playlist["tracks"]["items"]);
        }
    }, [playlist]);

    // useEffect(() => {
    //     console.log(songs);
    // }, [songs]);

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
