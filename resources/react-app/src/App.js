import "./App.css";
import Navigator from "./components/Navigator/Navigator";
import Viewer from "./components/Viewer/Viewer";

function App() {
    return (
        <div className="collections-app-container">
            <Navigator />
            <Viewer />
        </div>
    );
}

export default App;
