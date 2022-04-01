import Header from "./components/Header/Header";
import CollectionList from "./components/CollectionList/CollectionList";
import SongList from "./components/SongList/SongList";

function App() {
    return (
        <div className="App">
            <h1>Collections</h1>
            <h3>No collections present</h3>
            <a href="/collections/playlists">Show Spotify playlists</a>
            <Header />
            <CollectionList />
            <SongList />
        </div>
    );
}

export default App;
