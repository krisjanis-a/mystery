/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    name: null,
    creator: null,
    description: null,
    songs: [],
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "ADD_SONG": {
            const { song } = action;
            const updatedSongs = state.songs.map((song) => song);
            updatedSongs.push(song);

            return {
                ...state,
                songs: updatedSongs,
            };
        }

        default:
            return state;
    }
};
