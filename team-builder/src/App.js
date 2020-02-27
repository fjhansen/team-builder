import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


import Team from "./components/Team"
import TeamForm from "./components/TeamForm"

function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Pawz",
      pfp: 'https://66.media.tumblr.com/avatar_6302d3f4b4dc_128.pnj',
      role: "Help Desk",
      email: "Pawz4Lyfe@petz.com"
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
