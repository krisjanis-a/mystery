import React from "react";
import "./Song.css";
import "../SongList/SongList.css";

const Song = ({ song, index }) => {
    const printSongInfo = () => {
        console.log(song);
    };

    const formatDate = (unformattedDate) => {
        const formatter = new Intl.DateTimeFormat("en-us", {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "GMT",
        });

        const date = new Date(unformattedDate);

        const formattedDate = formatter.format(date);

        return formattedDate;
    };

    const msToTime = (t) => {
        const ms = t % 1000;
        t = (t - ms) / 1000;
        const secs = t % 60;
        t = (t - secs) / 60;
        const mins = t % 60;
        const hrs = (t - mins) / 60;

        let formattedSecs = secs;

        if (secs.toString().length === 1) {
            formattedSecs = "0" + secs;
        }

        const duration = hrs
            ? hrs + ":" + mins + ":" + formattedSecs
            : mins
            ? mins + ":" + formattedSecs
            : "0:" + formattedSecs;

        return duration;
    };

    return (
        <>
            <tr className="song-item">
                <td className="song-position">{index + 1}</td>
                <td className="title">{song["track"]["name"]}</td>
                <td className="album">{song["track"]["album"]["name"]}</td>
                <td className="artist">
                    {song["track"]["artists"].map((artist, index) => {
                        if (index === 0) {
                            return <span key={artist.name}>{artist.name}</span>;
                        } else {
                            return (
                                <span key={artist.name}>, {artist.name}</span>
                            );
                        }
                    })}
                </td>
                <td className="date-added">{formatDate(song["added_at"])}</td>
                <td className="like-button">
                    <button>
                        <i className="fa-solid fa-heart"></i>
                    </button>
                </td>
                <td className="duration">
                    {msToTime(song["track"]["duration_ms"])}
                </td>
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
                    <button onClick={() => printSongInfo()}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </td>
            </tr>
        </>
    );
};

export default Song;
