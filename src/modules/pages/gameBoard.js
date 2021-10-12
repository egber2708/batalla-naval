import React, {useState, useEffect} from "react";

import {useInitializeGame} from '../../hooks/useInitializeGame';

export const GameBoard = ({name, level, history}) => {
  const ROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const COL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const BATTLESHIP = [
    {name: "battleship", length: 3, live: 4},
    {name: "cruise_1", length: 2, live: 3},
    {name: "cruise_2", length: 2, live: 3},
    {name: "submarine_1", length: 1, live: 2},
    {name: "submarine_2", length: 1, live: 2},
    {name: "submarine_3", length: 1, live: 2},
    {name: "destroyer_1", length: 0, live: 1},
    {name: "destroyer_2", length: 0, live: 1},
    {name: "destroyer_3", length: 0, live: 1},
    {name: "destroyer_4", length: 0, live: 1}
  ];

  const [shipPositions, setShipPositions] = useInitializeGame(BATTLESHIP);

  const [livePoint, reduceLivePoint] = useState(level)
  const [shoots, setShoots]         = useState([]);  
  const [pointList, setPointList] = useState([]);

  useEffect(() => {
      if (livePoint === 0) {
          history.push('/')
          alert('Game Over')
      }
  }, [livePoint]);


 const isValidPoint = (hitNumber)=>{
    let isHit = false;
    let shipResults = shipPositions.map( item => {
        let live = item.live;
        if (item.numbers.some(number=>number === hitNumber)){
            isHit = true;
            live =  item.live - 1;
        }
        return {...item, live: live}
    })
    if (isHit) setShipPositions(shipResults);
    return isHit;
 }



  const shotShip = (row, col)=>{
    let hitNumber = Number(row) * 10 + Number(col)+ 1;
    if (shoots.some((shoot) => shoot === hitNumber)) return ;
    setShoots([...shoots, hitNumber]);  
    if (isValidPoint(hitNumber)){
        setPointList([...pointList, hitNumber]);
    }   
    reduceLivePoint(livePoint - 1);
  }
  



  return (
    <div>
      <div> @todo-Titulo {name} </div>
      <div>
        <div>
          live points <label>{livePoint}</label>
        </div>
        {ROW.map((row) => {
          return (
            <div style={{display: "flex", width: "100%"}}>
              {COL.map((col, colIndex) => {
                return (
                  <div key={col + row} className='' style={{width: "100px", padding: "10px"}} onClick={() => shotShip(row, colIndex)}>
                    <label>{`${col}_${row + 1}`}</label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
