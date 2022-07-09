import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../pages/home";
import About from "../pages/about";
import Contacts from "../pages/contacts";
function RoterS(props) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
        </div>
    );
}

export default RoterS;
