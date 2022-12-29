import React from 'react'
import './Myprofile.css'
import styled from 'styled-components'
import myimage from '../ss3.jpg'
import AvatarEditor from 'react-avatar-editor'
import Progress_bar from './Progress_bar'
const Historitem = styled.div<{close: boolean}>`
    display: flex;
    height: 12%;
    position:relative;
    flex-direction: row;
    color: ${({ close}) => close ? '#000' : '#fff'};
    width: 80%;
    left: 10%;
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
const Usernamehis2 = styled.h1<{close: boolean}>`
  position: relative;
  left: 61%;
  font-size: x-small;
  font-weight: 600;
  top:15%;
`


const Myprofile = () => {
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
    },
    {
      user1: name,
      user1level: 19,
      user1img : "ds.jpg",
      user2img : "ds.jpg",
      user2level: 8,
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
    {
      user1: name,
      user1level: 19,
      user1img : "ds.jpg",
      user2img : "ds.jpg",
      user2level: 8,
      user2: name,
      score: "1 - 7",
      date: "27/05/2012",
      Boolean: false,
    },
];

  return (
    <div className='full'>
      <div className='firstpart'>
        <div className='profi'>
          <img className='Profileimg' src={myimage} />
          <p className='name'>{name}</p>
          <p className='nickname'>#{nickname}</p>
          <div className='levelbar'>
          <Progress_bar progress={levelbar} />
          </div>
          <p className='level'>level 7</p>

        </div>

        <div className='stats'>
          <div className='statsinfo'>
            <h1 className='Stathead'>STATS</h1>
            <div className='sta1'>
              <p className='stahead'>win rate %</p>
              <p className='stainfo'>{winrate} %</p>
            </div>
            <div className='sta2'>
              <p className='stahead'>Total games played</p>
              <p className='stainfo'>{Totalgamepl} games</p>
            </div>
            <div className='sta3'>
              <p className='stahead'>Total Wins games</p>
              <p className='stainfo'>{gamewin} games</p>
            </div>
            <div className='sta4'>
              <p className='stahead'>Total loses games</p>
              <p className='stainfo'>{gamelose} games</p>
            </div>
          </div>
          <div className='rank'>
            <h1 className='rankhead'>RANK</h1>
          </div>
        </div>
      </div>
      <div className='secondpart'>
        <h1 className='Matchhead' >
          MATCH HISTORY
        </h1>
        <div className='matchhistory1'>
          {mhistory.map((value,key)=>{
            return(
            <div className='matchhistoryp'>
            <Historitem close={value.Boolean}>
              <img className='user1img' src={myimage}/>
                <Usernamehis1 close={value.Boolean}>{value.user1}</Usernamehis1>
                <h2 className='usernamehistory'>level {value.user1level}</h2>
                <div className='result'>result
                <h1 className='score'>{value.score}</h1></div>
                <img className='user2img' src={myimage}/>
                <Usernamehis2 close={value.Boolean}>{value.user2}</Usernamehis2>
                <h2 className='usernamehistory2'>level {value.user2level}</h2>
            </Historitem> 
            </div>
        )}) }
        </div>  
      </div>     
    </div>
  )
}
export default Myprofile