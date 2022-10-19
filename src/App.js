import React from 'react'
import './App.css'
import GameBox from './gameBox/GameBox';
import GameDice from './dice/GameDice';
import ladder from "./imgs/ladder.png"
import snake from "./imgs/snake.png"



function App() {
  return (
    <div>
      <div className="pageBox">
        <div className="side-box">
          <div className="info-area">
            <div className="title">

              <h1>SNAKE & LADDER</h1>

            </div>

            <div className="button-area">

              <GameDice />

            </div>
          </div>
        </div>
        <div className="game-area">

          <GameBox></GameBox>

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