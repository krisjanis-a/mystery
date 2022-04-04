import React from "react";
import Song from "../Song/Song";
import "./SongList.css";

const SongList = () => {
    // const songs = Array.from({ length: 5 }, (v, k) => k + 1);
    const songs = Array.from({ length: 50 }, (v, k) => k + 1);

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

                        {/* 
                            Loop through all songs
                        */}
                        <tbody className="table-body">
                            {songs.map((song) => {
                                return <Song index={song} key={song} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SongList;
