import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./components/preloader/preloader";
import Main from "./main";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Preloader />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    );
};

export default App;
