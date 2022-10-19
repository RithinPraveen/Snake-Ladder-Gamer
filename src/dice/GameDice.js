import React, { useState } from 'react'
import './Dice.css'
import dice from '../imgs/dice.png'

function GameDice() {
  let snakeHead = [23, 52, 62, 87, 99]
  let snakeTail = [2, 5, 22, 56, 41]
  let ladderStart = [10, 16, 35, 44, 68]
  let ladderEnd = [33, 38, 55, 79, 90]

  const [player, setPlayer] = useState("Player 1 Chance")
  const PlayerChance = () => {

    setPlayer("Player 2 Chance")


    if (player === "Player 2 Chance") {
      setPlayer("Player 1 Chance")

    }
  }
  
  const [player1, setPlayer1] = useState(1);
  const [player2, setPlayer2] = useState(1);
  const DiceRoll = () => {
    let dice = Math.ceil(Math.random() * 6)
    PlayerChance()
    
    document.getElementById("dice").innerHTML = dice

    if (player === "Player 2 Chance") {
      
      document.getElementById(player1).style.backgroundColor = 'rgb(54, 17, 93)'

      if (ladderStart.includes(player1 + dice)) {
        let index = ladderStart.indexOf(player1 + dice)
        document.getElementById(ladderEnd[index]).style.backgroundColor = 'rgb(95, 96, 95)'
        setPlayer1(ladderEnd[index])

      }
      else if (snakeHead.includes(player1 + dice)) {
        let index = snakeHead.indexOf(player1 + dice)
        document.getElementById(snakeTail[player1 + dice]).style.backgroundColor = 'rgb(95, 96, 95)'
        setPlayer1(snakeTail[index])

      }
      else {
        document.getElementById(`${player1 + dice}`).style.backgroundColor = "rgb(95, 96, 95)"
        setPlayer1(player1 + dice)
      }

    }
    else if (player === "Player 1 Chance") {
      
      document.getElementById(player2).style.backgroundColor = 'rgb(54, 17, 93) '

      if (snakeHead.includes(player2 + dice)) {
        let index = snakeHead.indexOf(player2 + dice)
        document.getElementById(snakeTail[index]).style.backgroundColor = 'black'
        setPlayer2(snakeTail[index])

      }
      else if (ladderStart.includes(player2 + dice)) {
        let index = ladderStart.indexOf(player2 + dice)
        document.getElementById(ladderEnd[index]).style.backgroundColor = 'black'
        setPlayer2(ladderEnd[index])

      }
      else {
        document.getElementById(`${player2 + dice}`).style.backgroundColor = "black"
        setPlayer2(player2 + dice)

      }

    }

    if (player1 === 100) {
      setPlayer1(1)
      setPlayer2(1)
      alert("Player : 1 won")

    }
    else if (player1 > 100) {
      setPlayer1(player1 - dice)
    }
    if (player2 === 100) {
      setPlayer1(1)
      setPlayer2(1)
      alert("Player : 2 won")
    }
    else if (player2 > 100) {
      setPlayer2(player2 - dice)
    }
    
  }

  return (
    <div>
      <h1 id='diceNo'>0</h1>
      <img src={dice} alt="dice" onClick={DiceRoll} id='dice'/>
      {/* <button className='dice' onClick={DiceRoll}>Dice</button> */}
      <div className="chance"><h2 id='Chance'>{player}</h2></div>
      <div className='player1'><h1>Player 1 position : <span className='playerpoint'>{player1}</span></h1></div>
      <div className='player2'><h1>Player 2 position : <span className='playerpoint'>{player2}</span></h1></div>
      <button onClick={() => window.location.reload(false)}>Reset</button>

    </div>
  )
}

export default GameDice