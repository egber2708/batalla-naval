import {useState, useEffect} from 'react'

export const useInitializeGame = (batleships) => {
 
  const [shipPositions, setShipPositions] = useState([]);

  
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
  }, []);

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

  return [shipPositions, setShipPositions];
};
