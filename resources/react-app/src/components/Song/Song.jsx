import React from "react";
import "./Song.css";
import "../SongList/SongList.css";

const Song = ({ index }) => {
    return (
        <>
            <tr className="song-item">
                <td className="song-position">{index}</td>
                <td className="title">Song One</td>
                <td className="album">Album One</td>
                <td className="artist">Artist Name</td>
                <td className="date-added">Nov 24, 2022</td>
                <td className="like-button">
                    <button>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </td>
                <td className="duration">4:20</td>
                <td className="options-button">
                    <button>
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                </td>
                <td className="remove-button">
                    <button>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </td>
                <td className="drag-button">
                    <button>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Song;
