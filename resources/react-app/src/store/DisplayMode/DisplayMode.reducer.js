/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    displayCollectionsMode: false,
    displayPlaylistsMode: true,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_DISPLAY_COLLECTIONS_MODE":
            return {
                displayCollectionsMode: true,
                displayPlaylistsMode: false,
            };

        case "SET_DISPLAY_PLAYLISTS_MODE":
            return {
                displayCollectionsMode: false,
                displayPlaylistsMode: true,
            };

        default:
            return state;
    }
};
