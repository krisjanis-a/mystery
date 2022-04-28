export const ADD_SONG = "ADD_SONG";
export const ADD_SONGS = "ADD_SONGS";
export const SET_NAME = "SET_NAME";
export const SET_DESCRIPTION = "SET_DESCRIPTION";
export const SET_CREATOR = "SET_CREATOR";
export const CLEAR_SONGS = "CLEAR_SONGS";
export const RESET_NEW_COLLECTION = "RESET_NEW_COLLECTION";

export const addSong = (song) => ({
    type: ADD_SONG,
    song,
});

export const addSongs = (songs) => ({
    type: ADD_SONGS,
    songs,
});

export const setName = (name) => ({
    type: SET_NAME,
    name,
});

export const setCreator = (creator) => ({
    type: SET_CREATOR,
    creator,
});

export const setDescription = (description) => ({
    type: SET_DESCRIPTION,
    description,
});

export const clearSongs = () => ({
    type: CLEAR_SONGS,
});

export const resetNewCollection = () => ({
    type: RESET_NEW_COLLECTION,
});
