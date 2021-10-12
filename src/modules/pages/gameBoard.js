import React, {useState, useEffect} from "react";
import ShipState from "../components/gameboard/shipState";

export const GameBoard = () => {
  const ROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const COL = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  const [livePoint, decreaseLivePoint] = useState(100);
  const [shoots, setShoots] = useState([]);
  const [pointList, setPointList] = useState([]);
  const [shipPositions, setShipPositions] = useState([]);

  const batleships = [
    {name: "battleship",  length: 3, live: 4},
    {name: "cruise_1",    length: 2, live: 3},
    {name: "cruise_2",    length: 2, live: 3},
    {name: "submarine_1", length: 1, live: 2},
    {name: "submarine_2", length: 1, live: 2},
    {name: "submarine_3", length: 1, live: 2},
    {name: "destroyer_1", length: 0, live: 1},
    {name: "destroyer_2", length: 0, live: 1},
    {name: "destroyer_3", length: 0, live: 1},
    {name: "destroyer_4", length: 0, live: 1}
  ];

  const getRandomArbitrary = (min = 0, max = 10) => {
    return Math.trunc(Math.random() * (max - min) + min);
  };

  const getShipPosition = (lengths) => {
    const randomNumber = new Date().getMilliseconds();
    const rowPosition = getRandomArbitrary();
    const columnPosition = getRandomArbitrary();
    const isVertical = randomNumber % 2 === 0;
    const isRigth = getRandomArbitrary(0, randomNumber) % 2 === 1;
    return {column_0: columnPosition, row_0: rowPosition, vertical: isVertical, rigthUp: isRigth};
  };

  const setHorizontalLoc = (initialpoint, length) => {
    let col_0 = initialpoint.column_0;
    let col_1 = 0;
    let row_0 = initialpoint.row_0;
    let numbers = [];
    col_1 = initialpoint.rigthUp ? col_0 + length : col_0 - length;
    if (col_1 > 9) {
      col_1 = 9;
      col_0 = 9 - length;
    }
    if (col_1 < 0) {
      col_1 = 0;
      col_0 = length;
    }
    for (let i = 0; i <= length; i++) {
      numbers.push(row_0 * 10 + col_0 + i + 1);
    }
    return numbers;
  };

  const setVerticalLoc = (initialpoint, length) => {
    let col_0 = initialpoint.column_0;
    let row_0 = initialpoint.row_0;
    let row_1 = 0;
    let numbers = [];
    row_1 = initialpoint.rigthUp ? row_0 + length : row_0 - length;
    if (row_1 > 9) {
      row_1 = 9;
      row_0 = 9 - length;
    }
    if (row_1 < 0) {
      row_1 = 0;
      row_0 = length;
    }
    for (let i = 0; i <= length; i++) {
      numbers.push((row_0 + i) * 10 + col_0 + 1);
    }
    return numbers;
  };

  useEffect(() => {
    let realPositionNumbers = [];
    let battlelocation = batleships.map((ship, index) => {
      let isPositionTaken = true;
      let locationNumbers = [];
      for (; isPositionTaken; ) {
        const initialPoint = getShipPosition();
        locationNumbers = initialPoint.vertical ? setVerticalLoc(initialPoint, ship.length) : setHorizontalLoc(initialPoint, ship.length);
        isPositionTaken = locationNumbers.filter((resultLocation) => realPositionNumbers.some((prevNumber) => prevNumber === resultLocation)).length > 0;
      }
      realPositionNumbers = [...realPositionNumbers, ...locationNumbers];

      return {...ship, numbers: locationNumbers};
    });
    setShipPositions(battlelocation);
    setPointList(realPositionNumbers);
  }, []);

  const shotShip = (row, col)=>{
    let hit = Number(row) * 10 + Number(col) + 1;

    let isHit = pointList.some((point) => point === hit);

    if (isHit){
        return alert('you hit me')
    }   
        setPointList([...pointList,isHit ])

    console.log('next try')
  }

  return (
    <div>
      <div> @todo-Titulo </div>
      <div>
        <div>
          live points <label>{livePoint}</label>
        </div>
        {ROW.map((row) => {
          return (
            <div style={{display: "flex", width: "100%"}}>
              {COL.map((col,colIndex) => {
                return (
                  <div key={col + row} className='' style={{width: "100px", padding: "10px"}} onClick={()=>shotShip(row, colIndex)}>
                    <label>{`${col}_${row + 1}`}</label>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <ShipState ships={batleships} />
    </div>
  );
};
