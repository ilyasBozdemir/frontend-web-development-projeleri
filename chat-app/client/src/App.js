import React from 'react';
import Chat from './components/Chat/Chat';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
    <Route path="/chat" component={Chat} />
  </Router>
  );
}

export default App;
