import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import LandingPage from "./pages/landing/LandingPage";
import MainPage from "./pages/MainPage";
import Header from "./pages/Header";


function App() {
    //
    function renderTemplates() {
        NetPanoramaTemplateViewer.render("./template.json", {
            fileUrl: "\"./example.pajek\"",
            nodeColor: "\"blue\""
        }, "vis1");
    }

    renderTemplates();

    return (
    <div className="App">

        <div id="vis1"></div>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>

    </div>


  );
}

export default App;
