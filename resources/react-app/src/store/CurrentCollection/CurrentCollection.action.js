export const SET_CURRENT_COLLECTION_ID = "SET_CURRENT_COLLECTION_ID";
export const SET_CURRENT_COLLECTION = "SET_CURRENT_COLLECTION";
export const REMOVE_CURRENT_COLLECTION = "REMOVE_CURRENT_COLLECTION";

export const setCurrentCollectionId = (collectionId) => ({
    type: SET_CURRENT_COLLECTION_ID,
    collectionId,
});

export const setCurrentCollection = (collection) => ({
    type: SET_CURRENT_COLLECTION,
    collection,
});

export const removeCurrentCollection = () => ({
    type: REMOVE_CURRENT_COLLECTION,
});
