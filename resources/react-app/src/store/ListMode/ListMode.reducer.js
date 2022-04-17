/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    listCollectionsMode: false,
    listPlaylistsMode: true,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_LIST_COLLECTIONS_MODE":
            return {
                listCollectionsMode: true,
                listPlaylistsMode: false,
            };

        case "SET_LIST_PLAYLISTS_MODE":
            return {
                listCollectionsMode: false,
                listPlaylistsMode: true,
            };

        default:
            return state;
    }
};
