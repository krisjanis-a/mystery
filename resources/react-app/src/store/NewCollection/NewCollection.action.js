export const ADD_SONG_NEW_COLLECTION = "ADD_SONG_NEW_COLLECTION";
export const ADD_SONGS_NEW_COLLECTION = "ADD_SONGS_NEW_COLLECTION";
export const SET_NAME_NEW_COLLECTION = "SET_NAME_NEW_COLLECTION";
export const SET_DESCRIPTION_NEW_COLLECTION = "SET_DESCRIPTION_NEW_COLLECTION";
export const SET_CREATOR_NEW_COLLECTION = "SET_CREATOR_NEW_COLLECTION";
export const SET_CREATOR_ID_NEW_COLLECTION = "SET_CREATOR_ID_NEW_COLLECTION";
export const CLEAR_SONGS_NEW_COLLECTION = "CLEAR_SONGS_NEW_COLLECTION";
export const RESET_NEW_COLLECTION = "RESET_NEW_COLLECTION";

export const addSongNewCollection = (song) => ({
    type: ADD_SONG_NEW_COLLECTION,
    song,
});

export const addSongsNewCollection = (songs) => ({
    type: ADD_SONGS_NEW_COLLECTION,
    songs,
});

export const setNameNewCollection = (name) => ({
    type: SET_NAME_NEW_COLLECTION,
    name,
});

export const setCreatorNewCollection = (creator) => ({
    type: SET_CREATOR_NEW_COLLECTION,
    creator,
});

export const setCreatorIdNewCollection = (creatorId) => ({
    type: SET_CREATOR_ID_NEW_COLLECTION,
    creatorId,
});

export const setDescriptionNewCollection = (description) => ({
    type: SET_DESCRIPTION_NEW_COLLECTION,
    description,
});

export const clearSongsNewCollection = () => ({
    type: CLEAR_SONGS_NEW_COLLECTION,
});

export const resetNewCollection = () => ({
    type: RESET_NEW_COLLECTION,
});
