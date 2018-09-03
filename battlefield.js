const DIRECTION_TO_VECTOR = {
  left: [-1, 0],
  right: [1, 0],
  down: [0, -1],
  up: [0, 1],
}

const DIRECTION_TO_RAD = {
  left: 0,
  right: 1 * Math.PI,
  down: 0.5 * Math.PI,
  up: 1.5 * Math.PI,
}

class BattleField{
  constructor(borders){
    this.borders = borders
    this.bombs = []
    this.tanks = []
    this.shots = []
  }

  *getCloseTanks(position, radius=0){
    const tankHalfSize = 0.5
    for (let tank of this.tanks){
      let distX2 = (tank.center.x - position.x) ** 2 + (tank.center.y - position.y) ** 2

      if (distX2 < (radius + tankHalfSize) ** 2){
        yield tank
      }
    }

  }
}
