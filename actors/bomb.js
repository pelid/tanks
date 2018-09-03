class Bomb{
  constructor({position={x: 0, y: 0}, range=3, timeout=5 * 1000}={}){
    this.commands = new CommandsBuffer()

    this.center = position
    this.range = range
    this.bomb3D = createSphere({radius: 0.4})
    Object.assign(this.bomb3D.position, this.center)
    this.scaleFactor = 1
    this.maxScaleFactor = 1.1
    this.minScaleFactor = 0.7
    this.scaleSpeed = 0.004

    this.timeout = timeout
  }

  async run(){
    scene.add(this.bomb3D)

    let direction = 1
    let startTS = (+ new Date())

    setTimeout(()=>{
      this.commands.push({'slug': 'detonate'})
    }, this.timeout)

    while(true){
      await animationChannel.promise

      let timedelta = (+ new Date()) - startTS

      let detonateCmd = this.commands.getLatest('detonate')
      if (detonateCmd){
        let explosion = new Explosion({position: this.center, maxRange: this.range})
        scene.remove(this.bomb3D)

        await explosion.run()

        return
      }

      this.bomb3D.rotation.x += 0.01
      this.bomb3D.rotation.y += 0.01

      let scaleMultiplier = Math.abs(Math.sin(timedelta * this.scaleSpeed))
      this.scaleFactor = this.minScaleFactor + scaleMultiplier * (this.maxScaleFactor - this.minScaleFactor)

      this.bomb3D.scale.x = this.scaleFactor;
      this.bomb3D.scale.y = this.scaleFactor;
      this.bomb3D.scale.z = this.scaleFactor;

    }

  }
}

class Bomberman{
  async run(){
    let startTS = (+ new Date())

    while(true){
      let seedX = (+ new Date()) % 10
      let seedY = (+ new Date()) % 10
      let bomb = new Bomb({position: {x: seedX-5, y: 5+seedY}})
      await bomb.run()
    }
  }

}
