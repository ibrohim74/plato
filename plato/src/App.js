import React from "react";
import RoterS from "./components/roterS";
import Navbar from "./components/navbar";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
            <RoterS/>
        </BrowserRouter>
    </div>
  );
}

export default App;
