import React from "react";
import "./Song.css";
import "../SongList/SongList.css";
import msToTime from "../../utils/msToTime";
import formatDate from "../../utils/formatDate";

const Song = ({ song, index }) => {
    const printSongInfo = () => {
        console.log(song);
    };

    return (
        <>
            <tr className="song_item">
                <td className="song_position">{index + 1}</td>
                <td className="title">
                    {
                        <a
                            href={
                                "artist/" +
                                song["track"]["artists"][0]["name"] +
                                "/song/" +
                                song["track"]["name"]
                            }
                        >
                            {song["track"]["name"]}
                        </a>
                    }
                </td>
                <td className="album">
                    {
                        <a
                            href={
                                "artist/" +
                                song["track"]["artists"][0]["name"] +
                                "/album/" +
                                song["track"]["album"]["name"]
                            }
                        >
                            {song["track"]["album"]["name"]}
                        </a>
                    }
                </td>
                <td className="artist">
                    {song["track"]["artists"].map((artist, index) => {
                        if (index === 0) {
                            return (
                                <span key={artist.name}>
                                    <a href={"artist/" + artist.name}>
                                        {artist.name}
                                    </a>
                                </span>
                            );
                        } else {
                            return (
                                <span key={artist.name}>
                                    <a href={"artist/" + artist.name}>
                                        , {artist.name}
                                    </a>
                                </span>
                            );
                        }
                    })}
                </td>
                <td className="date_added">{formatDate(song["added_at"])}</td>
                <td className="like_button">
                    <button>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </td>
                <td className="duration">
                    {msToTime(song["track"]["duration_ms"])}
                </td>
                <td className="options_button">
                    <button>
                        <i className="fa-solid fa-ellipsis"></i>
                    </button>
                </td>
                <td className="remove_button">
                    <button>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </td>
                <td className="drag_button">
                    <button onClick={() => printSongInfo()}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Song;
