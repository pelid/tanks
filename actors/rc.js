class BaseRCWalker{
  constructor({startX=0, startY=0, maxSpeed=1, minSpeed=0, startDirection='up', borders}={}){
    this.direction = startDirection
    this.center = {x: startX, y: startY}
    this.borders = borders || bf.borders
    this.maxSpeed = maxSpeed
    this.minSpeed = minSpeed
    this.commands = new CommandsBuffer()
  }

  handleWalkCommands(){
    let rotateCommand = this.commands.getLatest('rotate')
    if (rotateCommand){
      this.direction = rotateCommand.direction
    }

    let moveCommand = this.commands.getLatest('move')
    if (moveCommand){
      const [vx, vy] = DIRECTION_TO_VECTOR[this.direction]
      let speed = _.isNil(moveCommand.speed) ? this.maxSpeed : moveCommand.speed
      speed = Math.max(speed, this.minSpeed)
      speed = Math.min(speed, this.maxSpeed)

      let x = this.center.x + vx * speed,
          y = this.center.y + vy * speed

      x = Math.max(this.borders.leftX, x)
      x = Math.min(this.borders.rightX, x)
      y = Math.max(this.borders.bottomY, y)
      y = Math.min(this.borders.topY, y)

      Object.assign(this.center, {x, y})
    }
  }
}
