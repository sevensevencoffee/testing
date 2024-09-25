import Ship from './ship';

class Gameboard {
  constructor(owner) {
    this.owner = owner;
    this.ships = [];
    this.missedAttacks = [];
    this.board = Array(10).fill(null).map(() => Array(10).fill(null));
    this.receivedAttacks = new Set();
  }

  placeShip(length, x, y, isVertical) {
    const ship = new Ship(length);
    if (this.canPlaceShip(length, x, y, isVertical)) {
      for (let i = 0; i < length; i++) {
        if (isVertical) {
          this.board[x][y + i] = { ship, index: i };
        } else {
          this.board[x + i][y] = { ship, index: i };
        }
      }
      this.ships.push(ship);
      return true;
    }
    return false;
  }

  canPlaceShip(length, x, y, isVertical) {
    if (isVertical) {
      if (y + length > 10) return false;
      for (let i = 0; i < length; i++) {
        if (this.board[x][y + i] !== null) return false;
      }
    } else {
      if (x + length > 10) return false;
      for (let i = 0; i < length; i++) {
        if (this.board[x + i][y] !== null) return false;
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    const coordinateString = `${x},${y}`;
    if (this.receivedAttacks.has(coordinateString)) {
      return false; // Already attacked this position
    }
    this.receivedAttacks.add(coordinateString);

    if (this.board[x][y] && this.board[x][y].ship instanceof Ship) {
      const ship = this.board[x][y].ship;
      ship.hit();
      return true;
    } else {
      this.missedAttacks.push({ x, y });
      return false;
    }
  }

  allShipsSunk() {
    const result = this.ships.every(ship => ship.isSunk());
    return result;
  }
}

export default Gameboard;