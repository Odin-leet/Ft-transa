import { GameChoose } from "./GameMode"
import Matchhistory from "./Matchhistory"
import "./Home.css"

const Home = () => {
	/*const user = useUserContext();

	console.log(user);*/

  return (
	<div className='fullhome'>
		<GameChoose/>
        <div className="matchhistory">
            <Matchhistory/>
        </div>
	</div>
  )
}


export default Home