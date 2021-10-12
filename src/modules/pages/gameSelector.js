import React from 'react'

export const  GameSelector= ({setUser, setLevel, history})=>{

    const LEVELS = [
      {id: 1, text: "Begginer",     points: 100},
      {id: 2, text: "Intermedia",   points: 50},
      {id: 3, text: "Advance",      points: 30}
    ];

    const selectLevel = (points)=>{
        setLevel(points)
    }

    const letsPlay = ()=>{
        history.push('/play')
    }

    const setName = (e)=>{
        setUser(e.target.value)
    }

    return (
      <div className='game-options-container'>
        <h1>Welcome</h1>
        <h3>You are about to start play the battleship Game</h3>
        <div className='level-options-container'>
          <label>Enter your Dificulty level</label>
          <div>
            {LEVELS.map((item) => (
              <span key={item.id} onClick={() => selectLevel(item.points)}>
                {item.text}
              </span>
            ))}
          </div>
        </div>
        <button onClick={letsPlay}> Start Now </button>
      </div>
    );
}
