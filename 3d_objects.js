// //create a group and add the two cubes
// //These cubes can now be rotated / scaled etc as a group
function createTank({color=0x00aa00}={}){
  var tank = new THREE.Group();

  var geometry = new THREE.BoxGeometry( 1, 0.9, 0.3 );
  var material = new THREE.MeshPhongMaterial({color: color, vertexColors: THREE.FaceColors});
  var body = new THREE.Mesh( geometry, material );
  body.position.z = 0.1
  body.castShadow = true;
  body.receiveShadow = true;
  tank.add( body );

  var sphere = new THREE.SphereGeometry(0.3, 8, 4, 0, 6.3, 0, 1.3); // https://threejs.org/docs/#api/geometries/SphereGeometry
  var turret = new THREE.Mesh( sphere, new THREE.MeshPhongMaterial({color: color}) );
  turret.rotation.x = Math.PI / 2
  turret.position.z = 0.2
  turret.castShadow = true;
  turret.receiveShadow = true;
  tank.add( turret );

  var geometry2 = new THREE.BoxGeometry( 1, 0.1, 0.1 );
  var material2 = new THREE.MeshPhongMaterial({color: color, vertexColors: THREE.FaceColors});
  var gun = new THREE.Mesh( geometry2, material2 );
  gun.position.x = -0.5
  gun.position.z = 0.3
  gun.castShadow = true;
  gun.receiveShadow = true;
  tank.add( gun );

  var geometry3 = new THREE.BoxGeometry( 1.15, 0.2, 0.3 );
  var material3 = new THREE.MeshPhongMaterial({color: 0xaaaaaa, vertexColors: THREE.FaceColors});
  var truck1 = new THREE.Mesh( geometry3, material3 );
  truck1.position.y = 0.4
  tank.add( truck1 );

  var geometry4 = new THREE.BoxGeometry( 1.15, 0.2, 0.3 );
  var material4 = new THREE.MeshLambertMaterial({color: 0xaaaaaa, vertexColors: THREE.FaceColors});
  var truck2 = new THREE.Mesh( geometry4, material4 );
  truck2.position.y = -0.4
  tank.add( truck2 );
  return tank
}