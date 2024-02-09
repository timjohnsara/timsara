import {Outlet, Link, useLocation} from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import React from "react";



function App() {
    const location = useLocation()
    return (
        <div className="App">
            <div className="globalHeader brand" data-path={location.pathname}>
                <Link to="/" className="h1">timsara.</Link>
            </div>
            <Outlet></Outlet>
            <Navigation></Navigation>
        </div>
    );
}

export default App;