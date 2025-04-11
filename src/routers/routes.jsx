import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { DashBoard } from "../pages/DashBoard";

export function MyRoutes(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/dashboard" element={<DashBoard />}/>
        </Routes>
        </BrowserRouter>



    );
        
    
}