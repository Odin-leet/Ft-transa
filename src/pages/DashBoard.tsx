import React from 'react'
import "./Db.css"
import myimage from '../ss3.jpg'

const DashBoard = () => {
  const data = [
    {
      Rank :1,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :2,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :3,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :4,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :5,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :2,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :3,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :4,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :2,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :3,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :4,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :2,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :3,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :4,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :2,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :3,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :4,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :4,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :2,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :3,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    },
    {
      Rank :4,
      User1 : "Flen flen",
      winrate : 25,
      gameplayed : 15,
      win: 17,
      lose: 30,
      level: 8,
    }
  ]
  return (
  <div className='opop'>
    <div className='mmm'>
    <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>name</th>
            <th>winrate</th>
            <th>gameplayed</th>
            <th>w/l</th>
            <th>level</th>
          </tr>
          </thead>
        </table>
    </div>
    <div className='center'>

      <table>

          <tbody>
        {data.map((item, index) => {
            return (
           
              <tr key={index}>
                <td scope="row">
                  <img className='imgg' src={myimage}/>
                  <p className='itemerank'>{item.Rank}</p>
                </td>
                <td>{item.User1}</td>
                <td>{item.winrate}</td>
                <td>{item.gameplayed}</td>
                <td>{item.win}/{item.lose}</td>
                <td>{item.level}</td>
              </tr>
              
            );
          })}
          </tbody>
          </table>
    </div>
    </div>
  )
}

export default DashBoard