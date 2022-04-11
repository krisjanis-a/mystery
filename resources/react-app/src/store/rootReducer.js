import { combineReducers } from "redux";
import Mode from "./Mode/Mode.reducer";
import CurrentPlaylist from "./CurrentPlaylist/CurrentPlaylist.reducer";

const rootReducer = combineReducers({
    Mode,
    CurrentPlaylist,
});

export default rootReducer;
