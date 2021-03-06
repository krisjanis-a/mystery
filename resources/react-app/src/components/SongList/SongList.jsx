import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Song from "../Song/Song";
import "./SongList.css";

const SongList = () => {
    const [songs, setSongs] = useState([]);

    const { currentPlaylist } = useSelector((state) => state.CurrentPlaylist);
    const { currentCollection } = useSelector(
        (state) => state.CurrentCollection
    );
    const { displayCollectionsMode, displayPlaylistsMode } = useSelector(
        (state) => state.DisplayMode
    );

    const { loadingViewer } = useSelector((state) => state.Loading);

    useEffect(() => {
        if (displayPlaylistsMode) {
            if (Object.keys(currentPlaylist).length !== 0) {
                setSongs(currentPlaylist["songs"]);
            } else setSongs([]);
        }

        if (displayCollectionsMode) {
            if (Object.keys(currentCollection).length !== 0) {
                setSongs(currentCollection["songs"]);
            } else setSongs([]);
        }
    }, [
        currentPlaylist,
        currentCollection,
        displayPlaylistsMode,
        displayCollectionsMode,
    ]);

    return (
        <div className="song_list">
            {!loadingViewer && (
                <>
                    {songs.length !== 0 && <OptionsBar />}
                    <div className="song_list_table_wrapper">
                        <div className="song_list_table_container">
                            <table className="song_list_table">
                                <thead className="table_head">
                                    <tr>
                                        <th className="song_position">#</th>
                                        <th className="title">Title</th>
                                        <th className="album">Album</th>
                                        <th className="artist">Artist</th>
                                        <th className="date_added">
                                            Date Added
                                        </th>
                                        <th className="like_button"></th>
                                        <th className="duration">Duration</th>
                                        <th className="options_button"></th>
                                        <th className="remove_button"></th>
                                        <th className="drag_button"></th>
                                    </tr>
                                </thead>

                                <tbody className="table_body">
                                    {songs.length !== 0 && (
                                        <>
                                            {songs.map((song, index) => {
                                                return (
                                                    <Song
                                                        song={song}
                                                        index={index}
                                                        key={
                                                            song[
                                                                "song_spotify_data"
                                                            ]["id"]
                                                        }
                                                    />
                                                );
                                            })}
                                        </>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="songs_empty_alert">
                        {songs.length === 0 && <h3>Nothing to display</h3>}
                    </div>
                </>
            )}
        </div>
    );
};

export default SongList;

const OptionsBar = () => {
    return (
        <div className="options_bar">
            <div className="current_filters"></div>
            <button className="button_main">
                Filter <i className="fa-solid fa-caret-down"></i>
            </button>
        </div>
    );
};
