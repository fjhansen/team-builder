import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


import Team from "./components/Team"
import TeamForm from "./components/TeamForm"

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Name",
      role: "Role",
      email: "email@service.com"
    }
  ])
  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm/>
      <Team members={members}/>
    </div>
  );
}

export default App;
