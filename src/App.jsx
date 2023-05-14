
import Loginpage from "./loginpage.jsx";
import Navbar from "./Navbar.jsx"
import {Routes, Route} from "react-router-dom";
import Homepage from "./Homepage.jsx";
import Problems from "./Problems.jsx";
import Problem from "./Problem.jsx";
import React from "react";
import LoginPage from "./loginpage.jsx";
import Cdeditor from "./codeeditor.jsx";
function App(){
    return (
        <><Navbar/>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/loginpage" element={<Loginpage/>}/>
                <Route path="/Problems/*" element={<Problems/>}/>
                <Route path="/Problem" element={<Problem/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/editor" element={<Cdeditor/>}/>
            </Routes>
        </>
    );


}
 export default App