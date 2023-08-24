import React from "react";
import PlayersList from "./playerlist";
import Nav1 from "./navbar";
import obj from "./players"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Nav1/>
    <div   >
  <PlayersList x={obj} />
  
  
    </div>
  </div>
  );
}

export default App;
