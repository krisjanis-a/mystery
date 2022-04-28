import { useSelector } from "react-redux";
import "./App.css";
import Creator from "./components/Creator/Creator";
import Navigator from "./components/Navigator/Navigator";
import Viewer from "./components/Viewer/Viewer";

function App() {
    const { showCreator } = useSelector((state) => state.Creator);

    return (
        <div className="collections-app-container">
            <Navigator />
            <Viewer />
            {showCreator && <Creator />}
        </div>
    );
}

export default App;
