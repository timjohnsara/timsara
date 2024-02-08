import {Outlet} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import React from "react";

function App() {
    return (
        <div className="App">
            <div className="globalHeader brand"><a href="/">TimSara</a></div>
            <Outlet></Outlet>
            <Navigation></Navigation>
        </div>
    );
}

export default App;