import React from 'react'
import styled from 'styled-components'
import "./Matchhistory.css"
import myimage from '../ss3.jpg'
const Usernamehis2 = styled.h1<{close: boolean}>`
  position: relative;
  left: 61%;
  font-size: x-small;
  font-weight: 600;
  top:15%;
`


const Historitem = styled.div<{close: boolean}>`
    display: flex;
    height: 12%;
    position:relative;
    flex-direction: row;
    color: ${({ close}) => close ? '#000' : '#fff'};
    width: 60%;
    left: 20%;
    margin-top: 2%;
    margin-bottom: 2%;
    background-color: ${({ close}) => close ? '#fff' : '#A3A3A3'};
`
const Usernamehis1 = styled.h1<{close: boolean}>`
  position: relative;
  left: 2%;
  font-size: x-small;
  font-weight: 600;
  top:15%;
`

const Matchhistory = () => {
    var intvalue = Math.floor(73.2)
  let level = 73.2;
  let levelbar = level - intvalue;
  levelbar = levelbar * 100;
  const name:string = "Flen Ben Flen"
  const nickname:string = "Flen Ben Flen"
  let winrate:number = 57
  let Totalgamepl:number= 17
  let gamewin:number= 7
  let gamelose:number=5
    const mhistory = [
        {
            user1: name,
            user1level: 5,
            user1img : "ds.jpg",
            user2img : "ds.jpg",
            user2level: 7,
            user2: name,
           score: "1 - 7",
            date: "27/05/2012",
            Boolean: false,
    
        },
        {
          user1: name,
          user1level: 2,
          user1img : "ds.jpg",
          user2img : "ds.jpg",
          user2level: 10,
          user2: name,
          score: "1 - 7",
          date: "27/05/2082",
          Boolean: true,
        },
        {
          user1: name,
          user1level: 9,
          user1img : "ds.jpg",
          user2img : "ds.jpg",
          user2level: 8,
          user2: name,
          score: "1 - 7",
          date: "27/05/2012",
          Boolean: true,
        },{
          user1: name,
          user1level: 5,
          user1img : "ds.jpg",
          user2img : "ds.jpg",
          user2level: 7,
          user2: name,
         score: "1 - 7",
          date: "27/05/2012",
          Boolean: false,
  
      },
      {
        user1: name,
        user1level: 2,
        user1img : "ds.jpg",
        user2img : "ds.jpg",
        user2level: 10,
        user2: name,
        score: "1 - 7",
        date: "27/05/2082",
        Boolean: true,
      },
      {
        user1: name,
        user1level: 9,
        user1img : "ds.jpg",
        user2img : "ds.jpg",
        user2level: 8,
        user2: name,
        score: "1 - 7",
        date: "27/05/2012",
        Boolean: true,
      },{
        user1: name,
        user1level: 5,
        user1img : "ds.jpg",
        user2img : "ds.jpg",
        user2level: 7,
        user2: name,
       score: "1 - 7",
        date: "27/05/2012",
        Boolean: false,

    },
    {
      user1: name,
      user1level: 2,
      user1img : "ds.jpg",
      user2img : "ds.jpg",
      user2level: 10,
      user2: name,
      score: "1 - 7",
      date: "27/05/2082",
      Boolean: true,
    },
    {
      user1: name,
      user1level: 9,
      user1img : "ds.jpg",
      user2img : "ds.jpg",
      user2level: 8,
      user2: name,
      score: "1 - 7",
      date: "27/05/2012",
      Boolean: true,
    },
    ]
  return (
    <div>{mhistory.map((value,key)=>{
        return(
        <Historitem close={value.Boolean}>
          <img className='user1img' src={myimage}/>
            <Usernamehis1 close={value.Boolean}>{value.user1}</Usernamehis1>
            <h1 className='score'>VS</h1>
            <img className='user2img' src={myimage}/>
            <Usernamehis2 close={value.Boolean}>{value.user2}</Usernamehis2>
        </Historitem> 
    )}) }</div>
  )
}

export default Matchhistory