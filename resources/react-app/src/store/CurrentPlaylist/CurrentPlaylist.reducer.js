/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    currentPlaylistId: null,
    currentPlaylist: null,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_CURRENT_PLAYLIST_ID":
            const { playlistId } = action;
            return {
                ...state,
                currentPlaylistId: playlistId,
            };

        case "SET_CURRENT_PLAYLIST":
            const { playlist } = action;
            return {
                ...state,
                playlist: playlist,
            };

        default:
            return state;
    }
};
