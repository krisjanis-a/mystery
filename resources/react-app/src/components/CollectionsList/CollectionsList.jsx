import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCreatingCollection } from "../../store/CreatingCollection/CreatingCollection.action";
import { showCreator } from "../../store/Creator/Creator.action";
import { setNameNewCollection } from "../../store/NewCollection/NewCollection.action";
import "./CollectionsList.css";
import { setCollections as saveCollectionsToRedux } from "../../store/Collections/Collections.action";
import { setCurrentCollectionId } from "../../store/CurrentCollection/CurrentCollection.action";
import { setDisplayCollectionsMode } from "../../store/DisplayMode/DisplayMode.action";

const CollectionList = () => {
    const dispatch = useDispatch();
    const savedCollections = useSelector(
        (state) => state.Collections.collections
    );

    const { displayPlaylistsMode } = useSelector((state) => state.DisplayMode);

    const [collections, setCollections] = useState([]);

    const handleClickCollection = (collectionId) => {
        dispatch(setCurrentCollectionId(collectionId));

        if (displayPlaylistsMode) {
            dispatch(setDisplayCollectionsMode());
        }
    };

    const handleClickCreateCollection = () => {
        dispatch(setCreatingCollection(true));
        dispatch(setNameNewCollection());
        dispatch(showCreator());
    };

    useEffect(() => {
        const fetchCollections = () => {
            fetch("/collections/collections")
                .then((response) => response.json())
                .then((data) => {
                    setCollections(data);
                    saveFetchedCollections(data);
                });
        };

        const saveFetchedCollections = (data) => {
            dispatch(saveCollectionsToRedux(data));
        };

        if (savedCollections !== null) {
            // console.log("Loading collections from redux");
            setCollections(savedCollections);
        }
        if (savedCollections === null) {
            // console.log("Fetching collections from db");
            fetchCollections();
        }
    }, [savedCollections, dispatch]);

    return (
        <div className="collections-list">
            <h3>Your collections</h3>
            <div className="list-items-container">
                <ul>
                    {collections.length !== 0 ? (
                        collections.map((collection) => {
                            return (
                                <li
                                    className="list-item"
                                    key={
                                        collection.name +
                                        collection.collection_id
                                    }
                                    onClick={() =>
                                        handleClickCollection(
                                            collection.collection_id
                                        )
                                    }
                                >
                                    {collection.name}
                                </li>
                            );
                        })
                    ) : (
                        <p>No collections to display</p>
                    )}

                    <li
                        className="list-item"
                        onClick={() => handleClickCreateCollection()}
                    >
                        {/* <i className="fa-solid fa-plus"></i> */}
                        <i className="fa-solid fa-circle-plus"></i>
                        Create collection
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CollectionList;
