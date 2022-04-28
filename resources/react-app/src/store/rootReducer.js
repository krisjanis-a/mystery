import { combineReducers } from "redux";
import DisplayMode from "./DisplayMode/DisplayMode.reducer";
import ListMode from "./ListMode/ListMode.reducer";
import CurrentCollection from "./CurrentCollection/CurrentCollection.reducer";
import CurrentPlaylist from "./CurrentPlaylist/CurrentPlaylist.reducer";
import Playlists from "./Playlists/Playlists.reducer";
import Collections from "./Collections/Collections.reducer";
import Creator from "./Creator/Creator.reducer";
import NewCollection from "./NewCollection/NewCollection.reducer";
import ModifiedCollection from "./ModifiedCollection/ModifiedCollection.reducer";
import UnmodifiedCollection from "./UnmodifiedCollection/UnmodifiedCollection.reducer";
import Filters from "./Filters/Filters.reducer";
import FilteredPlaylist from "./FilteredPlaylist/FilteredPlaylist.reducer";
import CreatingCollection from "./CreatingCollection/CreatingCollection.reducer";
import User from "./User/User.reducer";

const rootReducer = combineReducers({
    Collections,
    Creator,
    CurrentCollection,
    CurrentPlaylist,
    DisplayMode,
    ListMode,
    Playlists,
    NewCollection,
    ModifiedCollection,
    UnmodifiedCollection,
    Filters,
    FilteredPlaylist,
    CreatingCollection,
    User,
});

export default rootReducer;
