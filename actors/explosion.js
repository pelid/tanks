class Explosion{
  constructor({position={x: 0, y: 0, z: 0}, maxRange=4}={}){
    this.duration = 300
    this.position = position
    this.maxRange = maxRange
    this.minRange = 1
    this.rangeDelta = this.maxRange - this.minRange
    this.explosion3D = createSphere({color: 0xaa2222, position})
  }
  async run(){
    scene.add(this.explosion3D)

    let explosionSound = new THREE.Audio(window.listener);
    explosionSound.setVolume(1);
    explosionSound.setBuffer(SOUND_BUFFERS.explosion);
    explosionSound.play()

    let startTS = (+ new Date())

    while(true){
      await animationChannel.promise

      let timedelta = (+ new Date()) - startTS

      if (timedelta > this.duration){
        break
      }

      let currentRange = this.minRange + this.rangeDelta * (timedelta / this.duration)

      this.explosion3D.scale.x = currentRange;
      this.explosion3D.scale.y = currentRange;
      this.explosion3D.scale.z = currentRange;
    }

    scene.remove(this.explosion3D)
    for (let tank of bf.getCloseTanks(this.position, this.maxRange)){
      tank.commands.push({slug: 'blow'})
    }

  }
}
