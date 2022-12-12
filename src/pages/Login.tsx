import { url } from 'inspector'
import React from 'react'
import "./Login.css"
import myimg from '../42ss.png'
const Login = () => {
  return (
    <div className='Login'>
      <h1 className='LoginHeading'>IT S TIME TO SHOW UR SELF THE TALENT U HAVE 
ON PLAYING PING PONG</h1>
    <div className='Buttonin'>
        <form method="get" action="./Home
">            <img className='imgs'  src={myimg} alt="pof" width={"19vw"} height={"19vh"}/>
              < button className='input_submit' type='submit' >Continue with Intra </button>
              </form>
    
    </div>
    </div>
  )

}

export default Login