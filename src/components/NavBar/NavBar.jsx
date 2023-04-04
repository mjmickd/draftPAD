import "./NavBar.css"

import { useState } from "react";
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import * as artworksAPI from "../../utilities/artworks-api";

export default function NavBar({ user, setUser, setArtInfo }) {
  const [formData, setFormData] = useState("");
  
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  

  async function handleSubmit(evt) {
    evt.preventDefault()
    const artResults = await artworksAPI.searchArtApi(formData) 
    setArtInfo(artResults);
    setFormData("")
    }

  return (
    <nav>
      <Link to='/'>Home</Link>
      &nbsp; | &nbsp; 
      <Link to="/art">Art Work</Link>
      &nbsp; | &nbsp;
      <Link to="/profile">{user.name} profile</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;
     <form onSubmit={handleSubmit}> <input type="text" value={formData} onChange={(evt)=>setFormData(evt.target.value)}/> <button type="submit">search</button></form>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}