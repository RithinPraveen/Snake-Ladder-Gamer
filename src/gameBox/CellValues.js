import React from 'react'


function CellValues({ count, playerIcon, PlayerPoss }) {
  
  return (
    <div className='box'>
      <div>{count}</div>
      {playerIcon.map((val, key) =>
        <span key={key} >{PlayerPoss[key].Pos === count ? playerIcon[key].playerIcon : ''}</span>
      )}
    </div>
  )
}

export default CellValues