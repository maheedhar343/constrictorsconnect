import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from "./Login";
import Signup from "./Signup";
export default function Routing(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>
                <Route path="/about" element={<About/>} ></Route>
                <Route path="/contact" element={<Contact/>} ></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}