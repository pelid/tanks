
class Tank{
  constructor({color, startX=0, startY=0, maxSpeed=1, direction='up', borders}={}){
    this.direction = direction
    this.tank3D = createTank3D({color})
    Object.assign(this.tank3D.position, {
      x: startX,
      y: startY,
      z: 0,
    })
    this.tank3D.rotation.z = this._getZRad(this.direction)
    this.maxSpeed = maxSpeed
    this.channel = new Channel()
    this.borders = borders
  }

  async _collectCommands(commandsBuffer){
    while(true){
      let command = await this.channel.promise;
      commandsBuffer.push(command)
    }
  }

  _getXYDelta(direction, dx, dy){
    if (direction == 'left'){
      return [-dx, 0]
    } else if (direction == 'right'){
      return [dx, 0]
    } else if (direction == 'down'){
      return [0, -dy]
    } else if (direction == 'up'){
      return [0, dy]
    }
  }

  _getZRad(direction){
    if (direction == 'left'){
      return 0
    } else if (direction == 'right'){
      return 1 * Math.PI
    } else if (direction == 'down'){
      return 0.5 * Math.PI
    } else if (direction == 'up'){
      return 1.5 * Math.PI
    }
    throw Error(`Unknown direction - ${direction}`)
  }

  async run(){
    scene.add(this.tank3D );

    let commandsBuffer = []
    this._collectCommands(commandsBuffer)

    // place on start position
    while(true){
      await animationChannel.promise

      let rotateCommand = _.findLast(commandsBuffer, {slug: 'rotate'})
      this.direction = rotateCommand && rotateCommand.direction || this.direction
      this.tank3D.rotation.z = this._getZRad(this.direction)

      let moveCommand = _.findLast(commandsBuffer, {slug: 'move'})
      if (moveCommand){
        let [dx, dy] = this._getXYDelta(this.direction, this.maxSpeed, this.maxSpeed)
        this.tank3D.position.x += dx
        this.tank3D.position.y += dy
      }

      this.tank3D.position.x = Math.max(this.borders.leftX, this.tank3D.position.x)
      this.tank3D.position.x = Math.min(this.borders.rightX, this.tank3D.position.x)
      this.tank3D.position.y = Math.max(this.borders.bottomY, this.tank3D.position.y)
      this.tank3D.position.y = Math.min(this.borders.topY, this.tank3D.position.y)


      _.remove(commandsBuffer, ()=>true)
    }
  }
}
