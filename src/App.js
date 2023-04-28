import "./App.css";
import FetchApi from "./Components/Fetch/FetchApi";
import Navbar from "./Components/Header/Header";
// import Main1 from "./Components/Mains/main1/Main1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FetchApi />
    </div>
  );
}

export default App;
