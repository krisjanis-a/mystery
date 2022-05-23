import React from "react";
import "./Song.css";
import "../SongList/SongList.css";
import msToTime from "../../utils/msToTime";
import formatDate from "../../utils/formatDate";
import { useSelector } from "react-redux";

const Song = ({ song, index }) => {
    const { displayCollectionsMode, displayPlaylistsMode } = useSelector(
        (state) => state.DisplayMode
    );
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
                                song["song_spotify_data"]["artists"][0][
                                    "name"
                                ] +
                                "/song/" +
                                song["song_spotify_data"]["name"]
                            }
                        >
                            {song["song_spotify_data"]["name"]}
                        </a>
                    }
                </td>
                <td className="album">
                    {
                        <a
                            href={
                                "artist/" +
                                song["song_spotify_data"]["artists"][0][
                                    "name"
                                ] +
                                "/album/" +
                                song["song_spotify_data"]["album"]["name"]
                            }
                        >
                            {song["song_spotify_data"]["album"]["name"]}
                        </a>
                    }
                </td>
                <td className="artist">
                    {song["song_spotify_data"]["artists"].map(
                        (artist, index) => {
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
                        }
                    )}
                </td>
                {displayPlaylistsMode && (
                    <td className="date_added">
                        {formatDate(song["added_at"])}
                    </td>
                )}
                {displayCollectionsMode && (
                    <td className="date_added">
                        {formatDate(song["created_at"])}
                    </td>
                )}
                <td className="like_button">
                    <button>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </td>
                <td className="duration">
                    {msToTime(song["song_spotify_data"]["duration_ms"])}
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
