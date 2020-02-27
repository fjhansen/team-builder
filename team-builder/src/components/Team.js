import React from "react";

const Team = props => {
  return(
    <div className="team-list">
      {props.members.map(member => (
        <div className="team" key={member.id}>
          <h2>{member.name}</h2>
          <img src={member.pfp} alt={member.name}></img>
      <p>{member.role}</p>
      <p>{member.email}</p>
      </div>
      ))}
    </div>
  )
}

export default Team