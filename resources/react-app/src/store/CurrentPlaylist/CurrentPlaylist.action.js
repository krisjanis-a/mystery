export const SET_CURRENT_PLAYLIST_ID = "SET_CURRENT_PLAYLIST_ID";
export const SET_CURRENT_PLAYLIST = "SET_CURRENT_PLAYLIST";
export const REMOVE_CURRENT_PLAYLIST = "REMOVE_CURRENT_PLAYLIST";

export const setCurrentPlaylistId = (playlistId) => ({
    type: SET_CURRENT_PLAYLIST_ID,
    playlistId,
});

export const setCurrentPlaylist = (playlist) => ({
    type: SET_CURRENT_PLAYLIST,
    playlist,
});

export const removeCurrentPlaylist = () => ({
    type: REMOVE_CURRENT_PLAYLIST,
});
