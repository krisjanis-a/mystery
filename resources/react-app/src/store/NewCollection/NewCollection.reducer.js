/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    name: null,
    creator: null,
    creatorId: null,
    description: null,
    songs: [],
});

export default (state = getInitialState(), action) => {
    switch (action.type) {
        case "ADD_SONG_NEW_COLLECTION": {
            const { song } = action;
            const updatedSongs = state.songs.map((song) => song);
            updatedSongs.push(song);

            return {
                ...state,
                songs: updatedSongs,
            };
        }

        case "ADD_SONGS_NEW_COLLECTION": {
            const { songs } = action;
            const updatedSongs = state.songs.map((song) => song);
            updatedSongs.push(...songs);

            return {
                ...state,
                songs: updatedSongs,
            };
        }

        case "SET_NAME_NEW_COLLECTION": {
            const { name } = action;
            return {
                ...state,
                name: name,
            };
        }
        case "SET_CREATOR_NEW_COLLECTION": {
            const { creator } = action;
            return {
                ...state,
                creator: creator,
            };
        }

        case "SET_CREATOR_ID_NEW_COLLECTION": {
            const { creatorId } = action;
            return {
                ...state,
                creatorId: creatorId,
            };
        }

        case "SET_DESCRIPTION_NEW_COLLECTION": {
            const { description } = action;
            return {
                ...state,
                description: description,
            };
        }

        case "CLEAR_SONGS_NEW_COLLECTION": {
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
