 
import { useState } from 'react';
import './App.css';
import Home from "./components/Home.jsx"
import Event from "./components/Event.jsx"
import Feed from "./components/Feed.jsx"
import User from "./components/User.jsx"
import { Routes, Route } from "react-router-dom";
 

function App() {
  return (
    
        <section>
       

        
        <Routes>
          <Route path="/" element={<Home />} />
              <Route path="/Events" element={<Event/>} />
              <Route path="/Feed" element={<Feed/>} />
              <Route path="/User" element={<User/>} />

 </Routes>
        </section>
    );


}

export default App;
