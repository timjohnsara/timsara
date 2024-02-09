import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./routes/header";
import Resume from "./routes/resume";
import Music from "./routes/music";
import Home from "./routes/home";
import Contact from "./routes/contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route element={<App/>}>
                <Route path="/" element={<Home />} />
                <Route path="header" element={<Header/>} />
                <Route path="resume" element={<Resume/>} />
                <Route path="music" element={<Music/>} />
                <Route path="contact" element={<Contact/>} />
            </Route>
        </Routes>
    </Router>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
