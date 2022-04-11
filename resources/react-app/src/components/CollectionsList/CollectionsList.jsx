import React from "react";
import "./CollectionsList.css";

const CollectionList = () => {
    const collections = Array.from({ length: 10 }, (v, k) => k + 1);

    return (
        <div className="collections-list">
            <h3>Your collections</h3>
            <ul>
                {collections.map((index) => {
                    return (
                        <a href="" className="collection-name-link" key={index}>
                            <li className="collection-name">
                                Collection name {index}
                            </li>
                        </a>
                    );
                })}
            </ul>
        </div>
    );
};

export default CollectionList;
