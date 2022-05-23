import React, { useEffect } from "react";
import "./Viewer.css";
import Header from "../Header/Header";
import SongList from "../SongList/SongList";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPlaylist } from "../../store/CurrentPlaylist/CurrentPlaylist.action";
import { setCurrentCollection } from "../../store/CurrentCollection/CurrentCollection.action";
import { ClipLoader } from "react-spinners";
import {
    setLoadingViewerFalse,
    setLoadingViewerTrue,
} from "../../store/Loading/Loading.action";
import { loaderStyleViewer } from "../../utils/loaderStyling";

const Viewer = () => {
    const dispatch = useDispatch();

    const { currentPlaylistId } = useSelector((state) => state.CurrentPlaylist);
    const { currentCollectionId } = useSelector(
        (state) => state.CurrentCollection
    );
    const { loadingViewer } = useSelector((state) => state.Loading);

    useEffect(() => {
        dispatch(setLoadingViewerTrue());
    }, [dispatch]);

    // Fetch playlist
    useEffect(() => {
        const fetchPlaylist = (currentPlaylistId) => {
            fetch("/collections/playlist/" + currentPlaylistId)
                .then((response) => response.json())
                .then((data) => dispatch(setCurrentPlaylist(data)))
                .then(() => dispatch(setLoadingViewerFalse()));
        };

        if (currentPlaylistId !== null) {
            dispatch(setLoadingViewerTrue());
            fetchPlaylist(currentPlaylistId);
        }
    }, [currentPlaylistId, dispatch]);

    // Fetch collection
    useEffect(() => {
        const fetchCollection = (currentCollectionId) => {
            fetch("/collections/collection/fetch/" + currentCollectionId)
                .then((response) => response.json())
                .then((data) => dispatch(setCurrentCollection(data)))
                .then(() => dispatch(setLoadingViewerFalse()));
        };

        if (currentCollectionId !== null) {
            dispatch(setLoadingViewerTrue());
            fetchCollection(currentCollectionId);
        }
    }, [currentCollectionId, dispatch]);

    return (
        <div className="viewer">
            <div className="header-songlist-container">
                {!loadingViewer ? (
                    <>
                        <Header />
                        <SongList />
                    </>
                ) : (
                    <div className="loader_container">
                        <ClipLoader color="#9f8d69" css={loaderStyleViewer} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Viewer;
