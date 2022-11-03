import React, { useState } from 'react'
import './App.css'
import GameDice from './dice/GameDice';
import ladder from "./imgs/ladder.png"
import snake from "./imgs/snake.png"



let numOfPlayers = 4
let player_Icon = ["🥎", "⚽", "🏀", "🎱", "🏈", "🏈", "🏈", "🏈",]
let player_Name = ["Siva", "Suman", "Ravi", "Ram", "Gokul", "Gokul", "Gokul", "Gokul",]


function App() {
  let player_Pos = []
  for (let num = 0; num < numOfPlayers; num++) {
    player_Pos.push({ Pos: 1, id: num + 1 })
  }
  const [player, setPlayer] = useState(player_Pos);

  let totalPlayers = []
  for (let index = 0; index < numOfPlayers; index++) {
    totalPlayers.push({
      tag: index,
      playerID: `player${index + 1}`,
      playerIcon: player_Icon[index],
      playerName: player_Name[index],
      playerPos: 1,
    })
  }

  return (
    <div>
      <div className="pageBox">
        <GameDice
          TotalPlayers={totalPlayers}
          PlayerState={setPlayer}
          PlayerPoss={player}
        />
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