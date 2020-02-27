import React, { useState } from "react";



const TeamForm = props => {

  console.log("TeamForm P r o p s", props);
  
  const [member, setMember] =useState({
    name: "",
    pfp:"",
    role: "",
    email: ""
  })

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member)
    setMember({name:"", pfp:"",role:"",email:""})
  }

  return(
    <div className="team-form">
    <form className="team-form"onSubmit={submitForm}>
      <label htmlFor="name">Name</label>

      <input onChange={handleChanges} id="name" type="text" name="name" placeholder="Prefered Name"value={member.name}/>
      
      <label htmlFor="role">Role</label>

      <input onChange={handleChanges} id="role" type="text" placeholder="Role Name"name="role" value=
      {member.role}/>

      <label htmlFor="email">Email</label>
      
      <input onChange={handleChanges} id="email" type="email" placeholder="aka@petz.com"name="email" value=
      {member.email}/>
      
      <label htmlFor="pfp">Profile Pic:</label>
      <input onChange={handleChanges} id="pfp" type="url" name="pfp" placeholder="Paste image address!"value={member.pfp}/>

      <button type='submit'>Add Team Member</button>


    </form>
    </div>
  )
}

export default TeamForm