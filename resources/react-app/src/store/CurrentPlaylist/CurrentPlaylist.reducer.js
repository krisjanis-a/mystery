/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    currentPlaylist: null,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_CURRENT_PLAYLIST":
            const { playlistId } = action;
            return {
                currentPlaylist: playlistId,
            };

        default:
            return state;
    }
};
