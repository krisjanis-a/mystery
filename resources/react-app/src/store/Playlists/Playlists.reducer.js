/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    playlists: null,
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "SET_PLAYLISTS":
            const { playlists } = action;
            return {
                playlists: playlists,
            };

        case "REMOVE_PLAYLISTS":
            return getInitialState();

        default:
            return state;
    }
};
