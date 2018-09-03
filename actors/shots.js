async function runShot({borders, startPosition={x:0, y:0}, direction='right', speed=0.5, filterTanks=()=>true}){
  borders = borders || bf.borders
  let shot = createShot()
  scene.add(shot);

  let {x,y} = startPosition
  shot.position.x = x
  shot.position.y = y

  shot.rotation.z = DIRECTION_TO_RAD[direction]

  const [vx, vy] = DIRECTION_TO_VECTOR[direction]
  const dx = vx * speed
  const dy = vy * speed

  while(true){
    await animationChannel.promise

    shot.position.x += dx
    shot.position.y += dy

    let isInside = [
      shot.position.x <= borders.rightX,
      shot.position.x >= borders.leftX,
      shot.position.y >= borders.bottomY,
      shot.position.y <= borders.topY,
    ]

    if (!_.every(isInside)){
      scene.remove(shot);
      return
    }

    let closeTanks = Array.from(bf.getCloseTanks(shot.position))
    let filteredTanks = _.filter(closeTanks, filterTanks)

    for (let tank of filteredTanks){
      tank.commands.push({slug: 'blow'})
    }

    if (filteredTanks.length){
      scene.remove(shot);
      return
    }
  }

}

async function runHorizontalShots(borders){
  const deltaY = borders.topY - borders.bottomY

  while(true){
    let startPosition = {
      x: borders.leftX,
      y: (+(new Date())) % deltaY + borders.bottomY,
    }
    await runShot({borders, startPosition, direction: 'right'})
  }
}

async function runVerticalShots(borders){
  const deltaX = borders.rightX - borders.leftX

  while(true){
    let startPosition = {
      x: (+(new Date())) % deltaX + borders.leftX,
      y: borders.bottomY,
    }
    await runShot({borders, startPosition, direction: 'up'})
  }
}
