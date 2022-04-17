export const SET_COLLECTIONS = "SET_COLLECTIONS";
export const REMOVE_COLLECTIONS = "REMOVE_COLLECTIONS";

export const setCollections = (collections) => ({
    type: SET_COLLECTIONS,
    collections,
});

export const removeCollections = () => ({
    type: REMOVE_COLLECTIONS,
});
