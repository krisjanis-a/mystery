import { combineReducers } from "redux";
import DisplayMode from "./DisplayMode/DisplayMode.reducer";
import ListMode from "./ListMode/ListMode.reducer";
import CurrentPlaylist from "./CurrentPlaylist/CurrentPlaylist.reducer";
import Playlists from "./Playlists/Playlists.reducer";
import Collections from "./Collections/Collections.reducer";

const rootReducer = combineReducers({
    Collections,
    CurrentPlaylist,
    DisplayMode,
    ListMode,
    Playlists,
});

export default rootReducer;
