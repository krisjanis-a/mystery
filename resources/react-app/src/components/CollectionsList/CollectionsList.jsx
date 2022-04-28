import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCreatingCollection } from "../../store/CreatingCollection/CreatingCollection.action";
import { showCreator } from "../../store/Creator/Creator.action";
import { setName } from "../../store/NewCollection/NewCollection.action";
import "./CollectionsList.css";

const CollectionList = () => {
    const dispatch = useDispatch();

    const [collections, setCollections] = useState([]);

    const handleClickCollection = () => {};

    const handleClickCreateCollection = () => {
        dispatch(setCreatingCollection(true));
        dispatch(setName());
        dispatch(showCreator());
    };

    return (
        <div className="collections-list">
            <h3>Your collections</h3>
            <div className="list-items-container">
                <ul>
                    {collections.length !== 0 ? (
                        collections.map((index) => {
                            return (
                                <li
                                    className="list-item"
                                    key={index}
                                    onClick={() => handleClickCollection()}
                                >
                                    Collection name {index}
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
