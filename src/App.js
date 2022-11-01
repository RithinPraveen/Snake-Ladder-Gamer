import React, { useState } from 'react'
import './App.css'
import GameBox from './gameBox/GameBox';
import GameDice from './dice/GameDice';
import ladder from "./imgs/ladder.png"
import snake from "./imgs/snake.png"



let numOfPlayers = 4
let player_Icon = ["🥎", "⚽", "🏀", "🎱"]
let player_Name = ["Siva", "Suman", "Ravi", "Ram"]


function App() {
  

  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const [player3, setPlayer3] = useState(1);
  const [player4, setPlayer4] = useState(1);



  let player_Pos = [player1, player2, player3, player4]
  let player_State = [setPlayer1, setPlayer2, setPlayer3, setPlayer4]

  let allPlayers = []
  for (let num = 0; num < numOfPlayers; num++) {
    allPlayers.push(`player${num + 1}`)
  }

  let totalPlayers = []

  for (let index = 0; index < numOfPlayers; index++) {
    totalPlayers.push({
      tag: index + 1,
      playerID: allPlayers[index],
      playerIcon: player_Icon[index],
      playerName: player_Name[index],
      playerPos: player_Pos[index],
      playerState: player_State[index]
    })
  }
  console.log(totalPlayers);

  return (
    <div>
      <div className="pageBox">
        <div className="side-box">
          <div className="info-area">
            <div className="title">

              <h1>Snake  And  Ladder</h1>

            </div>

            <div className="button-area">
              <GameDice
                TotalPlayers={totalPlayers}
              />
            </div>
          </div>
        </div>
        <div className="game-area">

          <GameBox
            TotalPlayers={totalPlayers}
          />
        </div>
        <div className="snakeladder">
          <img src={ladder} alt="ladder1" id='ladder1' />
          <img src={ladder} alt="ladder2" id='ladder2' />
          <img src={ladder} alt="ladder3" id='ladder3' />
          <img src={ladder} alt="ladder4" id='ladder4' />
          <img src={ladder} alt="ladder5" id='ladder5' />

          <img src={snake} alt="snake1" id='snake1' />
          <img src={snake} alt="snake3" id='snake2' />
          <img src={snake} alt="snake3" id='snake3' />
          <img src={snake} alt="snake3" id='snake4' />
          <img src={snake} alt="snake2" id='snake5' />
        </div>

      </div>
    </div>
  )
}

export default App