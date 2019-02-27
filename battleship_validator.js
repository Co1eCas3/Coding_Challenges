// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

function isValidPlacement(hitCoords) {
  let cornerCheck = false;

  for (let i = 0; i < hitCoords.length; i++) {
    if (cornerCheck) break;

    let cur = hitCoords[i];

    cornerCheck = hitCoords.find(
      next =>
        (next.x === cur.x + 1 && next.y === cur.y - 1) ||
        (next.x === cur.x + 1 && next.y === cur.y + 1)
    );
  }

  return !cornerCheck;
}

function validateBattlefield(field) {
  const hitCoords = field.reduce((hits, xAxis, i) => {
    for (let j = 0; j < xAxis.length; j++) {
      const hitCoord = { x: i };
      if (xAxis[j]) {
        hitCoord.y = j;
        hits.push(hitCoord);
      }
    }

    return hits;
  }, []);

  if (hitCoords.length !== 20) {
    console.error("Wrong number of hits");
    return false;
  }

  if (!isValidPlacement(hitCoords)) {
    console.error("Invalid placement");
    return false;
  }

  let battleship = [],
    cruisers = [],
    destroyers = [],
    submarines = [];

  findShips(hitCoords);

  return (
    battleship.length === 4 &&
    cruisers.length === 2 &&
    destroyers.length === 3 &&
    submarines.length === 4
  );

  function findShips(hitCoords) {
    if (!hitCoords.length) return;

    let ship = hitCoords.reduce((shipCoords, cur, i) => {
      if (i === 0) {
        shipCoords.push(cur);
        return shipCoords;
      }

      let last = shipCoords[shipCoords.length - 1];

      if (
        (cur.x === last.x && cur.y === last.y + 1) ||
        (cur.x === last.x + 1 && cur.y === last.y)
      ) {
        shipCoords.push(cur);
      }

      return shipCoords;
    }, []);

    switch (ship.length) {
      case 4:
        battleship = ship;
        break;
      case 3:
        cruisers.push(ship);
        break;
      case 2:
        destroyers.push(ship);
        break;
      default:
        submarines.push(ship[0]);
        break;
    }

    ship.forEach(coord => {
      hitCoords.splice(hitCoords.indexOf(coord), 1);
    });

    findShips(hitCoords);
  }
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ])
);
