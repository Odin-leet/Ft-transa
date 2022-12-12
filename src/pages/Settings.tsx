import React from 'react'
import "../App.css"
import "./Settings.css"
import myimage from './ds.jpg'

const Settings = () => {
  const username:string = "Flen ben Flen"
  return (
    <div>        <h1 style={{padding:"20px 20px", fontSize:"25px" ,color: "white", fontFamily:"'Montserrat Alternates', sans-serif", fontWeight:"400"}}>Settings</h1>
    <div className="milieu">
        <img className="img" src={myimage} alt="sqdqs" width="50vw" height="50vh" />
        <button className='imagechange'> change Photo</button>
        <p className='username' >{username}</p>
        <form>
            <div  className="User" >username :</div>
            <input type='input' placeholder={username}className="settingsinput"/>
            <button className='input-submit'> Sauvegarder</button>
        </form>
    </div>
    </div>
  )
}

export default Settings