import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../home/Home";
import Detail from "../detail/Detail";
function RouteIndex() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/detail/:index" element={<Detail/>} />
        </Routes>
      </Router>
    );
  }
  
  export default RouteIndex;
  