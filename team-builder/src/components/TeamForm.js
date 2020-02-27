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
    setMember({name:"",role:"",email:""})
  }

  return(
    <div>
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>

      <input onChange={handleChanges} id="name" type="text" name="name" value={member.name}/>
      
      <label htmlFor="role">Role</label>

      <input onChange={handleChanges} id="role" type="text" name="role" value=
      {member.role}/>

      <label htmlFor="email">Email</label>
      
      <input onChange={handleChanges} id="email" type="text" name="email" value=
      {member.email}/>
      
      <label htmlFor="pfp">Profile Pic:</label>
      <input onChange={handleChanges} id="pfp" type="url" name="email" value=
      {member.pfp}/>

      <button type='submit'>Add Team Member</button>


    </form>
    </div>
  )
}

export default TeamForm