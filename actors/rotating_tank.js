async function runRotatingTank(){
  let tank = createTank3D()
  scene.add( tank );

  while(true){
    tank.rotation.x += 0.01;
    tank.rotation.y += 0.05;
    await animationChannel.promise
  }
}
