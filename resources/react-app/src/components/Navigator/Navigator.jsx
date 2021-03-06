import React, { useEffect } from "react";
import "./Navigator.css";
import CollectionsList from "../CollectionsList/CollectionsList";
import PlaylistsList from "../PlaylistsList/PlaylistsList";
import { useDispatch, useSelector } from "react-redux";
import {
    setListCollectionsMode,
    setListPlaylistsMode,
} from "../../store/ListMode/ListMode.action";
import { setLoadingNavigatorTrue } from "../../store/Loading/Loading.action";

const Navigator = () => {
    const dispatch = useDispatch();

    const listMode = useSelector((state) => state.ListMode);

    const handleChangeMode = (setMode) => {
        dispatch(setMode);
    };

    useEffect(() => {
        dispatch(setLoadingNavigatorTrue());
    }, [dispatch]);

    return (
        <div className="navigator">
            {/* Collections mode */}
            {listMode.listCollectionsMode && (
                <div className="lists-container collections-list-container">
                    <CollectionsList />
                    <button
                        className="button_main change_mode_button"
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
                        className="button_main change_mode_button"
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
