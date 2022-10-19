// import React from 'react'
import './GameBox.css'

const GameBox = () => {
    
    
    let arr = []
    
    for (let i = 100; i >= 1; i -= 10) {
        if (i % 20 === 0) {
            for (let j = i; j > (i - 10); j--) {
                arr.push(j)
            }
        } else {
            for (let j = (i - 9); j <= i; j++) {
                arr.push(j)
            }
        }
        
    }
    function Blocks(prop) {

        // let idNo = {prop.count}
        // console.log(idNo);

        return (
            // <h2>{prop.count}</h2>
        <div className={prop.count} id={prop.count}>
            {prop.count}
        </div>)
    }
    return (
        <div>
            <div className="game-box">
                <div className="main-box">
                    {arr.map(val => <Blocks count={val} />)}
                </div>
            </div>
        </div>
    )
}

export default GameBox