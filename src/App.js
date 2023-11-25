//import Pocketnotes from "./components/Create Notes/Pocketnotes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./setContext";
import UseContext from "./useContext";
import { useEffect, useState } from "react";
import style from "./App.module.css";
import Laptop from "./pages/Laptop";
import Phone from "./pages/Phone";
import MNotes from "./components/Notes/MNotes";


function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = UseContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
   
  }, [selected, setSelected]);
  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);
  return (
    <Provider>
    <div className={style.App}>
      {screenSize > 650 ? (
        <Laptop />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Phone />} />
            <Route path="/notes" element={<MNotes />} />
          </Routes>
        </Router>
      )}
    </div>
  </Provider>
);
}

export default App;
