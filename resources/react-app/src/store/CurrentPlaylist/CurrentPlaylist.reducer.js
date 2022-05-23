/* eslint-disable import/no-anonymous-default-export */
const getInitialState = () => ({
    currentPlaylistId: null,
    currentPlaylist: {},
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

            const songs = playlist.tracks.items.map((song) => ({
                ...song,
                song_spotify_data: song.track,
            }));

            const preparedPlaylist = {
                ...playlist,
                songs: songs,
                spotify_id: playlist.id,
            };

            console.log(preparedPlaylist);

            return {
                ...state,
                currentPlaylist: preparedPlaylist,
            };

        default:
            return state;
    }
};
