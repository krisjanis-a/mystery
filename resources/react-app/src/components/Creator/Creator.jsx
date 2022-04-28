import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreatingCollection } from "../../store/CreatingCollection/CreatingCollection.action";
import { hideCreator } from "../../store/Creator/Creator.action";
import "./Creator.css";
import msToTime from "../../utils/msToTime";
import { resetNewCollection } from "../../store/NewCollection/NewCollection.action";

const Creator = () => {
    const dispatch = useDispatch();

    const { User } = useSelector((state) => state);
    const { NewCollection } = useSelector((state) => state);

    const handleHideCreator = () => {
        dispatch(hideCreator());
        dispatch(setCreatingCollection(false));
        dispatch(resetNewCollection());
    };

    const handleSaveCollection = () => {
        const token = document
            .querySelector('meta[name="csrf-token"]')
            .getAttribute("content");

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": token,
            },
            body: JSON.stringify(NewCollection),
        };

        fetch(window.location.href + "/collection/create", requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div className="creator">
            <div className="container">
                {/* Close window button */}
                <button
                    className="button_icon close_creator"
                    onClick={() => handleHideCreator()}
                >
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <h3>Create New Collection</h3>

                <div className="collection_name">
                    <label htmlFor="collection_name">Name: </label>
                    <input type="text" id="collection_name" />
                </div>

                <div className="collection_creator">
                    <label htmlFor="collection_creator">Creator: </label>
                    <span id="collection_creator">{User.name}</span>
                </div>

                <CreatorSongList />

                <button
                    className="button_main save_collection"
                    onClick={() => handleSaveCollection()}
                >
                    Save Collection
                </button>
            </div>
        </div>
    );
};

export default Creator;

const CreatorSongList = () => {
    const { songs } = useSelector((state) => state.NewCollection);

    return (
        <div className="creator_song_list">
            <div className="creator_song_list_table_wrapper">
                <div className="creator_song_list_table_container">
                    <table className="creator_song_list_table">
                        <thead className="table_head">
                            <tr>
                                <th className="song_position">#</th>
                                <th className="title">Title</th>
                                <th className="album">Album</th>
                                <th className="artist">Artist</th>
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
                                            <CreatorSong
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
            <div className="creator_songs_empty_alert">
                {songs.length === 0 && <h3>Nothing to display</h3>}
            </div>
        </div>
    );
};

const CreatorSong = ({ song, index }) => {
    return (
        <>
            <tr className="creator_song_item">
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
                    <button>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </td>
            </tr>
        </>
    );
};
