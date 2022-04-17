export const SET_PLAYLISTS = "SET_PLAYLISTS";
export const REMOVE_PLAYLISTS = "REMOVE_PLAYLISTS";

export const setPlaylists = (playlists) => ({
    type: SET_PLAYLISTS,
    playlists,
});

export const removePlaylists = () => ({
    type: REMOVE_PLAYLISTS,
});
