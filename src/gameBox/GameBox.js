import CellValues from './CellValues'
import './GameBox.css'



const GameBox = ({TotalPlayers}) => {


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
    return (
        <div>
            <div className="game-box">
                <div className="main-box">
                    {arr.map(val =>
                        <div className="cell" id={val.toString()}>
                            <div className="grid">
                                <CellValues
                                    key={val}
                                    count={val}
                                    playerIcon={TotalPlayers}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GameBox