import React from "react";
import CollectionsList from "./components/CollectionsList/CollectionsList";
import PlaylistsList from "./components/PlaylistsList/PlaylistsList";
import { useDispatch, useSelector } from "react-redux";
import {
    setListCollectionsMode,
    setListPlaylistsMode,
} from "../../store/ListMode/ListMode.action";

const Navigator = () => {
    const dispatch = useDispatch();

    const listMode = useSelector((state) => state.ListMode);

    const handleChangeMode = (setMode) => {
        dispatch(setMode);
    };

    return (
        <div className="navigator">
            {/* Collections mode */}
            {listMode.listCollectionsMode && (
                <div className="lists-container collections-list-container">
                    <CollectionsList />
                    <button
                        className="change-mode-button"
                        onClick={() => handleChangeMode(setListPlaylistsMode())}
                    >
                        Show Spotify playlists
                    </button>
                </div>
            )}

            {/* Playlists mode */}
            {listMode.listPlaylistsMode && (
                <div className="lists-container playlists-list-container">
                    <PlaylistsList />
                    <button
                        className="change-mode-button"
                        onClick={() =>
                            handleChangeMode(setListCollectionsMode())
                        }
                    >
                        Show collections
                    </button>
                </div>
            )}
        </div>
    );
};

export default Navigator;
