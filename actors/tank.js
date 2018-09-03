
class Tank extends BaseRCWalker{
  constructor({color, startX=0, startY=0, maxSpeed=1, startDirection='up', borders, lifes=3, fireTimeout=1000, team}={}){
    super({startX, startY, maxSpeed, startDirection, borders})
    this.startX = startX
    this.startY = startY
    this.tank3D = createTank3D({color})
    this.lifes = 3
    this.fireTimeout = fireTimeout
    this.team = team
  }

  async run(){
    scene.add(this.tank3D );
    bf.tanks.push(this)

    // create a global audio source
    let fireSound = new THREE.Audio(window.listener);
    fireSound.setVolume(1);
    fireSound.setBuffer(SOUND_BUFFERS.fire);

    let canFire = true
    // place on start position
    while(true){
      await animationChannel.promise

      this.handleWalkCommands()

      let blowCommand = this.commands.getLatest('blow')
      if (blowCommand){
        let explosion = new Explosion({position: this.center, maxRange: 2})
        _.remove(bf.tanks, this)
        scene.remove(this.tank3D)
        this.lifes -= 1
        await explosion.run()
        if (this.lifes <= 0){
          return
        }
        await new Promise(resolve=>setTimeout(resolve, 500))
        this.center = {x: this.startX, y: this.startY}
        bf.tanks.push(this)
        scene.add(this.tank3D)
      }


      let fireCommand = this.commands.getLatest('fire')
      if (fireCommand && canFire){
        fireSound.play();

        runShot({
          startPosition: this.tank3D.position,
          direction: this.direction,
        })
        canFire=false
        setTimeout(()=>canFire=true, this.fireTimeout)
      }

      this.commands.flush()

      this.tank3D.rotation.z = DIRECTION_TO_RAD[this.direction]
      Object.assign(this.tank3D.position, this.center)
    }
  }
}
