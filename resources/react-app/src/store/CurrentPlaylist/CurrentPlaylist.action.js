export const SET_CURRENT_PLAYLIST = "SET_CURRENT_PLAYLIST";
export const REMOVE_CURRENT_PLAYLIST = "REMOVE_CURRENT_PLAYLIST";

export const setCurrentPlaylist = (playlistId) => ({
    type: SET_CURRENT_PLAYLIST,
    playlistId,
});

export const removeCurrentPlaylist = () => ({
    type: REMOVE_CURRENT_PLAYLIST,
});
