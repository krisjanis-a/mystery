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

        case "ADD_SONGS": {
            const { songs } = action;
            const updatedSongs = state.songs.map((song) => song);
            updatedSongs.push(...songs);

            return {
                ...state,
                songs: updatedSongs,
            };
        }

        case "SET_NAME": {
            const { name } = action;
            return {
                ...state,
                name: name,
            };
        }
        case "SET_CREATOR": {
            const { creator } = action;
            return {
                ...state,
                creator: creator,
            };
        }
        case "SET_DESCRIPTION": {
            const { description } = action;
            return {
                ...state,
                description: description,
            };
        }

        case "CLEAR_SONGS": {
            return {
                ...state,
                songs: [],
            };
        }

        case "RESET_NEW_COLLECTION": {
            return getInitialState();
        }

        default:
            return state;
    }
};
