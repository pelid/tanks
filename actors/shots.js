async function runShots(borders){
  let shot = createShot()
  scene.add(shot);

  while(true){
    await animationChannel.promise

    shot.position.x += 0.5

    if (shot.position.x > borders.rightX){
      shot.position.x = borders.leftX
      shot.position.y = (+(new Date())) % 12 - 5
    }
    // shot.position.x = Math.max(borders.leftX, shot.position.x)
    // shot.position.x = Math.min(borders.rightX, shot.position.x)
    // shot.position.y = Math.max(borders.bottomY, shot.position.y)
    // shot.position.y = Math.min(borders.topY, shot.position.y)

  }

}


async function runShots2(borders){
  let shot = createShot()
  shot.rotation.z = 0.5 * Math.PI
  scene.add(shot);

  while(true){
    await animationChannel.promise

    shot.position.y += 0.5

    if (shot.position.y > borders.topY){
      shot.position.y = borders.bottomY
      shot.position.x = (+(new Date())) % 20 - 5
    }
    // shot.position.x = Math.max(borders.leftX, shot.position.x)
    // shot.position.x = Math.min(borders.rightX, shot.position.x)
    // shot.position.y = Math.max(borders.bottomY, shot.position.y)
    // shot.position.y = Math.min(borders.topY, shot.position.y)

  }

}
