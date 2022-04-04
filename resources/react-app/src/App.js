import Header from "./components/Header/Header";
import CollectionList from "./components/CollectionList/CollectionList";
import SongList from "./components/SongList/SongList";
import "./App.css";

function App() {
    return (
        <div className="collections-app">
            <div className="collections-app-container">
                <div className="collection-list-container">
                    <CollectionList />
                    <a href="/collections/playlists">Show Spotify playlists</a>
                </div>
                <div className="header-songlist-container">
                    <Header />
                    <SongList />
                </div>
            </div>
        </div>
    );
}

export default App;
