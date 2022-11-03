import React, { useState } from 'react'
import './Dice.css'
import dicePic from '../imgs/dice.png'
import resetPic from '../imgs/reset1.png'
import GameBox from '../gameBox/GameBox'






function GameDice({ TotalPlayers, PlayerState, PlayerPoss }) {


  let snakeHead = [23, 52, 62, 87, 99]
  let snakeTail = [2, 5, 22, 56, 41]
  let ladderStart = [10, 16, 35, 44, 68]
  let ladderEnd = [33, 38, 55, 79, 90]


  let playerChance = []
  for (let chance = 0; chance < TotalPlayers.length; chance++) {
    playerChance.push(TotalPlayers[chance].playerName)
  }

  const [player, setPlayer] = useState("start")
  const [count, setCount] = useState(0)
  const [update, setUpdate] = useState(PlayerPoss)

  const PlayerChance = () => {
    setPlayer(playerChance[count])
    if (count === TotalPlayers.length - 1) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }



  const [random, setRandom] = useState(0);
  const [playerCount, setPlayerCount] = useState(1)

  const DiceRoll = () => {
    PlayerChance()
    let dice = Math.ceil(Math.random() * 6)
    setRandom(dice)
    setPlayerCount(playerCount + 1)

    update.forEach((element) => {
      if (playerCount === element.id) {

        if (snakeHead.includes(element.Pos + dice)) {
          element.Pos = (snakeTail[snakeHead.indexOf(element.Pos + dice)])
        } else if (ladderStart.includes(element.Pos + dice)) {
          element.Pos = (ladderEnd[ladderStart.indexOf(element.Pos + dice)])
        } else {
          element.Pos += dice
        }

        if (element.Pos === 100) {
          element.Pos = 1
          alert(`${TotalPlayers[count].playerName} won`)
        }
        else if (element.Pos > 100) {
          let last = element.Pos - dice
          element.Pos = (last)
        }
        if (playerCount === update.length) {
          setPlayerCount(1)
        }
      }
    })
    PlayerState(PlayerPoss)

    setUpdate(update)
  }

  TotalPlayers.forEach(i => {
    if (count === i.tag) {
      i.playerPos = PlayerPoss[count].Pos
    }
  })

  console.log(PlayerPoss[count].Pos)
  


  return (
    <div className="PageBox">
      <div className="side-box">
        <div className="info-area">
          <div className="title">
            <h1>Snake  And  Ladder</h1>
          </div>
          <div className="button-area">

            <img src={dicePic} alt="dice" onClick={DiceRoll} id='dice' className='dice' />
            <h2 id='diceNo'>{random}</h2>

            <div className="chance"><h1 id='Chance'>{player}</h1></div>
            {TotalPlayers.map((valu, key) =>
              <div key={key} className={`player${key}`}>
                <span className='playerSpan'>
                  {valu.playerName} {valu.playerIcon} Position :
                  <span className='playerpoint'>
                    {PlayerPoss[key].Pos}
                  </span>
                </span>
              </div>
            )}
            <br />
            <img className='reset' src={resetPic} alt="rest" onClick={() => window.location.reload(false)}/>
          </div>

        </div>
      </div>
      <div className="game-area">
        <GameBox
          TotalPlayers={TotalPlayers}
          PlayerPoss={update}
        />
      </div>
    </div>



  )
}


export default GameDice