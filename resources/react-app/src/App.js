import Header from "./components/Header/Header";
import CollectionsList from "./components/CollectionsList/CollectionsList";
import PlaylistsList from "./components/PlaylistsList/PlaylistsList";
import SongList from "./components/SongList/SongList";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setCollectionsMode, setPlaylistsMode } from "./store/Mode/Mode.action";

function App() {
    const dispatch = useDispatch();

    const appMode = useSelector((state) => state.Mode);

    const handleChangeMode = (setMode) => {
        dispatch(setMode);
    };

    return (
        <div className="collections-app-container">
            {/* Collections mode */}
            {appMode.collectionsMode && (
                <div className="lists-container collections-list-container">
                    <CollectionsList />
                    <button
                        className="change-mode-button"
                        onClick={() => handleChangeMode(setPlaylistsMode())}
                    >
                        Show Spotify playlists
                    </button>
                </div>
            )}

            {/* Playlists mode */}
            {appMode.playlistsMode && (
                <div className="lists-container playlists-list-container">
                    <PlaylistsList />
                    <button
                        className="change-mode-button"
                        onClick={() => handleChangeMode(setCollectionsMode())}
                    >
                        Show collections
                    </button>
                </div>
            )}

            <div className="header-songlist-container">
                <Header />
                <SongList />
            </div>
        </div>
    );
}

export default App;
