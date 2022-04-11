/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    collectionsMode: false,
    playlistsMode: true,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_COLLECTIONS_MODE":
            return {
                collectionsMode: true,
                playlistsMode: false,
            };

        case "SET_PLAYLISTS_MODE":
            return {
                collectionsMode: false,
                playlistsMode: true,
            };

        default:
            return state;
    }
};
