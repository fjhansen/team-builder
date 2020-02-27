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

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    };
    setMembers([...members, newMember]);
  }

  return (
    <div className="App">
      <h1>My Team</h1>
      <TeamForm addNewMember={addNewMember}/>
      <Team members={members}/>
    </div>
  );
}

export default App;
