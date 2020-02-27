import React, { useState } from "react";



const TeamForm = props => {

  console.log("TeamForm P r o p s", props);
  
  const [member, setMember] =useState({
    name: "",
    role: "",
    email: ""
  })


  return(
    <form>
      <label htmlFor="title">Team Member</label>
      <input id="member" type="text"/>
    </form>
  )
}

export default TeamForm