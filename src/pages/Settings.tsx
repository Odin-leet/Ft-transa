import React, { useEffect, useState } from 'react'
import "../App.css"
import "./Settings.css"
import myimage from './ds.jpg'
import Popup from 'reactjs-popup';
import styled from 'styled-components'
import { LanguageVariant } from 'typescript'
import Switcher from '../components/Switcher'
import Faca from '../components/Faca';
import Faca1 from '../components/Faca1'
const StyledLabel = styled.label<{ checked: boolean }>`  
cursor: pointer;  
text-indent: -9999px;  
width: 250px;  
height: 125px;  
background-color: ${({ checked }) => (checked ? "#192125" :  "#9da2b3")};  
display: block;  
border-radius: 100px;  
position: relative;
&:after {    
content: "";    
position: absolute;    
left: ${({ checked }) => (checked ? "14px" : "calc(55% - 5px)")};    top: 12px;    
width: 100px;    
height: 100px;    
background-color: #fff;    
border-radius: 90px;    
transition: 0.3s;  
}`;
const Settings = () => {
  var file1:string
  const  [img, setImg] = useState(myimage);
  const  [openmodel, setOpenmodel] = useState(false)
  let file:FileList ;
  const [name, setName] = useState('');
  let username:string = "Flen ben Flen"
  const handlename = (event:React.FormEvent& { target: HTMLInputElement }) =>{
    setName(event.target.value);
  }
  const handleSubmit = (event:React.FormEvent) =>{
    username = name;
  }
 
  const handleimage = (event:any ) =>{
    file1 = URL.createObjectURL(event.target.files)
     
  }
  useEffect(()=>{
    var e = document.getElementById('inputfile')
    e?.addEventListener("change", (c :any)=>{
      setImg(URL.createObjectURL(c.target.files[0]))})
 } ,)
  const [openmodel1,setOpenmodel1] = useState(false)

  const uploadfile= () =>{
    var e = document.getElementById('inputfile')
  }
  const [toggled, setToggled] = useState(true)
  const handletoggled = () =>{
    if(toggled == false)
      setOpenmodel(!openmodel)

    setToggled(!toggled)
  }
  console.log(openmodel)
  console.log("im here")
  console.log(openmodel1)
  return (
    <div>        <h1 style={{padding:"20px 20px", fontSize:"25px" ,color: "white", fontFamily:"'Montserrat Alternates', sans-serif", fontWeight:"400"}}>Settings</h1>
    <div className="milieu">
        <img className="img" src={img} alt="sqdqs" width="50vw" height="50vh" />
        <input type='file' id='inputfile' accept='.jpg' onClick={uploadfile} className='imagechange'/>
        <p className='username' >{username}</p>
        <form className='fm' onSubmit={handleSubmit}>
            <div  className="User" >username :</div>
            <input type='text' value={name} onChange={handlename} placeholder={username}className="settingsinput"/>
            <div className='switchee'>
            <p className='tfa'>two factor authentication</p>

            <Switcher toggled = {toggled} onToggled={handletoggled} />
            </div>    
            {openmodel && <Faca closemodel ={setOpenmodel} openmodel1={setOpenmodel1}/> }
            {openmodel1 && <Faca1 closemodel = {setOpenmodel1} />}
            <button type='submit' className='input-submit'> Sauvegarder</button>
            
        </form>
    </div>
    </div>
   
  )
}

export default Settings