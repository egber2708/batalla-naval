import React from 'react'

export const  GameSelector= ()=>{
    return (
        <div className='game-options-container'>
            <h1>Welcome</h1>
            <h3>You are about to start play the battleship Game</h3>
            <h3>Enter your code name:</h3>
            <input type='text'     />
            <div className='level-options-container'>
                <label>Enter your Dificulty level</label>
                <span> Begginer </span>
                <span> Middle   </span>
                <span> Advance  </span>
            </div>
            <button> Start Now </button>
        </div>
    )
}
