import React from 'react';
import './App.css';
import {Profile, Dash, Social, Footer} from "./section"

function App() {
  return (
    <div className='App'>
    <Profile />
    <Dash /> 
    <Social />
    <Footer />
    </div>
    
  );
}

export default App;
