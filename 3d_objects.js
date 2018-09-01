// //create a group and add the two cubes
// //These cubes can now be rotated / scaled etc as a group
function createTank3D({color=0x00aa00}={}){
  let tank = new THREE.Group();

  let geometry = new THREE.BoxGeometry( 1, 0.9, 0.3 );
  let material = new THREE.MeshPhongMaterial({color: color, vertexColors: THREE.FaceColors});
  let body = new THREE.Mesh( geometry, material );
  body.position.z = 0.1
  body.castShadow = true;
  body.receiveShadow = true;
  tank.add( body );

  let sphere = new THREE.SphereGeometry(0.3, 8, 4, 0, 6.3, 0, 1.3); // https://threejs.org/docs/#api/geometries/SphereGeometry
  let turret = new THREE.Mesh( sphere, new THREE.MeshPhongMaterial({color: color}) );
  turret.rotation.x = Math.PI / 2
  turret.position.z = 0.2
  turret.castShadow = true;
  turret.receiveShadow = true;
  tank.add( turret );

  let geometry2 = new THREE.BoxGeometry( 1, 0.1, 0.1 );
  let material2 = new THREE.MeshPhongMaterial({color: color, vertexColors: THREE.FaceColors});
  let gun = new THREE.Mesh( geometry2, material2 );
  gun.position.x = -0.5
  gun.position.z = 0.3
  gun.castShadow = true;
  gun.receiveShadow = true;
  tank.add( gun );

  let geometry3 = new THREE.BoxGeometry( 1.15, 0.2, 0.3 );
  let material3 = new THREE.MeshPhongMaterial({color: 0xaaaaaa, vertexColors: THREE.FaceColors});
  let truck1 = new THREE.Mesh( geometry3, material3 );
  truck1.position.y = 0.4
  tank.add( truck1 );

  let geometry4 = new THREE.BoxGeometry( 1.15, 0.2, 0.3 );
  let material4 = new THREE.MeshLambertMaterial({color: 0xaaaaaa, vertexColors: THREE.FaceColors});
  let truck2 = new THREE.Mesh( geometry4, material4 );
  truck2.position.y = -0.4
  tank.add( truck2 );
  return tank
}

function createBattleField3D(borders){
  let {leftX, rightX, topY, bottomY} = borders
  let borderMaterial = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 2 } );
  let borderGeometry = new THREE.Geometry();

  borderGeometry.vertices.push(new THREE.Vector3( leftX, topY, 0) );
  borderGeometry.vertices.push(new THREE.Vector3( rightX, topY, 0) );
  borderGeometry.vertices.push(new THREE.Vector3( rightX, bottomY, 0) );
  borderGeometry.vertices.push(new THREE.Vector3( leftX, bottomY, 0) );
  borderGeometry.vertices.push(new THREE.Vector3( leftX, topY, 0) );
  let border = new THREE.Line( borderGeometry, borderMaterial );

  return border
}


function createShot(){
  let geometry2 = new THREE.BoxGeometry( 0.7, 0.1, 0.1 );
  let material2 = new THREE.MeshPhongMaterial({color: 0xffffff, vertexColors: THREE.FaceColors});
  let shot = new THREE.Mesh( geometry2, material2 );
  shot.position.x = 0
  shot.position.z = 0
  shot.castShadow = true;
  shot.receiveShadow = true;
  return shot
}
