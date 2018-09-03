class RoboTank{
  async run({startX=0, startY=27}={}){
    let tank = new Tank({startX: startX, startY: startY, startDirection: 'down', lifes: 7})
    tank.run()

    for (let command of this._createPlan(tank)){
      await new Promise(resolve => setTimeout(resolve, 200))
      tank.commands.push(command)
    }
  }

  *_createPlan(tank){
    while(true){
      let seed = (+ new Date())
      let targetTanks = _.filter(bf.tanks, {team: 'players'})
      let targetTank = _.minBy(targetTanks, opponent=>{
        return (opponent.center.x - tank.center.x)**2 + (opponent.center.y - tank.center.y)**2
      })

      if (!targetTank){
        yield {slug: 'move'}
        continue
      }

      let deltaX = targetTank.center.x - tank.center.x
      let deltaY = targetTank.center.y - tank.center.y
      if (Math.abs(deltaX) > Math.abs(deltaY)){
        console.log('Y')
        if (Math.abs(deltaY) > 1){
          console.log('Y, large')
          yield {
            slug: 'rotate',
            direction: deltaY > 0 && 'up' || 'down',
          }

          let steps = Math.min(Math.abs(deltaY), 3)
          yield* _.fill(Array(steps), {slug: 'move'})
        } else {
          yield {
            slug: 'rotate',
            direction: deltaX > 0 && 'right' || 'left',
          }
          yield {slug: 'fire'}
          yield* _.fill(Array(seed % 4), {slug: 'move'})
        }

      } else {
        if (Math.abs(deltaX) > 1){
          yield {
            slug: 'rotate',
            direction: deltaX > 0 && 'right' || 'left',
          }

          let steps = Math.min(Math.abs(deltaX), 3)
          yield* _.fill(Array(steps), {slug: 'move'})
        } else {
          yield {
            slug: 'rotate',
            direction: deltaY > 0 && 'up' || 'down',
          }
          yield {slug: 'fire'}
          yield* _.fill(Array(seed % 4), {slug: 'move'})
        }
      }
      yield {slug: 'fire'}
    }
  }
}
